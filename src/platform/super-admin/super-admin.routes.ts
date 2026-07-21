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
  getPlatformLogsHandler,
} from "./super-admin.controller";
import { superAdminAuthMiddleware } from "./super-admin.middleware";

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
router.get("/webhooks", superAdminAuthMiddleware, getPlatformWebhooksHandler);
router.get("/system", superAdminAuthMiddleware, getPlatformSystemHandler);
router.get("/tenants", superAdminAuthMiddleware, getPlatformTenantsHandler);
router.get("/logs", superAdminAuthMiddleware, getPlatformLogsHandler);

export default router;
