import request from "supertest";
import { describe, it, expect, beforeAll } from "vitest";
import bcrypt from "bcryptjs";
import app from "../../src/app";
import { prisma } from "../../src/db/prisma";

describe("Super Admin Platform Tenant Management API (/api/platform/tenants/*)", () => {
  const adminEmail = "platformadmin-tenants@test.com";
  const adminPassword = "SuperAdminPassword123!";
  const testSlug = "superadmin-created-tenant";
  let superAdminJwt = "";
  let createdTenantId = "";
  let ownerInviteToken = "";

  beforeAll(async () => {
    const passwordHash = await bcrypt.hash(adminPassword, 10);
    await prisma.superAdmin.upsert({
      where: { email: adminEmail },
      update: { passwordHash, isActive: true },
      create: {
        email: adminEmail,
        name: "Test Platform Admin",
        passwordHash,
        role: "SUPER_ADMIN",
        isActive: true,
      },
    });

    const loginRes = await request(app)
      .post("/api/platform/auth/login")
      .send({ email: adminEmail, password: adminPassword });

    superAdminJwt = loginRes.body.data.token;

    // Clean up test tenant if exists
    const existing = await prisma.tenant.findUnique({ where: { slug: testSlug } });
    if (existing) {
      await prisma.invitation.deleteMany({ where: { tenantId: existing.id } });
      await prisma.session.deleteMany({ where: { user: { tenantId: existing.id } } });
      await prisma.tenantUser.deleteMany({ where: { tenantId: existing.id } });
      await prisma.tenant.delete({ where: { id: existing.id } });
    }
  });

  it("POST /api/platform/tenants creates tenant and generates owner invitation token", async () => {
    const res = await request(app)
      .post("/api/platform/tenants")
      .set("Authorization", `Bearer ${superAdminJwt}`)
      .send({
        name: "SuperAdmin Created Tenant",
        slug: testSlug,
        ownerEmail: "sa-owner@test.com",
        ownerFirstName: "SA",
        ownerLastName: "Owner",
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.tenant).toBeDefined();
    expect(res.body.data.tenant.slug).toBe(testSlug);
    expect(res.body.data.ownerInviteToken).toBeDefined();
    expect(res.body.data.ownerInviteLink).toBeDefined();

    createdTenantId = res.body.data.tenant.id;
    ownerInviteToken = res.body.data.ownerInviteToken;
  });

  it("GET /api/platform/tenants lists created tenant", async () => {
    const res = await request(app)
      .get("/api/platform/tenants")
      .set("Authorization", `Bearer ${superAdminJwt}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    const found = res.body.data.find((t: any) => t.id === createdTenantId);
    expect(found).toBeDefined();
    expect(found.slug).toBe(testSlug);
  });

  it("PATCH /api/platform/tenants/:tenantId/status updates tenant status lifecycle to SUSPENDED", async () => {
    const res = await request(app)
      .patch(`/api/platform/tenants/${createdTenantId}/status`)
      .set("Authorization", `Bearer ${superAdminJwt}`)
      .send({ status: "SUSPENDED" });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.status).toBe("SUSPENDED");
    expect(res.body.data.isActive).toBe(false);
  });

  it("DELETE /api/platform/tenants/:tenantId soft deletes tenant", async () => {
    const res = await request(app)
      .delete(`/api/platform/tenants/${createdTenantId}`)
      .set("Authorization", `Bearer ${superAdminJwt}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.status).toBe("DELETED");
    expect(res.body.data.isActive).toBe(false);
  });
});
