import request from "supertest";
import { beforeAll, describe, expect, it } from "vitest";

import app from "../../src/app";
import { createTenantWithApiKey } from "../setup/database";

const hasSafeTestDatabase = Boolean(
  process.env.NODE_ENV === "test" &&
    (process.env.TEST_DATABASE_URL ?? process.env.DATABASE_URL)
      ?.toLowerCase()
      .includes("consent_manager_test")
);

const describeAuditApi = hasSafeTestDatabase ? describe.sequential : describe.skip;

function uniqueSuffix(): string {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

describeAuditApi("Audit Logs API", () => {
  const userId = "user-integration-audit";
  const purpose = "marketing";
  const policyVersion = "v1";

  let tenantAId: string;
  let tenantBId: string;
  let tenantAKey: string;
  let tenantBKey: string;
  let consentId: string;
  let policyId: string;

  beforeAll(async () => {
    const suffix = uniqueSuffix();

    tenantAId = `tenant-audit-a-${suffix}`;
    tenantBId = `tenant-audit-b-${suffix}`;

    const tenantA = await createTenantWithApiKey({
      tenantId: tenantAId,
      tenantName: "Audit Tenant A",
      apiKeyName: "audit-app-a",
    });
    const tenantB = await createTenantWithApiKey({
      tenantId: tenantBId,
      tenantName: "Audit Tenant B",
      apiKeyName: "audit-app-b",
    });

    tenantAKey = tenantA.rawApiKey;
    tenantBKey = tenantB.rawApiKey;

    const policyResponse = await request(app)
      .post("/api/policies")
      .set("X-API-Key", tenantAKey)
      .send({
        title: "Privacy Policy",
        purpose,
        version: 1,
        content: "v1",
      });

    policyId = policyResponse.body.data.id as string;

    const response = await request(app)
      .post("/api/consents")
      .set("X-API-Key", tenantAKey)
      .send({ userId, policyId });

    expect(response.status).toBe(201);
    consentId = response.body.data.id as string;
  });

  it("rejects missing API key", async () => {
    const response = await request(app).get("/api/audit").query({ userId });
    expect(response.status).toBe(401);
  });

  it("rejects invalid API key", async () => {
    const response = await request(app)
      .get("/api/audit")
      .set("X-API-Key", "invalid")
      .query({ userId });
    expect(response.status).toBe(401);
  });

  it("returns a CONSENT_GRANTED audit log", async () => {
    const response = await request(app)
      .get("/api/audit")
      .set("X-API-Key", tenantAKey)
      .query({ userId });

    expect(response.status).toBe(200);
    expect(response.body.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          tenantId: tenantAId,
          userId,
          action: "CONSENT_GRANTED",
          purpose,
        }),
      ])
    );
  });

  it("returns both CONSENT_GRANTED and CONSENT_REVOKED logs", async () => {
    const revokeResponse = await request(app)
      .post(`/api/consents/revoke/${consentId}`)
      .set("X-API-Key", tenantAKey);

    expect(revokeResponse.status).toBe(200);

    const response = await request(app)
      .get("/api/audit")
      .set("X-API-Key", tenantAKey)
      .query({ userId });

    expect(response.status).toBe(200);
    expect(response.body.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ action: "CONSENT_GRANTED", tenantId: tenantAId, userId, purpose }),
        expect.objectContaining({ action: "CONSENT_REVOKED", tenantId: tenantAId, userId, purpose }),
      ])
    );
  });

  it("returns audit logs in descending creation order", async () => {
    const revokeResponse = await request(app)
      .post(`/api/consents/revoke/${consentId}`)
      .set("X-API-Key", tenantAKey);

    expect(revokeResponse.status).toBe(200);

    const response = await request(app)
      .get("/api/audit")
      .set("X-API-Key", tenantAKey)
      .query({ userId });

    expect(response.status).toBe(200);
    expect(response.body.data[0].action).toBe("CONSENT_REVOKED");
    expect(response.body.data[1].action).toBe("CONSENT_GRANTED");
  });

  it("rejects a request without userId", async () => {
    const response = await request(app)
      .get("/api/audit")
      .set("X-API-Key", tenantAKey)
      .query({});
    expect(response.status).toBe(400);
  });

  it("does not expose logs belonging to another tenant", async () => {
    const response = await request(app)
      .get("/api/audit")
      .set("X-API-Key", tenantBKey)
      .query({ userId });

    expect(response.status).toBe(200);
    expect(response.body.data).toEqual([]);
  });

  it("returns an empty array for unknown users", async () => {
    const unknownUser = await request(app)
      .get("/api/audit")
      .set("X-API-Key", tenantAKey)
      .query({ userId: "unknown-user" });
    expect(unknownUser.body.data).toEqual([]);
  });
});
