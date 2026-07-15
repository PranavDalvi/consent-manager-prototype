import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  tenantFindUnique: vi.fn(),
  apiKeyCreate: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  prisma: {
    tenant: {
      findUnique: mocks.tenantFindUnique,
    },
    apiKey: {
      create: mocks.apiKeyCreate,
    },
  },
}));

vi.mock("../../src/utils/api-key", () => ({
  generateApiKey: () => "cm_live_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  hashApiKey: () => "hash-123",
  getApiKeyPrefix: () => "cm_live_aaaaaaa",
}));

import { createApiKey } from "../../src/services/api-key.service";

describe("api key service", () => {
  beforeEach(() => {
    mocks.tenantFindUnique.mockReset();
    mocks.apiKeyCreate.mockReset();
  });

  it("creates an api key for an active tenant and returns the raw key only once", async () => {
    mocks.tenantFindUnique.mockResolvedValue({
      id: "tenant-1",
      isActive: true,
    });

    mocks.apiKeyCreate.mockResolvedValue({
      id: "api-key-1",
      tenantId: "tenant-1",
      name: "mobile-app",
      keyPrefix: "cm_live_aaaaaaa",
      isActive: true,
      expiresAt: null,
      createdAt: new Date("2026-01-01T00:00:00.000Z"),
    });

    const result = await createApiKey({
      tenantId: "tenant-1",
      name: "mobile-app",
      expiresAt: undefined,
    });

    expect(mocks.tenantFindUnique).toHaveBeenCalledWith({
      where: {
        id: "tenant-1",
      },
    });

    expect(mocks.apiKeyCreate).toHaveBeenCalledWith({
      data: {
        tenantId: "tenant-1",
        name: "mobile-app",
        keyPrefix: "cm_live_aaaaaaa",
        keyHash: "hash-123",
        expiresAt: undefined,
      },
      select: {
        id: true,
        tenantId: true,
        name: true,
        keyPrefix: true,
        isActive: true,
        expiresAt: true,
        createdAt: true,
      },
    });

    expect(result).toEqual({
      id: "api-key-1",
      tenantId: "tenant-1",
      name: "mobile-app",
      keyPrefix: "cm_live_aaaaaaa",
      isActive: true,
      expiresAt: null,
      createdAt: new Date("2026-01-01T00:00:00.000Z"),
      key: "cm_live_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    });
  });

  it("rejects missing tenants", async () => {
    mocks.tenantFindUnique.mockResolvedValue(null);

    await expect(
      createApiKey({
        tenantId: "missing-tenant",
        name: "mobile-app",
      })
    ).rejects.toThrow("Tenant not found");
  });

  it("rejects inactive tenants", async () => {
    mocks.tenantFindUnique.mockResolvedValue({
      id: "tenant-1",
      isActive: false,
    });

    await expect(
      createApiKey({
        tenantId: "tenant-1",
        name: "mobile-app",
      })
    ).rejects.toThrow("Tenant is inactive");
  });
});
