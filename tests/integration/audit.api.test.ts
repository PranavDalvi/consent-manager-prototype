import request from "supertest";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import app from "../../src/app";
import { prisma } from "../../src/db/prisma";

describe("Audit Logs API", () => {
  const timestamp = Date.now();

  const testData = {
    tenantId: `audit-test-tenant-${timestamp}`,
    userId: `audit-test-user-${timestamp}`,
    purpose: "marketing",
    policyVersion: "v1",
  };

  let consentId: string;

  /*
   * Grant consent before running the audit-log tests.
   *
   * Granting consent should automatically create a
   * CONSENT_GRANTED audit-log entry.
   */
  beforeAll(async () => {
    const response = await request(app)
      .post("/api/consents")
      .send(testData);

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.id).toBeDefined();

    consentId = response.body.data.id;
  });

  describe("GET /api/audit", () => {
    it("should return the CONSENT_GRANTED audit log", async () => {
      const response = await request(app)
        .get("/api/audit")
        .query({
          tenantId: testData.tenantId,
          userId: testData.userId,
        });

      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);

      expect(Array.isArray(response.body.data)).toBe(true);

      expect(response.body.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            tenantId: testData.tenantId,
            userId: testData.userId,
            action: "CONSENT_GRANTED",
            purpose: testData.purpose,
          }),
        ])
      );
    });

    it("should return both grant and revoke audit logs", async () => {
      /*
       * Revoke the consent created in beforeAll().
       *
       * Revoking consent should automatically create a
       * CONSENT_REVOKED audit-log entry.
       */
      const revokeResponse = await request(app)
        .post(`/api/consents/revoke/${consentId}`);

      expect(revokeResponse.status).toBe(200);

      expect(revokeResponse.body.success).toBe(true);

      expect(revokeResponse.body.data).toMatchObject({
        id: consentId,
        tenantId: testData.tenantId,
        userId: testData.userId,
        purpose: testData.purpose,
        status: "REVOKED",
      });

      /*
       * Fetch the audit logs after revoking consent.
       */
      const response = await request(app)
        .get("/api/audit")
        .query({
          tenantId: testData.tenantId,
          userId: testData.userId,
        });

      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);

      expect(Array.isArray(response.body.data)).toBe(true);

      /*
       * Verify that both audit events exist.
       */
      expect(response.body.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            tenantId: testData.tenantId,
            userId: testData.userId,
            action: "CONSENT_GRANTED",
            purpose: testData.purpose,
          }),

          expect.objectContaining({
            tenantId: testData.tenantId,
            userId: testData.userId,
            action: "CONSENT_REVOKED",
            purpose: testData.purpose,
          }),
        ])
      );
    });

    it("should return audit logs in descending creation order", async () => {
      const response = await request(app)
        .get("/api/audit")
        .query({
          tenantId: testData.tenantId,
          userId: testData.userId,
        });

      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);

      const logs = response.body.data;

      expect(Array.isArray(logs)).toBe(true);

      expect(logs.length).toBeGreaterThanOrEqual(2);

      /*
       * The revoke event was created after the grant event,
       * so it should be returned first.
       */
      expect(logs[0].action).toBe("CONSENT_REVOKED");

      expect(logs[1].action).toBe("CONSENT_GRANTED");

      const newestLogTime = new Date(
        logs[0].createdAt
      ).getTime();

      const olderLogTime = new Date(
        logs[1].createdAt
      ).getTime();

      expect(newestLogTime).toBeGreaterThanOrEqual(
        olderLogTime
      );
    });
  });

  describe("Audit Logs API validation", () => {
    it("should reject a request without userId", async () => {
      const response = await request(app)
        .get("/api/audit")
        .query({
          tenantId: testData.tenantId,
        });

      expect(response.status).toBe(400);

      expect(response.body.success).toBe(false);
    });

    it("should reject a request without tenantId", async () => {
      const response = await request(app)
        .get("/api/audit")
        .query({
          userId: testData.userId,
        });

      expect(response.status).toBe(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe("Audit-log tenant isolation", () => {
    it("should not return logs belonging to another tenant", async () => {
      const response = await request(app)
        .get("/api/audit")
        .query({
          tenantId: `different-tenant-${timestamp}`,
          userId: testData.userId,
        });

      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);

      expect(response.body.data).toEqual([]);
    });
  });

  describe("Audit Logs API", () => {
    const timestamp = Date.now();

    const testData = {
      tenantId: `audit-test-tenant-${timestamp}`,
      userId: `audit-test-user-${timestamp}`,
      purpose: "marketing",
      policyVersion: "v1",
    };

    let consentId: string;

    /*
     * Grant consent before running the audit-log tests.
     *
     * Granting consent should automatically create a
     * CONSENT_GRANTED audit-log entry.
     */
    beforeAll(async () => {
      const response = await request(app)
        .post("/api/consents")
        .send(testData);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data.id).toBeDefined();

      consentId = response.body.data.id;
    });

    describe("GET /api/audit", () => {
      it("should return the CONSENT_GRANTED audit log", async () => {
        const response = await request(app)
          .get("/api/audit")
          .query({
            tenantId: testData.tenantId,
            userId: testData.userId,
          });

        expect(response.status).toBe(200);

        expect(response.body.success).toBe(true);

        expect(Array.isArray(response.body.data)).toBe(true);

        expect(response.body.data).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              tenantId: testData.tenantId,
              userId: testData.userId,
              action: "CONSENT_GRANTED",
              purpose: testData.purpose,
            }),
          ])
        );
      });

      it("should return both grant and revoke audit logs", async () => {
        /*
         * Revoke the consent created in beforeAll().
         *
         * Revoking consent should automatically create a
         * CONSENT_REVOKED audit-log entry.
         */
        const revokeResponse = await request(app)
          .post(`/api/consents/revoke/${consentId}`);

        expect(revokeResponse.status).toBe(200);

        expect(revokeResponse.body.success).toBe(true);

        expect(revokeResponse.body.data).toMatchObject({
          id: consentId,
          tenantId: testData.tenantId,
          userId: testData.userId,
          purpose: testData.purpose,
          status: "REVOKED",
        });

        /*
         * Fetch the audit logs after revoking consent.
         */
        const response = await request(app)
          .get("/api/audit")
          .query({
            tenantId: testData.tenantId,
            userId: testData.userId,
          });

        expect(response.status).toBe(200);

        expect(response.body.success).toBe(true);

        expect(Array.isArray(response.body.data)).toBe(true);

        /*
         * Verify that both audit events exist.
         */
        expect(response.body.data).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              tenantId: testData.tenantId,
              userId: testData.userId,
              action: "CONSENT_GRANTED",
              purpose: testData.purpose,
            }),

            expect.objectContaining({
              tenantId: testData.tenantId,
              userId: testData.userId,
              action: "CONSENT_REVOKED",
              purpose: testData.purpose,
            }),
          ])
        );
      });

      it("should return audit logs in descending creation order", async () => {
        const response = await request(app)
          .get("/api/audit")
          .query({
            tenantId: testData.tenantId,
            userId: testData.userId,
          });

        expect(response.status).toBe(200);

        expect(response.body.success).toBe(true);

        const logs = response.body.data;

        expect(Array.isArray(logs)).toBe(true);

        expect(logs.length).toBeGreaterThanOrEqual(2);

        /*
         * The revoke event was created after the grant event,
         * so it should be returned first.
         */
        expect(logs[0].action).toBe("CONSENT_REVOKED");

        expect(logs[1].action).toBe("CONSENT_GRANTED");

        const newestLogTime = new Date(
          logs[0].createdAt
        ).getTime();

        const olderLogTime = new Date(
          logs[1].createdAt
        ).getTime();

        expect(newestLogTime).toBeGreaterThanOrEqual(
          olderLogTime
        );
      });
    });

    describe("Audit Logs API validation", () => {
      it("should reject a request without userId", async () => {
        const response = await request(app)
          .get("/api/audit")
          .query({
            tenantId: testData.tenantId,
          });

        expect(response.status).toBe(400);

        expect(response.body.success).toBe(false);
      });

      it("should reject a request without tenantId", async () => {
        const response = await request(app)
          .get("/api/audit")
          .query({
            userId: testData.userId,
          });

        expect(response.status).toBe(400);

        expect(response.body.success).toBe(false);
      });
    });

    describe("Audit-log tenant isolation", () => {
      it("should not return logs belonging to another tenant", async () => {
        const response = await request(app)
          .get("/api/audit")
          .query({
            tenantId: `different-tenant-${timestamp}`,
            userId: testData.userId,
          });

        expect(response.status).toBe(200);

        expect(response.body.success).toBe(true);

        expect(response.body.data).toEqual([]);
      });
    });
  });

  afterAll(async () => {
    await prisma.auditLog.deleteMany({
      where: {
        tenantId: testData.tenantId,
        userId: testData.userId,
      },
    });

    await prisma.consent.deleteMany({
      where: {
        tenantId: testData.tenantId,
        userId: testData.userId,
      },
    });

    await prisma.$disconnect();
  });

});
