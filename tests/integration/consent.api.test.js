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
const describeConsentApi = hasSafeTestDatabase ? vitest_1.describe : vitest_1.describe.skip;
describeConsentApi("Consent API", () => {
    const tenantAId = "tenant-integration-consent-a";
    const tenantBId = "tenant-integration-consent-b";
    const userId = "user-integration-consent";
    const purpose = "marketing";
    const policyVersion = "v1";
    let tenantAKey;
    let tenantBKey;
    (0, vitest_1.beforeAll)(async () => {
        await (0, database_1.clearTestDatabase)();
        const tenantA = await (0, database_1.createTenantWithApiKey)({
            tenantId: tenantAId,
            tenantName: "Consent Tenant A",
            apiKeyName: "web-app-a",
        });
        const tenantB = await (0, database_1.createTenantWithApiKey)({
            tenantId: tenantBId,
            tenantName: "Consent Tenant B",
            apiKeyName: "web-app-b",
        });
        tenantAKey = tenantA.rawApiKey;
        tenantBKey = tenantB.rawApiKey;
    });
    (0, vitest_1.beforeEach)(async () => {
        await (0, database_1.clearTestDatabase)();
        const tenantA = await (0, database_1.createTenantWithApiKey)({
            tenantId: tenantAId,
            tenantName: "Consent Tenant A",
            apiKeyName: "web-app-a",
        });
        const tenantB = await (0, database_1.createTenantWithApiKey)({
            tenantId: tenantBId,
            tenantName: "Consent Tenant B",
            apiKeyName: "web-app-b",
        });
        tenantAKey = tenantA.rawApiKey;
        tenantBKey = tenantB.rawApiKey;
    });
    (0, vitest_1.it)("rejects missing API key", async () => {
        const response = await (0, supertest_1.default)(app_1.default).post("/api/consents").send({
            userId,
            purpose,
            policyVersion,
        });
        (0, vitest_1.expect)(response.status).toBe(401);
    });
    (0, vitest_1.it)("rejects malformed API key", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post("/api/consents")
            .set("X-API-Key", "not-a-valid-key")
            .send({ userId, purpose, policyVersion });
        (0, vitest_1.expect)(response.status).toBe(401);
    });
    (0, vitest_1.it)("grants, checks, fetches, and revokes consent", async () => {
        const grantResponse = await (0, supertest_1.default)(app_1.default)
            .post("/api/consents")
            .set("X-API-Key", tenantAKey)
            .send({ userId, purpose, policyVersion });
        (0, vitest_1.expect)(grantResponse.status).toBe(201);
        (0, vitest_1.expect)(grantResponse.body).toEqual({
            success: true,
            data: vitest_1.expect.objectContaining({
                id: vitest_1.expect.any(String),
                tenantId: tenantAId,
                userId,
                purpose,
                policyVersion,
                status: "GRANTED",
                createdAt: vitest_1.expect.any(String),
            }),
        });
        const consentId = grantResponse.body.data.id;
        const checkGrantedResponse = await (0, supertest_1.default)(app_1.default)
            .get("/api/consents/check")
            .set("X-API-Key", tenantAKey)
            .query({ userId, purpose });
        (0, vitest_1.expect)(checkGrantedResponse.status).toBe(200);
        (0, vitest_1.expect)(checkGrantedResponse.body).toEqual({
            success: true,
            data: { hasConsent: true },
        });
        const fetchResponse = await (0, supertest_1.default)(app_1.default)
            .get(`/api/consents/user/${userId}`)
            .set("X-API-Key", tenantAKey);
        (0, vitest_1.expect)(fetchResponse.status).toBe(200);
        (0, vitest_1.expect)(fetchResponse.body.data).toEqual([
            vitest_1.expect.objectContaining({
                id: consentId,
                tenantId: tenantAId,
                userId,
                purpose,
                status: "GRANTED",
                policyVersion,
            }),
        ]);
        const revokeResponse = await (0, supertest_1.default)(app_1.default)
            .post(`/api/consents/revoke/${consentId}`)
            .set("X-API-Key", tenantAKey);
        (0, vitest_1.expect)(revokeResponse.status).toBe(200);
        (0, vitest_1.expect)(revokeResponse.body.data).toEqual(vitest_1.expect.objectContaining({
            id: consentId,
            tenantId: tenantAId,
            userId,
            purpose,
            policyVersion,
            status: "REVOKED",
        }));
        const checkRevokedResponse = await (0, supertest_1.default)(app_1.default)
            .get("/api/consents/check")
            .set("X-API-Key", tenantAKey)
            .query({ userId, purpose });
        (0, vitest_1.expect)(checkRevokedResponse.status).toBe(200);
        (0, vitest_1.expect)(checkRevokedResponse.body.data).toEqual({ hasConsent: false });
    });
    (0, vitest_1.it)("rejects invalid request data", async () => {
        const missingUser = await (0, supertest_1.default)(app_1.default)
            .post("/api/consents")
            .set("X-API-Key", tenantAKey)
            .send({ purpose, policyVersion });
        (0, vitest_1.expect)(missingUser.status).toBe(400);
        const missingPurpose = await (0, supertest_1.default)(app_1.default)
            .post("/api/consents")
            .set("X-API-Key", tenantAKey)
            .send({ userId, policyVersion });
        (0, vitest_1.expect)(missingPurpose.status).toBe(400);
        const missingPolicyVersion = await (0, supertest_1.default)(app_1.default)
            .post("/api/consents")
            .set("X-API-Key", tenantAKey)
            .send({ userId, purpose });
        (0, vitest_1.expect)(missingPolicyVersion.status).toBe(400);
        const invalidCheck = await (0, supertest_1.default)(app_1.default)
            .get("/api/consents/check")
            .set("X-API-Key", tenantAKey)
            .query({ userId: "", purpose });
        (0, vitest_1.expect)(invalidCheck.status).toBe(400);
    });
    (0, vitest_1.it)("preserves tenant isolation for consent lookup", async () => {
        const grantResponse = await (0, supertest_1.default)(app_1.default)
            .post("/api/consents")
            .set("X-API-Key", tenantAKey)
            .send({ userId: "shared-user", purpose: "analytics", policyVersion: "v1" });
        (0, vitest_1.expect)(grantResponse.status).toBe(201);
        const differentTenantCheck = await (0, supertest_1.default)(app_1.default)
            .get("/api/consents/check")
            .set("X-API-Key", tenantBKey)
            .query({ userId: "shared-user", purpose: "analytics" });
        (0, vitest_1.expect)(differentTenantCheck.status).toBe(200);
        (0, vitest_1.expect)(differentTenantCheck.body.data).toEqual({ hasConsent: false });
        const differentTenantFetch = await (0, supertest_1.default)(app_1.default)
            .get("/api/consents/user/shared-user")
            .set("X-API-Key", tenantBKey);
        (0, vitest_1.expect)(differentTenantFetch.status).toBe(200);
        (0, vitest_1.expect)(differentTenantFetch.body.data).toEqual([]);
    });
    (0, vitest_1.it)("rejects a nonexistent revoke target", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post("/api/consents/revoke/nonexistent-consent-id")
            .set("X-API-Key", tenantAKey);
        (0, vitest_1.expect)(response.status).toBe(500);
        (0, vitest_1.expect)(response.body.success).toBe(false);
    });
});
//# sourceMappingURL=consent.api.test.js.map