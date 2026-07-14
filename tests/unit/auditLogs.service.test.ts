import { describe, expect, it } from "vitest";

import { createAuditLogSchema, fetchAuditLogsSchema } from "../../src/middlewares/auditLog.validator";

describe("audit validators", () => {
  it("accepts a valid audit-log creation payload", () => {
    const result = createAuditLogSchema.safeParse({
      tenantId: "tenant-1",
      userId: "user-1",
      action: "CONSENT_GRANTED",
      details: { purpose: "marketing" },
    });

    expect(result.success).toBe(true);
  });

  it("accepts a valid audit lookup payload", () => {
    const result = fetchAuditLogsSchema.safeParse({
      tenantId: "tenant-1",
      userId: "user-1",
    });

    expect(result.success).toBe(true);
  });
});
