import { Router } from "express";
import { healthHandler, readyHandler } from "./health.controller";

const router = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Application Liveness Endpoint
 *     tags:
 *       - Observability
 *     responses:
 *       200:
 *         description: API process is alive
 */
router.get("/health", healthHandler);

/**
 * @swagger
 * /ready:
 *   get:
 *     summary: Readiness Check Endpoint
 *     tags:
 *       - Observability
 *     responses:
 *       200:
 *         description: Database, Redis, and Queue connections are ready
 *       503:
 *         description: System is degraded or unhealthy
 */
router.get("/ready", readyHandler);

export default router;
