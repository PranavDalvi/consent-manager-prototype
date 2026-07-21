import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../../src/app";

describe("Prometheus Metrics API", () => {
  it("GET /metrics returns text/plain Prometheus format metrics", async () => {
    const res = await request(app).get("/metrics");
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toContain("text/plain");
    expect(res.text).toContain("http_requests_total");
  });
});
