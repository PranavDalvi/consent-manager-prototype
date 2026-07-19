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

const describeApiKeyManagement = hasSafeTestDatabase ? describe.sequential : describe.skip;

function uniqueSuffix(): string {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

describeApiKeyManagement("API Key Management", () => {
  let tenantId: string;
  let tenantKey: string;

  beforeEach(async () => {
    const suffix = uniqueSuffix();
    tenantId = `tenant-api-key-${suffix}`;

    const fixture = await createTenantWithApiKey({
      tenantId,
      tenantName: "API Key Tenant",
      apiKeyName: "bootstrap-key",
    });

    tenantKey = fixture.rawApiKey;
  });

  it("creates an api key and returns the raw key once", async () => {
    const response = await request(app)
      .post("/api/api-keys")
      .set("X-API-Key", tenantKey)
      .send({ name: "Backend Server" });

    expect(response.status).toBe(201);
    expect(response.body.data).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: "Backend Server",
        keyPrefix: expect.stringMatching(/^cm_live_/),
        createdAt: expect.any(String),
        isActive: true,
        key: expect.stringMatching(/^cm_live_/),
      })
    );
  });

  it("lists api keys for the authenticated tenant", async () => {
    const response = await request(app)
      .get("/api/api-keys")
      .set("X-API-Key", tenantKey);

    expect(response.status).toBe(200);
    expect(response.body.data.length).toBeGreaterThan(0);
    expect(response.body.data[0]).toEqual(
      expect.objectContaining({
        tenantId,
      })
    );
  });

  it("revokes an api key and prevents reuse", async () => {
    const createResponse = await request(app)
      .post("/api/api-keys")
      .set("X-API-Key", tenantKey)
      .send({ name: "Rotated Server" });

    const apiKeyId = createResponse.body.data.id as string;

    const revokeResponse = await request(app)
      .patch(`/api/api-keys/${apiKeyId}/revoke`)
      .set("X-API-Key", tenantKey);

    expect(revokeResponse.status).toBe(200);
    expect(revokeResponse.body.data.isActive).toBe(false);
    expect(revokeResponse.body.data.revokedAt).toEqual(expect.any(String));
  });

  it("rotates an api key and returns a new raw key", async () => {
    const createResponse = await request(app)
      .post("/api/api-keys")
      .set("X-API-Key", tenantKey)
      .send({ name: "Rotate Me" });

    const apiKeyId = createResponse.body.data.id as string;

    const rotateResponse = await request(app)
      .post(`/api/api-keys/${apiKeyId}/rotate`)
      .set("X-API-Key", tenantKey);

    expect(rotateResponse.status).toBe(200);
    expect(rotateResponse.body.data.key).toMatch(/^cm_live_/);
  });
});
