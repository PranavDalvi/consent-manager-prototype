import { Router } from "express";
import { apiKeyAuthMiddleware } from "../middlewares/api-key-auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { createPolicySchema, createPolicyVersionSchema, policyIdSchema } from "../validators/policy.validator";
import { archivePolicyHandler, createPolicyHandler, createPolicyVersionHandler, getPolicyHandler, listPoliciesHandler, listPolicyVersionsHandler } from "../controllers/policy.controller";

const router = Router();

/**
 * @swagger
 * /policies:
 *   post:
 *     summary: Create a policy
 *     tags:
 *       - Policies
 *     security:
 *       - ApiKeyAuth: []
 */
router.post("/", apiKeyAuthMiddleware, validate(createPolicySchema, "body"), createPolicyHandler);
/**
 * @swagger
 * /policies:
 *   get:
 *     summary: List policies
 *     tags:
 *       - Policies
 *     security:
 *       - ApiKeyAuth: []
 */
router.get("/", apiKeyAuthMiddleware, listPoliciesHandler);
/**
 * @swagger
 * /policies/{id}:
 *   get:
 *     summary: Get a policy
 *     tags:
 *       - Policies
 *     security:
 *       - ApiKeyAuth: []
 */
router.get("/:id", apiKeyAuthMiddleware, validate(policyIdSchema, "params"), getPolicyHandler);
/**
 * @swagger
 * /policies/{id}/archive:
 *   patch:
 *     summary: Archive a policy
 *     tags:
 *       - Policies
 *     security:
 *       - ApiKeyAuth: []
 */
router.patch("/:id/archive", apiKeyAuthMiddleware, validate(policyIdSchema, "params"), archivePolicyHandler);
/**
 * @swagger
 * /policies/{id}/versions:
 *   post:
 *     summary: Create a new policy version
 *     tags:
 *       - Policies
 *     security:
 *       - ApiKeyAuth: []
 */
router.post("/:id/versions", apiKeyAuthMiddleware, validate(createPolicyVersionSchema, "body"), createPolicyVersionHandler);
/**
 * @swagger
 * /policies/{id}/versions:
 *   get:
 *     summary: List policy versions
 *     tags:
 *       - Policies
 *     security:
 *       - ApiKeyAuth: []
 */
router.get("/:id/versions", apiKeyAuthMiddleware, validate(policyIdSchema, "params"), listPolicyVersionsHandler);

export default router;
