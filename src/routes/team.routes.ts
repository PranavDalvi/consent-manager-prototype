import { Router } from "express";
import {
  getMembersHandler,
  getInvitationsHandler,
  inviteUserHandler,
  resendInvitationHandler,
  revokeInvitationHandler,
  getPublicInvitationHandler,
  acceptInviteHandler,
  updateMemberStatusHandler,
  removeMemberHandler,
} from "../controllers/team.controller";
import { tenantAuthMiddleware } from "../middlewares/tenant-auth.middleware";
import { requireRole } from "../middlewares/role-auth.middleware";

const router = Router();

/**
 * @swagger
 * /api/team/members:
 *   get:
 *     summary: Get Team Members of Current Tenant
 *     tags: [Team Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200: { description: List of team members }
 */
router.get("/members", tenantAuthMiddleware, requireRole("OWNER", "ADMIN"), getMembersHandler);

/**
 * @swagger
 * /api/team/invites:
 *   get:
 *     summary: Get Pending Team Invitations
 *     tags: [Team Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200: { description: List of pending invitations }
 *   post:
 *     summary: Invite User to Team
 *     tags: [Team Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email]
 *             properties:
 *               email: { type: string, example: "dev@acme.com" }
 *               role: { type: string, enum: [OWNER, ADMIN, DEVELOPER, VIEWER], example: "DEVELOPER" }
 *     responses:
 *       201: { description: Invitation created }
 *       409: { description: User already a team member }
 */
router.get("/invites", tenantAuthMiddleware, requireRole("OWNER", "ADMIN"), getInvitationsHandler);
router.post("/invites", tenantAuthMiddleware, requireRole("OWNER", "ADMIN"), inviteUserHandler);

/**
 * @swagger
 * /api/team/invites/{inviteId}/resend:
 *   post:
 *     summary: Resend / Renew Pending Invitation
 *     tags: [Team Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: inviteId
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Invitation resent }
 */
router.post("/invites/:inviteId/resend", tenantAuthMiddleware, requireRole("OWNER", "ADMIN"), resendInvitationHandler);

/**
 * @swagger
 * /api/team/invites/{inviteId}:
 *   delete:
 *     summary: Revoke Pending Invitation
 *     tags: [Team Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: inviteId
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Invitation revoked }
 */
router.delete("/invites/:inviteId", tenantAuthMiddleware, requireRole("OWNER", "ADMIN"), revokeInvitationHandler);

/**
 * @swagger
 * /api/team/invites/public/{token}:
 *   get:
 *     summary: Validate & Preview Public Invitation Token
 *     tags: [Team Management]
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Invitation details returned }
 *       404: { description: Invalid or expired invitation token }
 */
router.get("/invites/public/:token", getPublicInvitationHandler);

/**
 * @swagger
 * /api/team/invites/accept:
 *   post:
 *     summary: Accept Invitation & Create Account
 *     tags: [Team Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [token, password]
 *             properties:
 *               token: { type: string }
 *               password: { type: string }
 *               firstName: { type: string }
 *               lastName: { type: string }
 *     responses:
 *       201: { description: Account created and invitation accepted }
 *       400: { description: Invalid or expired token }
 */
router.post("/invites/accept", acceptInviteHandler);

/**
 * @swagger
 * /api/team/members/{userId}/status:
 *   patch:
 *     summary: Enable or Disable Team Member
 *     tags: [Team Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [isActive]
 *             properties:
 *               isActive: { type: boolean }
 *     responses:
 *       200: { description: Status updated }
 */
router.patch("/members/:userId/status", tenantAuthMiddleware, requireRole("OWNER", "ADMIN"), updateMemberStatusHandler);

/**
 * @swagger
 * /api/team/members/{userId}:
 *   delete:
 *     summary: Remove Team Member
 *     tags: [Team Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Team member removed }
 */
router.delete("/members/:userId", tenantAuthMiddleware, requireRole("OWNER"), removeMemberHandler);

export default router;
