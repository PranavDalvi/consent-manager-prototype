import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  policyFindUnique: vi.fn(),
  consentUpsert: vi.fn(),
  consentFindUnique: vi.fn(),
  consentUpdate: vi.fn(),
  consentFindMany: vi.fn(),
  auditLogCreate: vi.fn(),
  transaction: vi.fn(),
  createInternalEvent: vi.fn(),
  enqueueInternalEventDelivery: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  prisma: {
    policy: {
      findUnique: mocks.policyFindUnique,
    },
    consent: {
      upsert: mocks.consentUpsert,
      findUnique: mocks.consentFindUnique,
      update: mocks.consentUpdate,
      findMany: mocks.consentFindMany,
    },
    auditLog: {
      create: mocks.auditLogCreate,
    },
    $transaction: mocks.transaction,
  },
}));

vi.mock("../../src/events/internal-event.publisher", () => ({
  createInternalEvent: mocks.createInternalEvent,
  enqueueInternalEventDelivery: mocks.enqueueInternalEventDelivery,
}));

import { ConsentStatus } from "../../src/generated";
import { grantConsent, revokeConsent } from "../../src/services/consent.service";

describe("consent service behavior", () => {
  beforeEach(() => {
    mocks.policyFindUnique.mockReset();
    mocks.consentUpsert.mockReset();
    mocks.consentFindUnique.mockReset();
    mocks.consentUpdate.mockReset();
    mocks.consentFindMany.mockReset();
    mocks.auditLogCreate.mockReset();
    mocks.transaction.mockReset();
    mocks.createInternalEvent.mockReset();
    mocks.enqueueInternalEventDelivery.mockReset();
  });

  it("publishes an event when consent is granted", async () => {
    mocks.createInternalEvent.mockResolvedValue({ id: "event-1" });
    mocks.policyFindUnique.mockResolvedValue({ id: "policy-1", tenantId: "tenant-1", isActive: true, purpose: "marketing", version: 1 });
    mocks.consentUpsert.mockResolvedValue({ id: "consent-1", tenantId: "tenant-1" });
    mocks.transaction.mockImplementation(async (callback) => callback({
      policy: { findUnique: mocks.policyFindUnique },
      consent: { upsert: mocks.consentUpsert },
      auditLog: { create: mocks.auditLogCreate },
      internalEvent: { create: mocks.createInternalEvent },
    }));

    const result = await grantConsent("tenant-1", "user-1", "policy-1");

    expect(result.id).toBe("consent-1");
    expect(mocks.createInternalEvent).toHaveBeenCalled();
  });

  it("publishes an event when consent is revoked", async () => {
    mocks.createInternalEvent.mockResolvedValue({ id: "event-1" });
    mocks.consentFindUnique.mockResolvedValue({
      id: "consent-1",
      status: ConsentStatus.GRANTED,
      tenantId: "tenant-1",
      userId: "user-1",
      policyId: "policy-1",
      purpose: "marketing",
      policyVersion: 1,
    });
    mocks.consentUpdate.mockResolvedValue({
      id: "consent-1",
      status: ConsentStatus.REVOKED,
      tenantId: "tenant-1",
      userId: "user-1",
      policyId: "policy-1",
      purpose: "marketing",
      policyVersion: 1,
    });
    mocks.transaction.mockImplementation(async (callback) => callback({
      consent: { findUnique: mocks.consentFindUnique, update: mocks.consentUpdate },
      auditLog: { create: mocks.auditLogCreate },
      internalEvent: { create: mocks.createInternalEvent },
    }));

    const result = await revokeConsent("consent-1");

    expect(result.status).toBe(ConsentStatus.REVOKED);
    expect(mocks.createInternalEvent).toHaveBeenCalled();
  });
});