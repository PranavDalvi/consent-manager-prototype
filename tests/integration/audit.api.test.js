"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const vitest_1 = require("vitest");
const app_1 = __importDefault(require("../../src/app"));
const database_1 = require("../setup/database");
const hasSafeTestDatabase = Boolean(process.env.NODE_ENV === "test" &&
    (process.env.TEST_DATABASE_URL ?? process.env.DATABASE_URL)
        ?.toLowerCase()
        .includes("consent_manager_test"));
const describeAuditApi = hasSafeTestDatabase ? vitest_1.describe : vitest_1.describe.skip;
describeAuditApi("Audit Logs API", () => {
    const tenantAId = "tenant-integration-audit-a";
    const tenantBId = "tenant-integration-audit-b";
    const userId = "user-integration-audit";
    const purpose = "marketing";
    const policyVersion = "v1";
    let tenantAKey;
    let tenantBKey;
    let consentId;
    (0, vitest_1.beforeAll)(async () => {
        await (0, database_1.clearTestDatabase)();
    });
    (0, vitest_1.beforeEach)(async () => {
        await (0, database_1.clearTestDatabase)();
        const tenantA = await (0, database_1.createTenantWithApiKey)({
            tenantId: tenantAId,
            tenantName: "Audit Tenant A",
            apiKeyName: "audit-app-a",
        });
        const tenantB = await (0, database_1.createTenantWithApiKey)({
            tenantId: tenantBId,
            tenantName: "Audit Tenant B",
            apiKeyName: "audit-app-b",
        });
        tenantAKey = tenantA.rawApiKey;
        tenantBKey = tenantB.rawApiKey;
        const response = await (0, supertest_1.default)(app_1.default)
            .post("/api/consents")
            .set("X-API-Key", tenantAKey)
            .send({ userId, purpose, policyVersion });
        (0, vitest_1.expect)(response.status).toBe(201);
        consentId = response.body.data.id;
    });
    (0, vitest_1.it)("rejects missing API key", async () => {
        const response = await (0, supertest_1.default)(app_1.default).get("/api/audit").query({ userId });
        (0, vitest_1.expect)(response.status).toBe(401);
    });
    (0, vitest_1.it)("rejects invalid API key", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .get("/api/audit")
            .set("X-API-Key", "invalid")
            .query({ userId });
        (0, vitest_1.expect)(response.status).toBe(401);
    });
    (0, vitest_1.it)("returns a CONSENT_GRANTED audit log", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .get("/api/audit")
            .set("X-API-Key", tenantAKey)
            .query({ userId });
        (0, vitest_1.expect)(response.status).toBe(200);
        (0, vitest_1.expect)(response.body.data).toEqual(vitest_1.expect.arrayContaining([
            vitest_1.expect.objectContaining({
                tenantId: tenantAId,
                userId,
                action: "CONSENT_GRANTED",
                purpose,
            }),
        ]));
    });
    (0, vitest_1.it)("returns both CONSENT_GRANTED and CONSENT_REVOKED logs", async () => {
        const revokeResponse = await (0, supertest_1.default)(app_1.default)
            .post(`/api/consents/revoke/${consentId}`)
            .set("X-API-Key", tenantAKey);
        (0, vitest_1.expect)(revokeResponse.status).toBe(200);
        const response = await (0, supertest_1.default)(app_1.default)
            .get("/api/audit")
            .set("X-API-Key", tenantAKey)
            .query({ userId });
        (0, vitest_1.expect)(response.status).toBe(200);
        (0, vitest_1.expect)(response.body.data).toEqual(vitest_1.expect.arrayContaining([
            vitest_1.expect.objectContaining({ action: "CONSENT_GRANTED", tenantId: tenantAId, userId, purpose }),
            vitest_1.expect.objectContaining({ action: "CONSENT_REVOKED", tenantId: tenantAId, userId, purpose }),
        ]));
    });
    (0, vitest_1.it)("returns audit logs in descending creation order", async () => {
        const revokeResponse = await (0, supertest_1.default)(app_1.default)
            .post(`/api/consents/revoke/${consentId}`)
            .set("X-API-Key", tenantAKey);
        (0, vitest_1.expect)(revokeResponse.status).toBe(200);
        const response = await (0, supertest_1.default)(app_1.default)
            .get("/api/audit")
            .set("X-API-Key", tenantAKey)
            .query({ userId });
        (0, vitest_1.expect)(response.status).toBe(200);
        (0, vitest_1.expect)(response.body.data[0].action).toBe("CONSENT_REVOKED");
        (0, vitest_1.expect)(response.body.data[1].action).toBe("CONSENT_GRANTED");
    });
    (0, vitest_1.it)("rejects a request without userId", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .get("/api/audit")
            .set("X-API-Key", tenantAKey)
            .query({});
        (0, vitest_1.expect)(response.status).toBe(400);
    });
    (0, vitest_1.it)("does not expose logs belonging to another tenant", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .get("/api/audit")
            .set("X-API-Key", tenantBKey)
            .query({ userId });
        (0, vitest_1.expect)(response.status).toBe(200);
        (0, vitest_1.expect)(response.body.data).toEqual([]);
    });
    (0, vitest_1.it)("returns an empty array for unknown users and tenants", async () => {
        const unknownUser = await (0, supertest_1.default)(app_1.default)
            .get("/api/audit")
            .set("X-API-Key", tenantAKey)
            .query({ userId: "unknown-user" });
        (0, vitest_1.expect)(unknownUser.body.data).toEqual([]);
    });
});
//# sourceMappingURL=audit.api.test.js.map