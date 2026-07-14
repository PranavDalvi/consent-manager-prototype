import request from "supertest";
import { beforeAll, describe, expect, it } from "vitest";

import app from "../../src/app";

const hasSafeTestDatabase = Boolean(
  process.env.NODE_ENV === "test" &&
    (process.env.TEST_DATABASE_URL ?? process.env.DATABASE_URL)
      ?.toLowerCase()
      .includes("consent_manager_test")
);

const describeAuditApi = hasSafeTestDatabase ? describe : describe.skip;

describeAuditApi("Audit Logs API", () => {
  const tenantId = "tenant-integration-audit";
  const userId = "user-integration-audit";
  const purpose = "marketing";
  const policyVersion = "v1";

  let consentId: string;

  beforeAll(async () => {
    const response = await request(app).post("/api/consents").send({
      tenantId,
      userId,
      purpose,
      policyVersion,
    });

    expect(response.status).toBe(201);
    consentId = response.body.data.id as string;
  });

  it("returns a CONSENT_GRANTED audit log", async () => {
    const response = await request(app)
      .get("/api/audit")
      .query({ tenantId, userId });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          tenantId,
          userId,
          action: "CONSENT_GRANTED",
          purpose,
          createdAt: expect.any(String),
        }),
      ])
    );
  });

  it("returns both CONSENT_GRANTED and CONSENT_REVOKED logs", async () => {
    const revokeResponse = await request(app)
      .post(`/api/consents/revoke/${consentId}`);

    expect(revokeResponse.status).toBe(200);

    const response = await request(app)
      .get("/api/audit")
      .query({ tenantId, userId });

    expect(response.status).toBe(200);
    expect(response.body.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ action: "CONSENT_GRANTED", tenantId, userId, purpose }),
        expect.objectContaining({ action: "CONSENT_REVOKED", tenantId, userId, purpose }),
      ])
    );
  });

  it("returns audit logs in descending creation order", async () => {
    const response = await request(app)
      .get("/api/audit")
      .query({ tenantId, userId });

    expect(response.status).toBe(200);
    expect(response.body.data[0].action).toBe("CONSENT_REVOKED");
    expect(response.body.data[1].action).toBe("CONSENT_GRANTED");
    expect(new Date(response.body.data[0].createdAt).getTime()).toBeGreaterThanOrEqual(
      new Date(response.body.data[1].createdAt).getTime()
    );
  });

  it("rejects a request without userId", async () => {
    const response = await request(app).get("/api/audit").query({ tenantId });
    expect(response.status).toBe(400);
  });

  it("rejects a request without tenantId", async () => {
    const response = await request(app).get("/api/audit").query({ userId });
    expect(response.status).toBe(400);
  });

  it("does not expose logs belonging to another tenant", async () => {
    const response = await request(app)
      .get("/api/audit")
      .query({ tenantId: "different-tenant", userId });

    expect(response.status).toBe(200);
    expect(response.body.data).toEqual([]);
  });

  it("returns an empty array for unknown users and tenants", async () => {
    const unknownUser = await request(app)
      .get("/api/audit")
      .query({ tenantId, userId: "unknown-user" });
    expect(unknownUser.body.data).toEqual([]);

    const unknownTenant = await request(app)
      .get("/api/audit")
      .query({ tenantId: "unknown-tenant", userId });
    expect(unknownTenant.body.data).toEqual([]);
  });
});
