import { Router } from "express";

import { apiKeyAuthMiddleware } from "../middlewares/api-key-auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { createWebhookHandler, disableWebhookHandler, enableWebhookHandler, getWebhookHandler, listWebhooksHandler, updateWebhookHandler } from "../controllers/webhook.controller";
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
router.post("/", apiKeyAuthMiddleware, validate(createWebhookSchema, "body"), createWebhookHandler);

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
router.get("/", apiKeyAuthMiddleware, listWebhooksHandler);

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
router.get("/:id", apiKeyAuthMiddleware, validate(webhookIdSchema, "params"), getWebhookHandler);

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
router.patch("/:id", apiKeyAuthMiddleware, validate(webhookIdSchema, "params"), validate(updateWebhookSchema, "body"), updateWebhookHandler);

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
router.patch("/:id/disable", apiKeyAuthMiddleware, validate(webhookIdSchema, "params"), disableWebhookHandler);

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
router.patch("/:id/enable", apiKeyAuthMiddleware, validate(webhookIdSchema, "params"), enableWebhookHandler);

export default router;