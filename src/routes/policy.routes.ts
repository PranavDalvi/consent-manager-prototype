import { Router } from "express";
import { tenantAuthMiddleware } from "../middlewares/tenant-auth.middleware";
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
router.post("/", tenantAuthMiddleware, validate(createPolicySchema, "body"), createPolicyHandler);
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
router.get("/", tenantAuthMiddleware, listPoliciesHandler);
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
router.get("/:id", tenantAuthMiddleware, validate(policyIdSchema, "params"), getPolicyHandler);
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
router.patch("/:id/archive", tenantAuthMiddleware, validate(policyIdSchema, "params"), archivePolicyHandler);
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
router.post("/:id/versions", tenantAuthMiddleware, validate(createPolicyVersionSchema, "body"), createPolicyVersionHandler);
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
router.get("/:id/versions", tenantAuthMiddleware, validate(policyIdSchema, "params"), listPolicyVersionsHandler);

export default router;
