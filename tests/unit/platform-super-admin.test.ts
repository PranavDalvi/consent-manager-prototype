import request from "supertest";
import { describe, it, expect, beforeAll } from "vitest";
import bcrypt from "bcryptjs";
import app from "../../src/app";
import { prisma } from "../../src/db/prisma";

describe("Super Admin Platform API & Auth", () => {
  const adminEmail = "testadmin@platform.com";
  const adminPassword = "SuperAdminPassword123!";
  let jwtToken = "";

  beforeAll(async () => {
    // Clean up test admin if exists
    await prisma.superAdmin.deleteMany({ where: { email: adminEmail } });

    const passwordHash = await bcrypt.hash(adminPassword, 10);
    await prisma.superAdmin.create({
      data: {
        email: adminEmail,
        name: "Test Platform Operator",
        passwordHash,
        role: "SUPER_ADMIN",
        isActive: true,
      },
    });
  });

  it("rejects unauthorized access to platform endpoints", async () => {
    const res = await request(app).get("/api/platform/overview");
    expect(res.status).toBe(401);
  });

  it("authenticates Super Admin with valid credentials and returns JWT token", async () => {
    const res = await request(app)
      .post("/api/platform/auth/login")
      .send({ email: adminEmail, password: adminPassword });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.token).toBeDefined();

    jwtToken = res.body.data.token;
  });

  it("grants access to protected platform endpoints with valid JWT token", async () => {
    const overviewRes = await request(app)
      .get("/api/platform/overview")
      .set("Authorization", `Bearer ${jwtToken}`);

    expect(overviewRes.status).toBe(200);
    expect(overviewRes.body.data.traffic).toBeDefined();
    expect(overviewRes.body.data.infrastructure).toBeDefined();
    expect(overviewRes.body.data.platform).toBeDefined();

    const tenantsRes = await request(app)
      .get("/api/platform/tenants")
      .set("Authorization", `Bearer ${jwtToken}`);

    expect(tenantsRes.status).toBe(200);
    expect(Array.isArray(tenantsRes.body.data)).toBe(true);

    const logsRes = await request(app)
      .get("/api/platform/logs")
      .set("Authorization", `Bearer ${jwtToken}`);

    expect(logsRes.status).toBe(200);
    expect(Array.isArray(logsRes.body.data)).toBe(true);
  });

  it("rejects tenant API keys on platform endpoints", async () => {
    const res = await request(app)
      .get("/api/platform/overview")
      .set("X-API-Key", "cm_live_fakeapikey123");

    expect(res.status).toBe(401);
  });
});
