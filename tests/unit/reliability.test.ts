import { describe, it, expect } from "vitest";
import { reliabilityConfig } from "../../src/config/reliability";

describe("Reliability & Circuit Breaker Logic Unit Tests", () => {
  it("loads configured environment variables with defaults", () => {
    expect(reliabilityConfig.retry.maxRetries).toBeGreaterThan(0);
    expect(reliabilityConfig.circuitBreaker.failureThreshold).toBeGreaterThan(0);
    expect(reliabilityConfig.retention.webhookRetentionDays).toBeGreaterThan(0);
  });
});
