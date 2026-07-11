import request from "supertest";
import {
  beforeAll,
  describe,
  expect,
  it,
} from "vitest";

import app from "../../src/app";

describe("Consent API", () => {
  const testConsent = {
    tenantId: "integration-test-tenant",
    userId: "integration-test-user",
    purpose: "marketing",
    policyVersion: "v1",
  };

  let consentId: string;

  describe("POST /api/consents", () => {
    it("should grant consent", async () => {
      const response = await request(app)
        .post("/api/consents")
        .send(testConsent);

      expect(response.status).toBe(201);

      expect(response.body.success).toBe(true);

      expect(response.body.data).toMatchObject({
        tenantId: testConsent.tenantId,
        userId: testConsent.userId,
        purpose: testConsent.purpose,
        policyVersion: testConsent.policyVersion,
        status: "GRANTED",
      });

      expect(response.body.data.id).toBeDefined();

      consentId = response.body.data.id;
    });
  });

  describe("GET /api/consents/check", () => {
    it("should return true when consent is granted", async () => {
      const response = await request(app)
        .get("/api/consents/check")
        .query({
          tenantId: testConsent.tenantId,
          userId: testConsent.userId,
          purpose: testConsent.purpose,
        });

      expect(response.status).toBe(200);

      expect(response.body).toEqual({
        success: true,
        data: {
          hasConsent: true,
        },
      });
    });
  });

  describe(
    "GET /api/consents/:tenantId/user/:userId",
    () => {
      it("should return the user's active consents", async () => {
        const response = await request(app).get(
          `/api/consents/${testConsent.tenantId}/user/${testConsent.userId}`
        );

        expect(response.status).toBe(200);

        expect(response.body.success).toBe(true);

        expect(response.body.data).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: consentId,
              tenantId: testConsent.tenantId,
              userId: testConsent.userId,
              purpose: testConsent.purpose,
              status: "GRANTED",
            }),
          ])
        );
      });
    }
  );

  describe(
    "POST /api/consents/revoke/:consentId",
    () => {
      it("should revoke consent", async () => {
        const response = await request(app)
          .post(
            `/api/consents/revoke/${consentId}`
          );

        expect(response.status).toBe(200);

        expect(response.body.success).toBe(true);

        expect(response.body.data).toMatchObject({
          id: consentId,
          tenantId: testConsent.tenantId,
          userId: testConsent.userId,
          purpose: testConsent.purpose,
          status: "REVOKED",
        });
      });
    }
  );

  describe(
    "GET /api/consents/check after revocation",
    () => {
      it("should return false after consent is revoked", async () => {
        const response = await request(app)
          .get("/api/consents/check")
          .query({
            tenantId: testConsent.tenantId,
            userId: testConsent.userId,
            purpose: testConsent.purpose,
          });

        expect(response.status).toBe(200);

        expect(response.body).toEqual({
          success: true,
          data: {
            hasConsent: false,
          },
        });
      });
    }
  );
});
