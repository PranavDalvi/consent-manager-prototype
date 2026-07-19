import { describe, expect, it } from "vitest";
import { createPolicySchema, createPolicyVersionSchema, policyIdSchema } from "../../src/validators/policy.validator";

describe("policy validators", () => {
  it("accepts a valid create payload", () => {
    expect(createPolicySchema.safeParse({
      title: "Privacy Policy",
      purpose: "marketing",
      version: 1,
      content: "Policy content",
    }).success).toBe(true);
  });

  it("rejects an invalid version", () => {
    expect(createPolicySchema.safeParse({
      title: "Privacy Policy",
      purpose: "marketing",
      version: 0,
      content: "Policy content",
    }).success).toBe(false);
  });

  it("accepts a valid version payload", () => {
    expect(createPolicyVersionSchema.safeParse({ content: "Updated content" }).success).toBe(true);
  });

  it("accepts a valid id payload", () => {
    expect(policyIdSchema.safeParse({ id: "policy-1" }).success).toBe(true);
  });
});
