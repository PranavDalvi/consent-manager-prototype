import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { prisma } from "./lib/prisma";
import consentRoutes from "./routes/consent.routes";
import { errorHandler } from "./middlewares/error.middleware";
import swaggerSpec from "./docs/swagger";
import swaggerUi from "swagger-ui-express";
import auditRoutes from "./routes/audit.routes";
import apiKeyRoutes from "./routes/api-key.routes";
import policyRoutes from "./routes/policy.routes";
import webhookRoutes from "./routes/webhook.routes";
import eventRoutes from "./routes/event.routes";
import authRoutes from "./routes/auth.routes";
import teamRoutes from "./routes/team.routes";

import { initTracing } from "./platform/observability/tracing";
import { observabilityMiddleware } from "./platform/observability/logging.middleware";
import { prometheusMetricsMiddleware } from "./platform/metrics/prom-client";
import metricsRoutes from "./platform/metrics/metrics.routes";
import healthRoutes from "./platform/health/health.routes";
import superAdminRoutes from "./platform/super-admin/super-admin.routes";

// Initialize OpenTelemetry
initTracing();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Observability and Metrics Middlewares
app.use(observabilityMiddleware);
app.use(prometheusMetricsMiddleware);

// OpenAPI Documentation
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Prometheus scraping endpoint GET /metrics
app.use("/", metricsRoutes);

// Liveness GET /health and Readiness GET /ready
app.use("/", healthRoutes);

// Platform Super Admin APIs
app.use("/api/platform", superAdminRoutes);

// Authentication & Team Management APIs
app.use("/api/auth", authRoutes);
app.use("/api/team", teamRoutes);

// Legacy check endpoint
app.get("/db-check", async (_req, res) => {
  const count = await prisma.consent.count();
  res.json({ consentCount: count });
});

// Tenant Resource APIs
app.use("/api/consents", consentRoutes);
app.use("/api/policies", policyRoutes);
app.use("/api/audit", auditRoutes);
app.use("/api/api-keys", apiKeyRoutes);
app.use("/api/webhooks", webhookRoutes);
app.use("/api/events", eventRoutes);

app.use(errorHandler);

export default app;