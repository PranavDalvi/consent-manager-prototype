import client from "prom-client";
import { Request, Response, NextFunction } from "express";

export const register = new client.Registry();

client.collectDefaultMetrics({ register, prefix: "consent_manager_" });

export const httpRequestTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status_code", "tenant_id"],
  registers: [register],
});

export const httpRequestDurationSeconds = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "HTTP request duration in seconds",
  labelNames: ["method", "route", "status_code"],
  buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5, 10],
  registers: [register],
});

export const httpActiveRequests = new client.Gauge({
  name: "http_active_requests",
  help: "Number of active HTTP requests",
  registers: [register],
});

export const dbQueryDurationSeconds = new client.Histogram({
  name: "db_query_duration_seconds",
  help: "Database query duration in seconds",
  labelNames: ["operation"],
  buckets: [0.001, 0.005, 0.01, 0.05, 0.1, 0.5, 1, 2],
  registers: [register],
});

export const dbHealthGauge = new client.Gauge({
  name: "db_health_status",
  help: "Database health status (1 = healthy, 0 = unhealthy)",
  registers: [register],
});

export const redisHealthGauge = new client.Gauge({
  name: "redis_health_status",
  help: "Redis health status (1 = healthy, 0 = unhealthy)",
  registers: [register],
});

export const bullQueueJobsGauge = new client.Gauge({
  name: "bullmq_queue_jobs_total",
  help: "Number of BullMQ jobs by state",
  labelNames: ["queue", "state"],
  registers: [register],
});

export const webhookDeliveriesTotal = new client.Counter({
  name: "webhook_deliveries_total",
  help: "Total webhook deliveries attempted",
  labelNames: ["status"],
  registers: [register],
});

export const webhookDeliveryDurationSeconds = new client.Histogram({
  name: "webhook_delivery_duration_seconds",
  help: "Webhook delivery latency in seconds",
  buckets: [0.05, 0.1, 0.25, 0.5, 1, 2, 5],
  registers: [register],
});

export const tenantRequestsTotal = new client.Counter({
  name: "tenant_requests_total",
  help: "Total requests per tenant",
  labelNames: ["tenant_id"],
  registers: [register],
});

export const tenantRateLimitHitsTotal = new client.Counter({
  name: "tenant_rate_limit_hits_total",
  help: "Total rate limit hits per tenant",
  labelNames: ["tenant_id"],
  registers: [register],
});

export function prometheusMetricsMiddleware(req: Request, res: Response, next: NextFunction): void {
  httpActiveRequests.inc();
  const startTime = Date.now();

  res.on("finish", () => {
    httpActiveRequests.dec();
    const durationInSeconds = (Date.now() - startTime) / 1000;
    const route = req.route ? req.route.path : req.path;
    const tenantId = req.auth?.tenantId || "anonymous";

    httpRequestTotal.inc({
      method: req.method,
      route,
      status_code: res.statusCode.toString(),
      tenant_id: tenantId,
    });

    httpRequestDurationSeconds.observe(
      {
        method: req.method,
        route,
        status_code: res.statusCode.toString(),
      },
      durationInSeconds
    );

    if (tenantId !== "anonymous") {
      tenantRequestsTotal.inc({ tenant_id: tenantId });
    }

    if (res.statusCode === 429 && tenantId !== "anonymous") {
      tenantRateLimitHitsTotal.inc({ tenant_id: tenantId });
    }
  });

  next();
}
