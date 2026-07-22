import { Router } from "express";
import { tenantAuthMiddleware } from "../middlewares/tenant-auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { createWebhookHandler, disableWebhookHandler, enableWebhookHandler, getWebhookHandler, listWebhooksHandler, updateWebhookHandler, deleteWebhookHandler } from "../controllers/webhook.controller";
import { createWebhookSchema, updateWebhookSchema, webhookIdSchema } from "../validators/webhook.validator";

const router = Router();

/**
 * @swagger
 * /webhooks:
 *   post:
 *     summary: Create a webhook
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Webhooks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - url
 *               - events
 */
router.post("/", tenantAuthMiddleware, validate(createWebhookSchema, "body"), createWebhookHandler);

/**
 * @swagger
 * /webhooks:
 *   get:
 *     summary: List webhooks
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Webhooks
 */
router.get("/", tenantAuthMiddleware, listWebhooksHandler);

/**
 * @swagger
 * /webhooks/{id}:
 *   get:
 *     summary: Get a webhook
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Webhooks
 */
router.get("/:id", tenantAuthMiddleware, validate(webhookIdSchema, "params"), getWebhookHandler);

/**
 * @swagger
 * /webhooks/{id}:
 *   patch:
 *     summary: Update a webhook
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Webhooks
 */
router.patch("/:id", tenantAuthMiddleware, validate(webhookIdSchema, "params"), validate(updateWebhookSchema, "body"), updateWebhookHandler);

/**
 * @swagger
 * /webhooks/{id}/disable:
 *   patch:
 *     summary: Disable a webhook
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Webhooks
 */
router.patch("/:id/disable", tenantAuthMiddleware, validate(webhookIdSchema, "params"), disableWebhookHandler);

/**
 * @swagger
 * /webhooks/{id}/enable:
 *   patch:
 *     summary: Enable a webhook
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Webhooks
 */
router.patch("/:id/enable", tenantAuthMiddleware, validate(webhookIdSchema, "params"), enableWebhookHandler);

router.delete("/:id", tenantAuthMiddleware, validate(webhookIdSchema, "params"), deleteWebhookHandler);

export default router;