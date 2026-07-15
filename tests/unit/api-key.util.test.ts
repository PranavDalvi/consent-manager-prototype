import { describe, expect, it } from "vitest";

import {
  generateApiKey,
  getApiKeyPrefix,
  hashApiKey,
} from "../../src/utils/api-key";

describe("api key utilities", () => {
  it("generates a prefixed cryptographically secure api key", () => {
    const apiKey = generateApiKey();

    expect(apiKey.startsWith("cm_live_")).toBe(true);
    expect(apiKey.length).toBe("cm_live_".length + 64);
  });

  it("hashes api keys deterministically with sha-256", () => {
    const rawApiKey = "cm_live_test-secret-value";

    const firstHash = hashApiKey(rawApiKey);
    const secondHash = hashApiKey(rawApiKey);

    expect(firstHash).toBe(secondHash);
    expect(firstHash).toMatch(/^[a-f0-9]{64}$/);
  });

  it("returns a non-secret prefix for display", () => {
    const prefix = getApiKeyPrefix("cm_live_1234567890abcdef");

    expect(prefix).toBe("cm_live_1234567");
    expect(prefix).not.toContain("abcdef");
  });
});
