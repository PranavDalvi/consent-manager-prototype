import { describe, expect, it } from "vitest";

import {
  checkConsentSchema,
  fetchUserConsentsSchema,
  grantConsentSchema,
  revokeConsentSchema,
} from "../../src/validators/consent.validator";

describe("consent validators", () => {
  it("accepts a valid grant payload", () => {
    const result = grantConsentSchema.safeParse({
      userId: "user-1",
      policyId: "policy-1",
    });

    expect(result.success).toBe(true);
  });

  it("rejects a missing revoke id", () => {
    const result = revokeConsentSchema.safeParse({ consentId: "" });

    expect(result.success).toBe(false);
  });

  it("accepts a valid check payload", () => {
    const result = checkConsentSchema.safeParse({
      tenantId: "tenant-1",
      userId: "user-1",
      purpose: "marketing",
    });

    expect(result.success).toBe(true);
  });

  it("accepts a valid user-consent lookup payload", () => {
    const result = fetchUserConsentsSchema.safeParse({
      tenantId: "tenant-1",
      userId: "user-1",
    });

    expect(result.success).toBe(true);
  });
});
