import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  tenantFindUnique: vi.fn(),
  apiKeyCreate: vi.fn(),
  apiKeyFindMany: vi.fn(),
  apiKeyFindFirst: vi.fn(),
  apiKeyUpdate: vi.fn(),
  transaction: vi.fn(),
  createInternalEvent: vi.fn(),
  enqueueInternalEventDelivery: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  prisma: {
    tenant: {
      findUnique: mocks.tenantFindUnique,
    },
    apiKey: {
      create: mocks.apiKeyCreate,
      findMany: mocks.apiKeyFindMany,
      findFirst: mocks.apiKeyFindFirst,
      update: mocks.apiKeyUpdate,
    },
    $transaction: mocks.transaction,
  },
}));

vi.mock("../../src/utils/api-key", () => ({
  generateApiKey: () => "cm_live_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  hashApiKey: () => "hash-123",
  getApiKeyPrefix: () => "cm_live_aaaaaaa",
}));

vi.mock("../../src/events/internal-event.publisher", () => ({
  createInternalEvent: mocks.createInternalEvent,
  enqueueInternalEventDelivery: mocks.enqueueInternalEventDelivery,
}));

import { createTenantApiKey, revokeTenantApiKey, rotateTenantApiKey } from "../../src/services/api-key-management.service";

describe("api-key management service", () => {
  beforeEach(() => {
    mocks.tenantFindUnique.mockReset();
    mocks.apiKeyCreate.mockReset();
    mocks.apiKeyFindMany.mockReset();
    mocks.apiKeyFindFirst.mockReset();
    mocks.apiKeyUpdate.mockReset();
    mocks.transaction.mockReset();
    mocks.createInternalEvent.mockReset();
    mocks.enqueueInternalEventDelivery.mockReset();
  });

  it("publishes an event when an api key is created", async () => {
    mocks.tenantFindUnique.mockResolvedValue({ id: "tenant-1", isActive: true });
    mocks.apiKeyCreate.mockResolvedValue({
      id: "api-key-1",
      tenantId: "tenant-1",
      name: "backend",
      keyPrefix: "cm_live_aaaaaaa",
      isActive: true,
      expiresAt: null,
      revokedAt: null,
      lastUsedAt: null,
      createdAt: new Date("2026-01-01T00:00:00.000Z"),
    });
    mocks.createInternalEvent.mockResolvedValue({ id: "event-1" });
    mocks.transaction.mockImplementation(async (callback) => callback({ internalEvent: { create: mocks.createInternalEvent } }));

    const result = await createTenantApiKey({ tenantId: "tenant-1", name: "backend" });

    expect(result.key).toMatch(/^cm_live_/);
    expect(mocks.createInternalEvent).toHaveBeenCalled();
  });

  it("publishes an event when an api key is revoked", async () => {
    mocks.apiKeyFindFirst.mockResolvedValue({
      id: "api-key-1",
      tenantId: "tenant-1",
      name: "backend",
      keyPrefix: "cm_live_aaaaaaa",
      isActive: true,
      expiresAt: null,
      revokedAt: null,
      lastUsedAt: null,
      createdAt: new Date("2026-01-01T00:00:00.000Z"),
    });
    mocks.apiKeyUpdate.mockResolvedValue({
      id: "api-key-1",
      tenantId: "tenant-1",
      name: "backend",
      keyPrefix: "cm_live_aaaaaaa",
      isActive: false,
      expiresAt: null,
      revokedAt: new Date("2026-01-01T00:01:00.000Z"),
      lastUsedAt: null,
      createdAt: new Date("2026-01-01T00:00:00.000Z"),
    });
    mocks.createInternalEvent.mockResolvedValue({ id: "event-1" });
    mocks.transaction.mockImplementation(async (callback) => callback({ internalEvent: { create: mocks.createInternalEvent } }));

    const result = await revokeTenantApiKey("tenant-1", "api-key-1");

    expect(result.isActive).toBe(false);
    expect(mocks.createInternalEvent).toHaveBeenCalled();
  });

  it("publishes an event when an api key is rotated", async () => {
    mocks.apiKeyFindFirst.mockResolvedValueOnce({
      id: "api-key-1",
      tenantId: "tenant-1",
      name: "backend",
      keyPrefix: "cm_live_aaaaaaa",
      isActive: true,
      expiresAt: null,
      revokedAt: null,
      lastUsedAt: null,
      createdAt: new Date("2026-01-01T00:00:00.000Z"),
    });
    mocks.apiKeyCreate.mockResolvedValue({
      id: "api-key-2",
      tenantId: "tenant-1",
      name: "backend",
      keyPrefix: "cm_live_aaaaaaa",
      isActive: true,
      expiresAt: null,
      revokedAt: null,
      lastUsedAt: null,
      createdAt: new Date("2026-01-01T00:00:00.000Z"),
    });
    mocks.createInternalEvent.mockResolvedValue({ id: "event-1" });
    mocks.transaction.mockImplementation(async (callback) => callback({
      apiKey: {
        findFirst: mocks.apiKeyFindFirst,
        create: mocks.apiKeyCreate,
        update: mocks.apiKeyUpdate,
      },
      internalEvent: { create: mocks.createInternalEvent },
    }));

    const result = await rotateTenantApiKey("tenant-1", "api-key-1");

    expect(result.key).toMatch(/^cm_live_/);
    expect(mocks.createInternalEvent).toHaveBeenCalled();
  });
});