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

const describeWebhookApi = hasSafeTestDatabase ? describe.sequential : describe.skip;

function uniqueSuffix(): string {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

describeWebhookApi("Webhook API", () => {
  let tenantAId: string;
  let tenantBId: string;
  let tenantAKey: string;
  let tenantBKey: string;
  let webhookId: string;

  beforeEach(async () => {
    const suffix = uniqueSuffix();
    tenantAId = `tenant-webhook-a-${suffix}`;
    tenantBId = `tenant-webhook-b-${suffix}`;

    const tenantA = await createTenantWithApiKey({
      tenantId: tenantAId,
      tenantName: "Webhook Tenant A",
      apiKeyName: "web-app-a",
    });

    const tenantB = await createTenantWithApiKey({
      tenantId: tenantBId,
      tenantName: "Webhook Tenant B",
      apiKeyName: "web-app-b",
    });

    tenantAKey = tenantA.rawApiKey;
    tenantBKey = tenantB.rawApiKey;

    const createResponse = await request(app)
      .post("/api/webhooks")
      .set("X-API-Key", tenantAKey)
      .send({
        name: "Consent Stream",
        url: "https://example.com/webhooks/consent",
        events: ["CONSENT_GRANTED", "CONSENT_REVOKED"],
      });

    webhookId = createResponse.body.data.id as string;
  });

  it("creates, lists, fetches, updates, disables, and enables webhooks", async () => {
    const listResponse = await request(app)
      .get("/api/webhooks")
      .set("X-API-Key", tenantAKey);

    expect(listResponse.status).toBe(200);
    expect(listResponse.body.data).toHaveLength(1);

    const fetchResponse = await request(app)
      .get(`/api/webhooks/${webhookId}`)
      .set("X-API-Key", tenantAKey);

    expect(fetchResponse.status).toBe(200);
    expect(fetchResponse.body.data).toEqual(
      expect.objectContaining({
        id: webhookId,
        tenantId: tenantAId,
        name: "Consent Stream",
        isActive: true,
      })
    );

    const updateResponse = await request(app)
      .patch(`/api/webhooks/${webhookId}`)
      .set("X-API-Key", tenantAKey)
      .send({
        name: "Consent Stream Updated",
        events: ["CONSENT_GRANTED"],
      });

    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body.data.name).toBe("Consent Stream Updated");

    const disableResponse = await request(app)
      .patch(`/api/webhooks/${webhookId}/disable`)
      .set("X-API-Key", tenantAKey);

    expect(disableResponse.status).toBe(200);
    expect(disableResponse.body.data.isActive).toBe(false);

    const enableResponse = await request(app)
      .patch(`/api/webhooks/${webhookId}/enable`)
      .set("X-API-Key", tenantAKey);

    expect(enableResponse.status).toBe(200);
    expect(enableResponse.body.data.isActive).toBe(true);
  });

  it("enforces tenant isolation", async () => {
    const response = await request(app)
      .get(`/api/webhooks/${webhookId}`)
      .set("X-API-Key", tenantBKey);

    expect(response.status).toBe(404);
  });
});