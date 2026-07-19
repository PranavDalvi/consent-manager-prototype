"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const consent_validator_1 = require("../../src/validators/consent.validator");
(0, vitest_1.describe)("consent validators", () => {
    (0, vitest_1.it)("accepts a valid grant payload", () => {
        const result = consent_validator_1.grantConsentSchema.safeParse({
            tenantId: "tenant-1",
            userId: "user-1",
            purpose: "marketing",
            policyVersion: "v1",
        });
        (0, vitest_1.expect)(result.success).toBe(true);
    });
    (0, vitest_1.it)("rejects a missing revoke id", () => {
        const result = consent_validator_1.revokeConsentSchema.safeParse({ consentId: "" });
        (0, vitest_1.expect)(result.success).toBe(false);
    });
    (0, vitest_1.it)("accepts a valid check payload", () => {
        const result = consent_validator_1.checkConsentSchema.safeParse({
            tenantId: "tenant-1",
            userId: "user-1",
            purpose: "marketing",
        });
        (0, vitest_1.expect)(result.success).toBe(true);
    });
    (0, vitest_1.it)("accepts a valid user-consent lookup payload", () => {
        const result = consent_validator_1.fetchUserConsentsSchema.safeParse({
            tenantId: "tenant-1",
            userId: "user-1",
        });
        (0, vitest_1.expect)(result.success).toBe(true);
    });
});
//# sourceMappingURL=consent.service.test.js.map