"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const mocks = vitest_1.vi.hoisted(() => ({
    tenantFindUnique: vitest_1.vi.fn(),
    apiKeyCreate: vitest_1.vi.fn(),
}));
vitest_1.vi.mock("../../src/db/prisma", () => ({
    prisma: {
        tenant: {
            findUnique: mocks.tenantFindUnique,
        },
        apiKey: {
            create: mocks.apiKeyCreate,
        },
    },
}));
vitest_1.vi.mock("../../src/utils/api-key", () => ({
    generateApiKey: () => "cm_live_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    hashApiKey: () => "hash-123",
    getApiKeyPrefix: () => "cm_live_aaaaaaa",
}));
const api_key_service_1 = require("../../src/services/api-key.service");
(0, vitest_1.describe)("api key service", () => {
    (0, vitest_1.beforeEach)(() => {
        mocks.tenantFindUnique.mockReset();
        mocks.apiKeyCreate.mockReset();
    });
    (0, vitest_1.it)("creates an api key for an active tenant and returns the raw key only once", async () => {
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
        const result = await (0, api_key_service_1.createApiKey)({
            tenantId: "tenant-1",
            name: "mobile-app",
            expiresAt: undefined,
        });
        (0, vitest_1.expect)(mocks.tenantFindUnique).toHaveBeenCalledWith({
            where: {
                id: "tenant-1",
            },
        });
        (0, vitest_1.expect)(mocks.apiKeyCreate).toHaveBeenCalledWith({
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
        (0, vitest_1.expect)(result).toEqual({
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
    (0, vitest_1.it)("rejects missing tenants", async () => {
        mocks.tenantFindUnique.mockResolvedValue(null);
        await (0, vitest_1.expect)((0, api_key_service_1.createApiKey)({
            tenantId: "missing-tenant",
            name: "mobile-app",
        })).rejects.toThrow("Tenant not found");
    });
    (0, vitest_1.it)("rejects inactive tenants", async () => {
        mocks.tenantFindUnique.mockResolvedValue({
            id: "tenant-1",
            isActive: false,
        });
        await (0, vitest_1.expect)((0, api_key_service_1.createApiKey)({
            tenantId: "tenant-1",
            name: "mobile-app",
        })).rejects.toThrow("Tenant is inactive");
    });
});
//# sourceMappingURL=api-key.service.test.js.map