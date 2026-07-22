import request from "supertest";
import { describe, it, expect, beforeAll } from "vitest";
import app from "../../src/app";
import { prisma } from "../../src/db/prisma";

describe("Tenant Authentication API (/api/auth/*)", () => {
  const tenantSlug = "test-auth-tenant";
  const userEmail = "owner-auth@test.com";
  const userPassword = "SuperSecretAuth123!";
  let accessToken = "";
  let cookieHeader = "";

  beforeAll(async () => {
    // Cleanup previous test tenant if exists
    const existing = await prisma.tenant.findUnique({ where: { slug: tenantSlug } });
    if (existing) {
      await prisma.session.deleteMany({ where: { user: { tenantId: existing.id } } });
      await prisma.tenantUser.deleteMany({ where: { tenantId: existing.id } });
      await prisma.tenant.delete({ where: { id: existing.id } });
    }
  });

  it("POST /api/auth/register registers tenant and owner user, setting HttpOnly refresh cookie", async () => {
    const res = await request(app).post("/api/auth/register").send({
      tenantName: "Test Auth Tenant",
      slug: tenantSlug,
      email: userEmail,
      password: userPassword,
      firstName: "Test",
      lastName: "Owner",
    });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.accessToken).toBeDefined();
    expect(res.body.user).toBeDefined();
    expect(res.body.user.email).toBe(userEmail);

    accessToken = res.body.accessToken;
    const cookies = res.get("Set-Cookie");
    expect(cookies).toBeDefined();
    if (cookies) {
      cookieHeader = cookies.find((c) => c.startsWith("refreshToken=")) || "";
      expect(cookieHeader).toContain("HttpOnly");
    }
  });

  it("GET /api/auth/me returns authenticated user profile", async () => {
    const res = await request(app)
      .get("/api/auth/me")
      .set("Authorization", `Bearer ${accessToken}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.email).toBe(userEmail);
    expect(res.body.data.role).toBe("OWNER");
  });

  it("POST /api/auth/login authenticates user with email, password, and tenantSlug", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: userEmail,
      password: userPassword,
      tenantSlug,
    });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.accessToken).toBeDefined();

    const cookies = res.get("Set-Cookie");
    expect(cookies).toBeDefined();
  });

  it("POST /api/auth/refresh rotates refresh token cookie and issues new access token", async () => {
    const res = await request(app)
      .post("/api/auth/refresh")
      .set("Cookie", [cookieHeader]);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.accessToken).toBeDefined();

    accessToken = res.body.accessToken;
    const newCookies = res.get("Set-Cookie");
    expect(newCookies).toBeDefined();
    if (newCookies) {
      cookieHeader = newCookies.find((c) => c.startsWith("refreshToken=")) || cookieHeader;
    }
  });

  it("POST /api/auth/forgot-password issues reset token and link in dev environment", async () => {
    const res = await request(app).post("/api/auth/forgot-password").send({
      email: userEmail,
      tenantSlug,
    });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.devResetToken).toBeDefined();
  });

  it("GET /api/auth/sessions lists active user sessions", async () => {
    const res = await request(app)
      .get("/api/auth/sessions")
      .set("Authorization", `Bearer ${accessToken}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it("POST /api/auth/logout revokes session and clears refresh cookie", async () => {
    const res = await request(app)
      .post("/api/auth/logout")
      .set("Authorization", `Bearer ${accessToken}`)
      .set("Cookie", [cookieHeader]);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
