import request from "supertest";
import { beforeEach, describe, expect, it, vi } from "vitest";

const publishedEvents: Array<{ tenantId: string; type: string }> = [];

vi.mock("../../src/events/internal-event.publisher", () => ({
  createInternalEvent: vi.fn(async (_tx: unknown, input: { tenantId: string; type: string }) => {
    publishedEvents.push({ tenantId: input.tenantId, type: input.type });

    return { id: `event-${publishedEvents.length}` };
  }),
  enqueueInternalEventDelivery: vi.fn(async () => undefined),
  recoverPendingInternalEvents: vi.fn(async () => undefined),
}));

import app from "../../src/app";
import { createTenantWithApiKey } from "../setup/database";

const hasSafeTestDatabase = Boolean(
  process.env.NODE_ENV === "test" &&
    (process.env.TEST_DATABASE_URL ?? process.env.DATABASE_URL)
      ?.toLowerCase()
      .includes("consent_manager_test")
);

const describeEventPublishing = hasSafeTestDatabase ? describe.sequential : describe.skip;

function uniqueSuffix(): string {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

describeEventPublishing("Event publishing", () => {
  let tenantId: string;
  let tenantKey: string;
  let policyId: string;
  const purpose = "marketing";

  beforeEach(async () => {
    publishedEvents.length = 0;

    const suffix = uniqueSuffix();
    tenantId = `tenant-events-${suffix}`;

    const fixture = await createTenantWithApiKey({
      tenantId,
      tenantName: "Events Tenant",
      apiKeyName: "bootstrap-key",
    });

    tenantKey = fixture.rawApiKey;

    const policyResponse = await request(app)
      .post("/api/policies")
      .set("X-API-Key", tenantKey)
      .send({
        title: "Privacy Policy",
        purpose,
        version: 1,
        content: "v1",
      });

    policyId = policyResponse.body.data.id as string;
  });

  it("publishes consent, policy, and api-key events", async () => {
    const consentResponse = await request(app)
      .post("/api/consents")
      .set("X-API-Key", tenantKey)
      .send({ userId: "user-1", policyId });

    expect(consentResponse.status).toBe(201);

    const consentId = consentResponse.body.data.id as string;

    await request(app)
      .post(`/api/consents/revoke/${consentId}`)
      .set("X-API-Key", tenantKey);

    await request(app)
      .patch(`/api/policies/${policyId}/archive`)
      .set("X-API-Key", tenantKey);

    await request(app)
      .post(`/api/policies/${policyId}/versions`)
      .set("X-API-Key", tenantKey)
      .send({ content: "v2" });

    const apiKeyCreateResponse = await request(app)
      .post("/api/api-keys")
      .set("X-API-Key", tenantKey)
      .send({ name: "service-key" });

    const apiKeyId = apiKeyCreateResponse.body.data.id as string;

    await request(app)
      .patch(`/api/api-keys/${apiKeyId}/revoke`)
      .set("X-API-Key", tenantKey);

    await request(app)
      .post(`/api/api-keys/${apiKeyId}/rotate`)
      .set("X-API-Key", tenantKey);

    expect(publishedEvents.map((event) => event.type)).toEqual(
      expect.arrayContaining([
        "CONSENT_GRANTED",
        "CONSENT_REVOKED",
        "POLICY_CREATED",
        "POLICY_ARCHIVED",
        "POLICY_VERSION_CREATED",
        "API_KEY_CREATED",
        "API_KEY_REVOKED",
        "API_KEY_ROTATED",
      ])
    );
  });
});