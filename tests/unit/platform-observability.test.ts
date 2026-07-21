import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../../src/app";

describe("Platform Observability Middleware", () => {
  it("generates X-Correlation-ID and X-Request-ID if absent", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.headers["x-correlation-id"]).toBeDefined();
    expect(res.headers["x-request-id"]).toBeDefined();
  });

  it("preserves incoming X-Correlation-ID header", async () => {
    const customCorrelationId = "custom-corr-12345";
    const res = await request(app)
      .get("/health")
      .set("X-Correlation-ID", customCorrelationId);

    expect(res.status).toBe(200);
    expect(res.headers["x-correlation-id"]).toBe(customCorrelationId);
    expect(res.headers["x-request-id"]).toBeDefined();
  });
});
