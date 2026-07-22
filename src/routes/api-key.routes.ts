import { Router } from "express";
import { tenantAuthMiddleware } from "../middlewares/tenant-auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { apiKeyIdSchema, createApiKeySchema } from "../validators/api-key.validator";
import { createApiKeyHandler, getApiKeyHandler, listApiKeysHandler, revokeApiKeyHandler, rotateApiKeyHandler } from "../controllers/api-key-management.controller";

const router = Router();

/**
 * @swagger
 * /api-keys:
 *   post:
 *     summary: Create an API key
 *     tags:
 *       - API Keys
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: API key created
 */
router.post("/", tenantAuthMiddleware, validate(createApiKeySchema, "body"), createApiKeyHandler);

/**
 * @swagger
 * /api-keys:
 *   get:
 *     summary: List API keys
 *     tags:
 *       - API Keys
 *     security:
 *       - ApiKeyAuth: []
 */
router.get("/", tenantAuthMiddleware, listApiKeysHandler);

/**
 * @swagger
 * /api-keys/{id}:
 *   get:
 *     summary: Get an API key
 *     tags:
 *       - API Keys
 *     security:
 *       - ApiKeyAuth: []
 */
router.get("/:id", tenantAuthMiddleware, validate(apiKeyIdSchema, "params"), getApiKeyHandler);

/**
 * @swagger
 * /api-keys/{id}/revoke:
 *   patch:
 *     summary: Revoke an API key
 *     tags:
 *       - API Keys
 *     security:
 *       - ApiKeyAuth: []
 */
router.patch("/:id/revoke", tenantAuthMiddleware, validate(apiKeyIdSchema, "params"), revokeApiKeyHandler);

/**
 * @swagger
 * /api-keys/{id}/rotate:
 *   post:
 *     summary: Rotate an API key
 *     tags:
 *       - API Keys
 *     security:
 *       - ApiKeyAuth: []
 */
router.post("/:id/rotate", tenantAuthMiddleware, validate(apiKeyIdSchema, "params"), rotateApiKeyHandler);

export default router;
