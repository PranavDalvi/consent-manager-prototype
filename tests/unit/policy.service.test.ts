import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  policyCreate: vi.fn(),
  policyFindUnique: vi.fn(),
  policyFindMany: vi.fn(),
  policyUpdate: vi.fn(),
  transaction: vi.fn(),
  createInternalEvent: vi.fn(),
  enqueueInternalEventDelivery: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  prisma: {
    policy: {
      create: mocks.policyCreate,
      findUnique: mocks.policyFindUnique,
      findMany: mocks.policyFindMany,
      update: mocks.policyUpdate,
    },
    $transaction: mocks.transaction,
  },
}));

vi.mock("../../src/events/internal-event.publisher", () => ({
  createInternalEvent: mocks.createInternalEvent,
  enqueueInternalEventDelivery: mocks.enqueueInternalEventDelivery,
}));

import { archivePolicy, createPolicy, createPolicyVersion, getPolicy, listPolicies } from "../../src/services/policy.service";

describe("policy service", () => {
  beforeEach(() => {
    mocks.policyCreate.mockReset();
    mocks.policyFindUnique.mockReset();
    mocks.policyFindMany.mockReset();
    mocks.policyUpdate.mockReset();
    mocks.transaction.mockReset();
    mocks.createInternalEvent.mockReset();
    mocks.enqueueInternalEventDelivery.mockReset();
  });

  it("creates and lists policies", async () => {
    mocks.policyCreate.mockResolvedValue({ id: "policy-1" });
    mocks.policyFindMany.mockResolvedValue([{ id: "policy-1" }, { id: "policy-2" }]);
    mocks.createInternalEvent.mockResolvedValue({ id: "event-1" });
    mocks.transaction.mockImplementation(async (callback) => callback({}));

    await createPolicy({ tenantId: "tenant-1", title: "Privacy", purpose: "marketing", version: 1, content: "v1" });
    const policies = await listPolicies("tenant-1");

    expect(mocks.policyCreate).toHaveBeenCalled();
    expect(mocks.createInternalEvent).toHaveBeenCalled();
    expect(policies).toHaveLength(2);
  });

  it("archives idempotently", async () => {
    mocks.policyFindUnique.mockResolvedValue({ id: "policy-1", tenantId: "tenant-1", isActive: false });

    const archived = await archivePolicy("tenant-1", "policy-1");
    expect(archived.isActive).toBe(false);
  });

  it("creates new versions", async () => {
    mocks.policyFindUnique.mockResolvedValue({ id: "policy-1", tenantId: "tenant-1", purpose: "marketing", title: "Privacy", version: 1, isActive: true });
    mocks.transaction.mockImplementation(async (cb) => cb({
      policy: {
        findFirst: vi.fn().mockResolvedValue({ version: 1 }),
        create: vi.fn().mockResolvedValue({ id: "policy-2", version: 2 }),
      },
      createInternalEvent: vi.fn(),
    }));
    mocks.createInternalEvent.mockResolvedValue({ id: "event-1" });

    const next = await createPolicyVersion("tenant-1", "policy-1", "v2");
    expect(next.version).toBe(2);
  });

  it("enforces tenant isolation on lookup", async () => {
    mocks.policyFindUnique.mockResolvedValue({ id: "policy-1", tenantId: "tenant-1" });
    await expect(getPolicy("other-tenant", "policy-1")).rejects.toThrow("Policy not found");
  });
});
