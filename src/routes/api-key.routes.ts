import { Router } from "express";
import { apiKeyAuthMiddleware } from "../middlewares/api-key-auth.middleware";
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
router.post("/", apiKeyAuthMiddleware, validate(createApiKeySchema, "body"), createApiKeyHandler);

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
router.get("/", apiKeyAuthMiddleware, listApiKeysHandler);

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
router.get("/:id", apiKeyAuthMiddleware, validate(apiKeyIdSchema, "params"), getApiKeyHandler);

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
router.patch("/:id/revoke", apiKeyAuthMiddleware, validate(apiKeyIdSchema, "params"), revokeApiKeyHandler);

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
router.post("/:id/rotate", apiKeyAuthMiddleware, validate(apiKeyIdSchema, "params"), rotateApiKeyHandler);

export default router;
