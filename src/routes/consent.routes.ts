import { Router } from "express";
import { checkConsentHandler, fetchUserConsentsHandler, grantConsentHandler, revokeConsentHandler } from "../controllers/consent.controller";
import { validate } from "../middlewares/validate.middleware";
import { checkConsentSchema, fetchUserConsentsSchema, grantConsentSchema, revokeConsentSchema } from "../validators/consent.validator";

const router = Router();

/**
 * @swagger
 * /consents:
 *   post:
 *     summary: Grant consent
 *     tags:
 *       - Consents
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tenantId
 *               - userId
 *               - purpose
 *               - policyVersion
 *             properties:
 *               tenantId:
 *                 type: string
 *               userId:
 *                 type: string
 *               purpose:
 *                 type: string
 *               policyVersion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Consent granted
 */
router.post("/", validate(grantConsentSchema, "body"), grantConsentHandler);


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
router.post("/revoke/:consentId", validate(revokeConsentSchema, "params"), revokeConsentHandler);

/**
 * @swagger
 * /consents/check:
 *   get:
 *     summary: Check consent status
 *     tags:
 *       - Consents
 *     parameters:
 *       - in: query
 *         name: tenantId
 *         schema:
 *           type: string
 *         required: true
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
router.get("/check", validate(checkConsentSchema, "query"), checkConsentHandler);

/**
 * @swagger
* /consents/{tenantId}/user/{userId}:
*   get:
*     summary: Fetch user consents
*     tags:
*       - Consents
*     parameters:
*       - in: path
*         name: tenantId
*         schema:
*           type: string
*         required: true
*       - in: path
*         name: userId
*         schema:
*           type: string
*         required: true
*     responses:
*       200:
*         description: User consents fetched
*/
router.get("/:tenantId/user/:userId", validate(fetchUserConsentsSchema, "params"), fetchUserConsentsHandler);

export default router;