"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const auditLog_validator_1 = require("../../src/middlewares/auditLog.validator");
(0, vitest_1.describe)("audit validators", () => {
    (0, vitest_1.it)("accepts a valid audit-log creation payload", () => {
        const result = auditLog_validator_1.createAuditLogSchema.safeParse({
            tenantId: "tenant-1",
            userId: "user-1",
            action: "CONSENT_GRANTED",
            details: { purpose: "marketing" },
        });
        (0, vitest_1.expect)(result.success).toBe(true);
    });
    (0, vitest_1.it)("accepts a valid audit lookup payload", () => {
        const result = auditLog_validator_1.fetchAuditLogsSchema.safeParse({
            tenantId: "tenant-1",
            userId: "user-1",
        });
        (0, vitest_1.expect)(result.success).toBe(true);
    });
});
//# sourceMappingURL=auditLogs.service.test.js.map