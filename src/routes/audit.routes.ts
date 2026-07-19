import {Router} from "express";
import {fetchAuditLogsHandler} from "../controllers/audit.controller";
import { apiKeyAuthMiddleware } from "../middlewares/api-key-auth.middleware";
import { fetchAuditLogsSchema } from "../middlewares/auditLog.validator";
import { validate } from "../middlewares/validate.middleware";

const router = Router();

/**
 * @swagger
 * /audit:
 *   get:
 *     summary: Fetch audit logs for the authenticated tenant
 *     description: Returns all audit log entries for the authenticated tenant and user ordered by creation date.
 *     tags:
 *       - Audit Logs
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User identifier
 *         example: user-123
 *     responses:
 *       200:
 *         description: Audit logs fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: cmq0wjdg10000j9pp60waqi1k
 *                       tenantId:
 *                         type: string
 *                         example: amazon
 *                       userId:
 *                         type: string
 *                         example: user-123
 *                       action:
 *                         type: string
 *                         example: CONSENT_GRANTED
 *                       purpose:
 *                         type: string
 *                         example: marketing
 *                       metadata:
 *                         nullable: true
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *       400:
 *         description: Missing required query parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: userId is required
 *       500:
 *         description: Internal Server Error
 */
router.get("/", apiKeyAuthMiddleware, validate(fetchAuditLogsSchema, "query"), fetchAuditLogsHandler);

export default router;