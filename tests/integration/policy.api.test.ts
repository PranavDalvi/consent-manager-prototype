import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import app from "../../src/app";
import { clearTestDatabase, createTenantWithApiKey } from "../setup/database";

const hasSafeTestDatabase = Boolean(
  process.env.NODE_ENV === "test" &&
    (process.env.TEST_DATABASE_URL ?? process.env.DATABASE_URL)
      ?.toLowerCase()
      .includes("consent_manager_test")
);

const describePolicyApi = hasSafeTestDatabase ? describe.sequential : describe.skip;

describePolicyApi("Policy API", () => {
  let tenantAKey: string;
  let tenantBKey: string;
  let policyId: string;

  beforeEach(async () => {
    await clearTestDatabase();
    const tenantA = await createTenantWithApiKey({ tenantId: "tenant-a", tenantName: "Tenant A", apiKeyName: "a" });
    const tenantB = await createTenantWithApiKey({ tenantId: "tenant-b", tenantName: "Tenant B", apiKeyName: "b" });
    tenantAKey = tenantA.rawApiKey;
    tenantBKey = tenantB.rawApiKey;
  });

  it("creates, lists, gets, archives, and versions policies", async () => {
    const create = await request(app)
      .post("/api/policies")
      .set("X-API-Key", tenantAKey)
      .send({ title: "Privacy", purpose: "marketing", version: 1, content: "v1" });

    expect(create.status).toBe(201);
    policyId = create.body.data.id;

    const list = await request(app).get("/api/policies").set("X-API-Key", tenantAKey);
    expect(list.status).toBe(200);
    expect(list.body.data).toHaveLength(1);

    const get = await request(app).get(`/api/policies/${policyId}`).set("X-API-Key", tenantAKey);
    expect(get.status).toBe(200);

    const archived = await request(app).patch(`/api/policies/${policyId}/archive`).set("X-API-Key", tenantAKey);
    expect(archived.status).toBe(200);

    const version = await request(app).post(`/api/policies/${policyId}/versions`).set("X-API-Key", tenantAKey).send({ content: "v2" });
    expect(version.status).toBe(201);
  });

  it("enforces tenant isolation", async () => {
    const create = await request(app)
      .post("/api/policies")
      .set("X-API-Key", tenantAKey)
      .send({ title: "Privacy", purpose: "marketing", version: 1, content: "v1" });
    const id = create.body.data.id as string;

    expect((await request(app).get(`/api/policies/${id}`).set("X-API-Key", tenantBKey)).status).toBe(404);
    expect((await request(app).patch(`/api/policies/${id}/archive`).set("X-API-Key", tenantBKey)).status).toBe(404);
  });
});
