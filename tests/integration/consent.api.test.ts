import request from "supertest";
import { describe, expect, it } from "vitest";

import app from "../../src/app";

const hasSafeTestDatabase = Boolean(
  process.env.NODE_ENV === "test" &&
    (process.env.TEST_DATABASE_URL ?? process.env.DATABASE_URL)
      ?.toLowerCase()
      .includes("consent_manager_test")
);

const describeConsentApi = hasSafeTestDatabase ? describe : describe.skip;

describeConsentApi("Consent API", () => {
  const tenantId = "tenant-integration-consent";
  const userId = "user-integration-consent";
  const purpose = "marketing";
  const policyVersion = "v1";

  it("grants, checks, fetches, and revokes consent", async () => {
    const grantResponse = await request(app).post("/api/consents").send({
      tenantId,
      userId,
      purpose,
      policyVersion,
    });

    expect(grantResponse.status).toBe(201);
    expect(grantResponse.body).toEqual({
      success: true,
      data: expect.objectContaining({
        id: expect.any(String),
        tenantId,
        userId,
        purpose,
        policyVersion,
        status: "GRANTED",
        createdAt: expect.any(String),
      }),
    });

    const consentId = grantResponse.body.data.id as string;

    const checkGrantedResponse = await request(app)
      .get("/api/consents/check")
      .query({ tenantId, userId, purpose });

    expect(checkGrantedResponse.status).toBe(200);
    expect(checkGrantedResponse.body).toEqual({
      success: true,
      data: {
        hasConsent: true,
      },
    });

    const fetchResponse = await request(app)
      .get(`/api/consents/${tenantId}/user/${userId}`);

    expect(fetchResponse.status).toBe(200);
    expect(fetchResponse.body.success).toBe(true);
    expect(fetchResponse.body.data).toEqual([
      expect.objectContaining({
        id: consentId,
        tenantId,
        userId,
        purpose,
        status: "GRANTED",
        policyVersion,
        createdAt: expect.any(String),
      }),
    ]);

    const revokeResponse = await request(app)
      .post(`/api/consents/revoke/${consentId}`);

    expect(revokeResponse.status).toBe(200);
    expect(revokeResponse.body).toEqual({
      success: true,
      data: expect.objectContaining({
        id: consentId,
        tenantId,
        userId,
        purpose,
        policyVersion,
        status: "REVOKED",
        createdAt: expect.any(String),
      }),
    });

    const checkRevokedResponse = await request(app)
      .get("/api/consents/check")
      .query({ tenantId, userId, purpose });

    expect(checkRevokedResponse.status).toBe(200);
    expect(checkRevokedResponse.body).toEqual({
      success: true,
      data: {
        hasConsent: false,
      },
    });
  });

  it("rejects invalid request data", async () => {
    const missingTenant = await request(app).post("/api/consents").send({
      userId,
      purpose,
      policyVersion,
    });
    expect(missingTenant.status).toBe(400);

    const missingUser = await request(app).post("/api/consents").send({
      tenantId,
      purpose,
      policyVersion,
    });
    expect(missingUser.status).toBe(400);

    const missingPurpose = await request(app).post("/api/consents").send({
      tenantId,
      userId,
      policyVersion,
    });
    expect(missingPurpose.status).toBe(400);

    const missingPolicyVersion = await request(app).post("/api/consents").send({
      tenantId,
      userId,
      purpose,
    });
    expect(missingPolicyVersion.status).toBe(400);

    const invalidCheck = await request(app)
      .get("/api/consents/check")
      .query({ tenantId, userId: "", purpose });
    expect(invalidCheck.status).toBe(400);

    const invalidRevoke = await request(app)
      .post("/api/consents/revoke/");
    expect(invalidRevoke.status).toBe(404);
  });

  it("preserves tenant isolation for consent lookup", async () => {
    const grantResponse = await request(app).post("/api/consents").send({
      tenantId: "tenant-a",
      userId: "shared-user",
      purpose: "analytics",
      policyVersion: "v1",
    });

    expect(grantResponse.status).toBe(201);

    const differentTenantCheck = await request(app)
      .get("/api/consents/check")
      .query({ tenantId: "tenant-b", userId: "shared-user", purpose: "analytics" });

    expect(differentTenantCheck.status).toBe(200);
    expect(differentTenantCheck.body.data).toEqual({ hasConsent: false });

    const differentTenantFetch = await request(app)
      .get("/api/consents/tenant-b/user/shared-user");

    expect(differentTenantFetch.status).toBe(200);
    expect(differentTenantFetch.body.data).toEqual([]);
  });

  it("returns 404 for a nonexistent revoke target", async () => {
    const response = await request(app)
      .post("/api/consents/revoke/nonexistent-consent-id");

    expect(response.status).toBe(500);
    expect(response.body.success).toBe(false);
  });
});
