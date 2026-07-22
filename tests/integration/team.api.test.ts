import request from "supertest";
import { describe, it, expect, beforeAll } from "vitest";
import app from "../../src/app";
import { prisma } from "../../src/db/prisma";

describe("Team Management API (/api/team/*)", () => {
  const tenantSlug = "test-team-tenant";
  const ownerEmail = "owner-team@test.com";
  const ownerPassword = "SuperSecretTeam123!";
  const inviteeEmail = "invitee-team@test.com";
  let ownerToken = "";
  let inviteToken = "";

  beforeAll(async () => {
    const existing = await prisma.tenant.findUnique({ where: { slug: tenantSlug } });
    if (existing) {
      await prisma.invitation.deleteMany({ where: { tenantId: existing.id } });
      await prisma.session.deleteMany({ where: { user: { tenantId: existing.id } } });
      await prisma.tenantUser.deleteMany({ where: { tenantId: existing.id } });
      await prisma.tenant.delete({ where: { id: existing.id } });
    }

    const regRes = await request(app).post("/api/auth/register").send({
      tenantName: "Team Test Tenant",
      slug: tenantSlug,
      email: ownerEmail,
      password: ownerPassword,
      firstName: "Team",
      lastName: "Owner",
    });

    ownerToken = regRes.body.accessToken;
  });

  it("GET /api/team/members lists tenant team members", async () => {
    const res = await request(app)
      .get("/api/team/members")
      .set("Authorization", `Bearer ${ownerToken}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBe(1);
    expect(res.body.data[0].email).toBe(ownerEmail);
  });

  it("POST /api/team/invites issues user invitation token", async () => {
    const res = await request(app)
      .post("/api/team/invites")
      .set("Authorization", `Bearer ${ownerToken}`)
      .send({
        email: inviteeEmail,
        role: "DEVELOPER",
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.invitation).toBeDefined();
    expect(res.body.devInviteToken).toBeDefined();

    inviteToken = res.body.devInviteToken;
  });

  it("GET /api/team/invites/public/:token previews invitation details", async () => {
    const res = await request(app).get(`/api/team/invites/public/${inviteToken}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.email).toBe(inviteeEmail);
    expect(res.body.data.role).toBe("DEVELOPER");
    expect(res.body.data.isExpired).toBe(false);
  });

  it("POST /api/team/invites/accept accepts invitation and creates account", async () => {
    const res = await request(app).post("/api/team/invites/accept").send({
      token: inviteToken,
      password: "InviteePassword123!",
      firstName: "Invited",
      lastName: "Developer",
    });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.accessToken).toBeDefined();
    expect(res.body.user.email).toBe(inviteeEmail);
  });

  it("GET /api/team/members returns both owner and newly accepted developer", async () => {
    const res = await request(app)
      .get("/api/team/members")
      .set("Authorization", `Bearer ${ownerToken}`);

    expect(res.status).toBe(200);
    expect(res.body.data.length).toBe(2);
  });
});
