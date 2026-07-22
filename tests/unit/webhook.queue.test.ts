import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  queueAdd: vi.fn(),
}));

vi.mock("../../src/config/redis", () => ({
  getRedisConnectionOptions: () => ({ host: "localhost", port: 6379, maxRetriesPerRequest: null }),
}));

vi.mock("bullmq", () => ({
  Queue: class {
    add = mocks.queueAdd;

    constructor() {
      return this;
    }
  },
}));

import { enqueueWebhookDeliveryJob } from "../../src/queues/webhook.queue";

describe("webhook queue", () => {
  beforeEach(() => {
    mocks.queueAdd.mockReset();
  });

  it("creates a retryable webhook delivery job", async () => {
    await enqueueWebhookDeliveryJob("event-1");

    expect(mocks.queueAdd).toHaveBeenCalledWith(
      "deliver-webhook-event",
      expect.objectContaining({ eventId: "event-1" }),
      expect.objectContaining({
        jobId: "event-1",
        attempts: 5,
      })
    );
  });
});