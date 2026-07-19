import { Router } from "express";
import { checkConsentHandler, fetchUserConsentsHandler, grantConsentHandler, revokeConsentHandler } from "../controllers/consent.controller";
import { apiKeyAuthMiddleware } from "../middlewares/api-key-auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { checkConsentSchema, fetchUserConsentsSchema, grantConsentSchema, revokeConsentSchema } from "../validators/consent.validator";

const router = Router();

/**
 * @swagger
 * /consents:
 *   post:
 *     summary: Grant consent
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Consents
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - policyId
 *             properties:
 *               userId:
 *                 type: string
 *               policyId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Consent granted
 */
router.post("/", apiKeyAuthMiddleware, validate(grantConsentSchema, "body"), grantConsentHandler);


/**
 * @swagger
 * /consents/revoke/{consentId}:
 *   post:
 *     summary: Revoke consent
 *     tags:
 *       - Consents
 *     parameters:
 *       - in: path
 *         name: consentId
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Consent revoked
 */
router.post("/revoke/:consentId", apiKeyAuthMiddleware, validate(revokeConsentSchema, "params"), revokeConsentHandler);

/**
 * @swagger
 * /consents/check:
 *   get:
 *     summary: Check consent status for the authenticated tenant
 *     tags:
 *       - Consents
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *       - in: query
 *         name: purpose
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Consent status checked
 */
router.get("/check", apiKeyAuthMiddleware, validate(checkConsentSchema, "query"), checkConsentHandler);

/**
 * @swagger
* /consents/user/{userId}:
*   get:
*     summary: Fetch user consents
*     tags:
*       - Consents
*     parameters:
*       - in: path
*         name: userId
*         schema:
*           type: string
*         required: true
*     responses:
*       200:
*         description: User consents fetched
*/
router.get("/user/:userId", apiKeyAuthMiddleware, validate(fetchUserConsentsSchema, "params"), fetchUserConsentsHandler);

export default router;