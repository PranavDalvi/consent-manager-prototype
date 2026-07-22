import { Router } from "express";
import {
  loginSuperAdminHandler,
  getPlatformOverviewHandler,
  getPlatformMetricsHandler,
  getPlatformHealthHandler,
  getPlatformQueuesHandler,
  getPlatformWebhooksHandler,
  getPlatformSystemHandler,
  getPlatformTenantsHandler,
  createPlatformTenantHandler,
  getPlatformTenantDetailsHandler,
  updatePlatformTenantHandler,
  updatePlatformTenantStatusHandler,
  deletePlatformTenantHandler,
  getPlatformLogsHandler,
} from "./super-admin.controller";
import { superAdminAuthMiddleware } from "./super-admin.middleware";

import {
  getDLQJobsHandler,
  deleteDLQJobHandler,
  replayDLQJobHandler,
  bulkReplayDLQJobsHandler,
  getFailedWebhooksHandler,
  replayWebhookDeliveryHandler,
  bulkReplayWebhookDeliveriesHandler,
  getFailedEventsHandler,
  replayInternalEventHandler,
  bulkReplayInternalEventsHandler,
  getRetriesHandler,
  getScheduledJobsHandler,
  getReplaysHandler,
  getOutboxHandler,
  getCircuitBreakersHandler,
  getDetailedQueuesHandler,
  queueActionHandler,
  getWorkersStatusHandler,
  workerActionHandler,
} from "../controllers/reliability.controller";

const router = Router();

/**
 * @swagger
 * /platform/auth/login:
 *   post:
 *     summary: Super Admin Login
 *     description: Authenticate a platform operator with email and password to receive a platform JWT.
 *     tags:
 *       - Platform Super Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@platform.com
 *               password:
 *                 type: string
 *                 example: SuperSecretPassword123!
 *     responses:
 *       200:
 *         description: JWT Token returned
 *       401:
 *         description: Invalid credentials
 */
router.post("/auth/login", loginSuperAdminHandler);

// Protected Platform Endpoints
router.get("/overview", superAdminAuthMiddleware, getPlatformOverviewHandler);
router.get("/metrics", superAdminAuthMiddleware, getPlatformMetricsHandler);
router.get("/health", superAdminAuthMiddleware, getPlatformHealthHandler);
router.get("/queues", superAdminAuthMiddleware, getPlatformQueuesHandler);
router.get("/queues/detailed", superAdminAuthMiddleware, getDetailedQueuesHandler);
router.post("/queues/:queueName/action", superAdminAuthMiddleware, queueActionHandler);
router.get("/workers/status", superAdminAuthMiddleware, getWorkersStatusHandler);
router.post("/workers/:workerId/action", superAdminAuthMiddleware, workerActionHandler);
router.get("/webhooks", superAdminAuthMiddleware, getPlatformWebhooksHandler);
router.get("/system", superAdminAuthMiddleware, getPlatformSystemHandler);
router.get("/tenants", superAdminAuthMiddleware, getPlatformTenantsHandler);
router.post("/tenants", superAdminAuthMiddleware, createPlatformTenantHandler);
router.get("/tenants/:tenantId", superAdminAuthMiddleware, getPlatformTenantDetailsHandler);
router.patch("/tenants/:tenantId", superAdminAuthMiddleware, updatePlatformTenantHandler);
router.patch("/tenants/:tenantId/status", superAdminAuthMiddleware, updatePlatformTenantStatusHandler);
router.delete("/tenants/:tenantId", superAdminAuthMiddleware, deletePlatformTenantHandler);
router.get("/logs", superAdminAuthMiddleware, getPlatformLogsHandler);

// Reliability Platform Endpoints
router.get("/dlq", superAdminAuthMiddleware, getDLQJobsHandler);
router.delete("/dlq/:jobId", superAdminAuthMiddleware, deleteDLQJobHandler);
router.post("/dlq/:jobId/replay", superAdminAuthMiddleware, replayDLQJobHandler);
router.post("/dlq/replay", superAdminAuthMiddleware, bulkReplayDLQJobsHandler);

router.get("/webhooks/failed", superAdminAuthMiddleware, getFailedWebhooksHandler);
router.post("/webhooks/:deliveryId/replay", superAdminAuthMiddleware, replayWebhookDeliveryHandler);
router.post("/webhooks/replay", superAdminAuthMiddleware, bulkReplayWebhookDeliveriesHandler);

router.get("/events/failed", superAdminAuthMiddleware, getFailedEventsHandler);
router.post("/events/:eventId/replay", superAdminAuthMiddleware, replayInternalEventHandler);
router.post("/events/replay", superAdminAuthMiddleware, bulkReplayInternalEventsHandler);

router.get("/retries", superAdminAuthMiddleware, getRetriesHandler);
router.get("/scheduled-jobs", superAdminAuthMiddleware, getScheduledJobsHandler);
router.get("/replays", superAdminAuthMiddleware, getReplaysHandler);
router.get("/outbox", superAdminAuthMiddleware, getOutboxHandler);
router.get("/circuit-breakers", superAdminAuthMiddleware, getCircuitBreakersHandler);

export default router;
