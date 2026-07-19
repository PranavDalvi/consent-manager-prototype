"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const api_key_1 = require("../../src/utils/api-key");
(0, vitest_1.describe)("api key utilities", () => {
    (0, vitest_1.it)("generates a prefixed cryptographically secure api key", () => {
        const apiKey = (0, api_key_1.generateApiKey)();
        (0, vitest_1.expect)(apiKey.startsWith("cm_live_")).toBe(true);
        (0, vitest_1.expect)(apiKey.length).toBe("cm_live_".length + 64);
    });
    (0, vitest_1.it)("hashes api keys deterministically with sha-256", () => {
        const rawApiKey = "cm_live_test-secret-value";
        const firstHash = (0, api_key_1.hashApiKey)(rawApiKey);
        const secondHash = (0, api_key_1.hashApiKey)(rawApiKey);
        (0, vitest_1.expect)(firstHash).toBe(secondHash);
        (0, vitest_1.expect)(firstHash).toMatch(/^[a-f0-9]{64}$/);
    });
    (0, vitest_1.it)("returns a non-secret prefix for display", () => {
        const prefix = (0, api_key_1.getApiKeyPrefix)("cm_live_1234567890abcdef");
        (0, vitest_1.expect)(prefix).toBe("cm_live_1234567");
        (0, vitest_1.expect)(prefix).not.toContain("abcdef");
    });
});
//# sourceMappingURL=api-key.util.test.js.map