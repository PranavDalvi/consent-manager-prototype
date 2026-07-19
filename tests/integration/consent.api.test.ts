import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";

import app from "../../src/app";
import { createTenantWithApiKey } from "../setup/database";

const hasSafeTestDatabase = Boolean(
  process.env.NODE_ENV === "test" &&
    (process.env.TEST_DATABASE_URL ?? process.env.DATABASE_URL)
      ?.toLowerCase()
      .includes("consent_manager_test")
);

const describeConsentApi = hasSafeTestDatabase ? describe.sequential : describe.skip;

function uniqueSuffix(): string {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

describeConsentApi("Consent API", () => {
  const userId = "user-integration-consent";
  const purpose = "marketing";

  let tenantAId: string;
  let tenantBId: string;
  let tenantAKey: string;
  let tenantBKey: string;
  let policyId: string;

  beforeEach(async () => {
    const suffix = uniqueSuffix();

    tenantAId = `tenant-consent-a-${suffix}`;
    tenantBId = `tenant-consent-b-${suffix}`;

    const tenantA = await createTenantWithApiKey({
      tenantId: tenantAId,
      tenantName: "Consent Tenant A",
      apiKeyName: "web-app-a",
    });
    const tenantB = await createTenantWithApiKey({
      tenantId: tenantBId,
      tenantName: "Consent Tenant B",
      apiKeyName: "web-app-b",
    });

    tenantAKey = tenantA.rawApiKey;
    tenantBKey = tenantB.rawApiKey;

    const policyResponse = await request(app)
      .post("/api/policies")
      .set("X-API-Key", tenantAKey)
      .send({ title: "Privacy", purpose, version: 1, content: "v1" });

    policyId = policyResponse.body.data.id as string;
  });

  it("rejects missing API key", async () => {
    const response = await request(app).post("/api/consents").send({
      userId,
      policyId,
    });

    expect(response.status).toBe(401);
  });

  it("rejects malformed API key", async () => {
    const response = await request(app)
      .post("/api/consents")
      .set("X-API-Key", "not-a-valid-key")
      .send({ userId, policyId });

    expect(response.status).toBe(401);
  });

  it("rejects invalid API key", async () => {
    const response = await request(app)
      .post("/api/consents")
      .set("X-API-Key", "cm_live_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      .send({ userId, policyId });

    expect(response.status).toBe(401);
  });

  it("grants, checks, fetches, and revokes consent", async () => {
    const grantResponse = await request(app)
      .post("/api/consents")
      .set("X-API-Key", tenantAKey)
      .send({ userId, policyId });

    expect(grantResponse.status).toBe(201);

    const consentId = grantResponse.body.data.id as string;

    const checkGrantedResponse = await request(app)
      .get("/api/consents/check")
      .set("X-API-Key", tenantAKey)
      .query({ userId, purpose });

    expect(checkGrantedResponse.status).toBe(200);
    expect(checkGrantedResponse.body.data).toEqual({ hasConsent: true });

    const fetchResponse = await request(app)
      .get(`/api/consents/user/${userId}`)
      .set("X-API-Key", tenantAKey);

    expect(fetchResponse.status).toBe(200);
    expect(fetchResponse.body.data).toEqual([
      expect.objectContaining({
        id: consentId,
        tenantId: tenantAId,
        userId,
        purpose,
        status: "GRANTED",
      }),
    ]);

    const revokeResponse = await request(app)
      .post(`/api/consents/revoke/${consentId}`)
      .set("X-API-Key", tenantAKey);

    expect(revokeResponse.status).toBe(200);
  });

  it("rejects invalid request data", async () => {
    const missingUser = await request(app)
      .post("/api/consents")
      .set("X-API-Key", tenantAKey)
      .send({ policyId });
    expect(missingUser.status).toBe(400);

    const missingPolicy = await request(app)
      .post("/api/consents")
      .set("X-API-Key", tenantAKey)
      .send({ userId });
    expect(missingPolicy.status).toBe(400);
  });

  it("preserves tenant isolation for consent lookup", async () => {
    const grantResponse = await request(app)
      .post("/api/consents")
      .set("X-API-Key", tenantAKey)
      .send({ userId: "shared-user", policyId });

    expect(grantResponse.status).toBe(201);

    const differentTenantCheck = await request(app)
      .get("/api/consents/check")
      .set("X-API-Key", tenantBKey)
      .query({ userId: "shared-user", purpose });

    expect(differentTenantCheck.status).toBe(200);
    expect(differentTenantCheck.body.data).toEqual({ hasConsent: false });
  });

  it("rejects a nonexistent revoke target", async () => {
    const response = await request(app)
      .post("/api/consents/revoke/nonexistent-consent-id")
      .set("X-API-Key", tenantAKey);

    expect(response.status).toBe(500);
  });
});
