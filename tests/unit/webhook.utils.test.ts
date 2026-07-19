import { describe, expect, it } from "vitest";

import { buildWebhookPayload } from "../../src/utils/webhook-payload";
import { generateWebhookSignature } from "../../src/utils/webhook-signature";

describe("webhook utilities", () => {
  it("builds a stable webhook payload", () => {
    const payload = buildWebhookPayload({
      event: "CONSENT_GRANTED",
      tenantId: "tenant-1",
      data: { consentId: "consent-1" },
      timestamp: "2026-07-19T00:00:00.000Z",
    });

    expect(payload).toEqual({
      event: "CONSENT_GRANTED",
      timestamp: "2026-07-19T00:00:00.000Z",
      tenantId: "tenant-1",
      data: { consentId: "consent-1" },
    });
  });

  it("generates an hmac signature for the raw payload", () => {
    const signature = generateWebhookSignature(
      "super-secret",
      "2026-07-19T00:00:00.000Z",
      "{\"event\":\"CONSENT_GRANTED\"}"
    );

    expect(signature).toMatch(/^[a-f0-9]{64}$/);
  });
});