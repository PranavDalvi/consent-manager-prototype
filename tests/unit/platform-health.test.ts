import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../../src/app";

describe("Platform Health and Readiness API", () => {
  it("GET /health returns 200 Healthy", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("Healthy");
    expect(res.body.service).toBe("consent-manager-api");
  });

  it("GET /ready returns readiness checks status", async () => {
    const res = await request(app).get("/ready");
    expect([200, 503]).toContain(res.status);
    expect(res.body.checks).toBeDefined();
    expect(res.body.checks.api).toBe(true);
  });
});
