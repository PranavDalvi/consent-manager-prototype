import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  internalEventCreate: vi.fn(),
  internalEventFindUnique: vi.fn(),
  internalEventFindMany: vi.fn(),
  internalEventUpdate: vi.fn(),
  queueAdd: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  prisma: {
    internalEvent: {
      create: mocks.internalEventCreate,
      findUnique: mocks.internalEventFindUnique,
      findMany: mocks.internalEventFindMany,
      update: mocks.internalEventUpdate,
    },
  },
}));

vi.mock("../../src/queues/webhook.queue", () => ({
  enqueueWebhookDeliveryJob: mocks.queueAdd,
}));

import { createInternalEvent, enqueueInternalEventDelivery, recoverPendingInternalEvents } from "../../src/events/internal-event.publisher";

describe("internal event publisher", () => {
  beforeEach(() => {
    mocks.internalEventCreate.mockReset();
    mocks.internalEventFindUnique.mockReset();
    mocks.internalEventFindMany.mockReset();
    mocks.internalEventUpdate.mockReset();
    mocks.queueAdd.mockReset();
  });

  it("creates an internal event in the current transaction", async () => {
    const create = vi.fn().mockResolvedValue({ id: "event-1" });

    mocks.internalEventCreate.mockImplementation(create);

    const result = await createInternalEvent({ internalEvent: { create } } as never, {
      tenantId: "tenant-1",
      type: "CONSENT_GRANTED",
      payload: { consentId: "consent-1" },
    });

    expect(result.id).toBe("event-1");
  });

  it("enqueues a queued event by id", async () => {
    mocks.internalEventFindUnique.mockResolvedValue({ id: "event-1", status: "PENDING" });
    mocks.internalEventUpdate.mockResolvedValue({ id: "event-1" });

    await enqueueInternalEventDelivery("event-1");

    expect(mocks.queueAdd).toHaveBeenCalledWith("event-1");
  });

  it("re-enqueues pending events during recovery", async () => {
    mocks.internalEventFindMany.mockResolvedValue([
      { id: "event-1", status: "PENDING" },
      { id: "event-2", status: "PENDING" },
    ]);
    mocks.internalEventFindUnique.mockImplementation(async ({ where }: any) => ({ id: where.id, status: "PENDING" }));
    mocks.internalEventUpdate.mockResolvedValue({ id: "event-1" });

    await recoverPendingInternalEvents();

    expect(mocks.queueAdd).toHaveBeenCalledTimes(2);
  });
});