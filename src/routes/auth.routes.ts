import { Router } from "express";
import {
  registerHandler,
  loginHandler,
  refreshHandler,
  logoutHandler,
  logoutAllHandler,
  meHandler,
  getSessionsHandler,
  revokeSessionHandler,
  changePasswordHandler,
  forgotPasswordHandler,
  resetPasswordHandler,
  verifyEmailHandler,
} from "../controllers/auth.controller";
import { tenantAuthMiddleware } from "../middlewares/tenant-auth.middleware";

const router = Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Public Tenant & Owner Registration
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [tenantName, slug, email, password]
 *             properties:
 *               tenantName: { type: string, example: "Acme Corp" }
 *               slug: { type: string, example: "acme-corp" }
 *               email: { type: string, example: "owner@acme.com" }
 *               password: { type: string, example: "SuperSecret123!" }
 *               firstName: { type: string, example: "John" }
 *               lastName: { type: string, example: "Doe" }
 *     responses:
 *       201: { description: Tenant and Owner created }
 *       403: { description: Public registration disabled }
 *       409: { description: Tenant slug already taken }
 */
router.post("/register", registerHandler);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Tenant User Login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email: { type: string, example: "owner@acme.com" }
 *               password: { type: string, example: "SuperSecret123!" }
 *               tenantSlug: { type: string, example: "acme-corp" }
 *     responses:
 *       200: { description: Login successful, returns access token & sets HttpOnly refresh cookie }
 *       401: { description: Invalid credentials }
 *       423: { description: Account temporarily locked }
 */
router.post("/login", loginHandler);

/**
 * @swagger
 * /api/auth/refresh:
 *   post:
 *     summary: Rotate Refresh Token Cookie & Issue New Access Token
 *     tags: [Authentication]
 *     responses:
 *       200: { description: Access token issued }
 *       401: { description: Invalid or revoked refresh cookie }
 */
router.post("/refresh", refreshHandler);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Logout Current Device Session
 *     tags: [Authentication]
 *     responses:
 *       200: { description: Logged out }
 */
router.post("/logout", logoutHandler);

/**
 * @swagger
 * /api/auth/logout-all:
 *   post:
 *     summary: Logout All Sessions for Current User
 *     tags: [Authentication]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200: { description: Logged out from all devices }
 */
router.post("/logout-all", tenantAuthMiddleware, logoutAllHandler);

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Get Authenticated User Profile
 *     tags: [Authentication]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200: { description: User details returned }
 */
router.get("/me", tenantAuthMiddleware, meHandler);

/**
 * @swagger
 * /api/auth/sessions:
 *   get:
 *     summary: Get User Active Sessions
 *     tags: [Authentication]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200: { description: List of active sessions }
 */
router.get("/sessions", tenantAuthMiddleware, getSessionsHandler);

/**
 * @swagger
 * /api/auth/sessions/{sessionId}:
 *   delete:
 *     summary: Revoke Specific Session
 *     tags: [Authentication]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Session revoked }
 */
router.delete("/sessions/:sessionId", tenantAuthMiddleware, revokeSessionHandler);

/**
 * @swagger
 * /api/auth/change-password:
 *   post:
 *     summary: Change User Password
 *     tags: [Authentication]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [currentPassword, newPassword]
 *             properties:
 *               currentPassword: { type: string }
 *               newPassword: { type: string }
 *     responses:
 *       200: { description: Password updated }
 */
router.post("/change-password", tenantAuthMiddleware, changePasswordHandler);

/**
 * @swagger
 * /api/auth/forgot-password:
 *   post:
 *     summary: Request Password Reset Link
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email]
 *             properties:
 *               email: { type: string }
 *               tenantSlug: { type: string }
 *     responses:
 *       200: { description: Password reset request accepted }
 */
router.post("/forgot-password", forgotPasswordHandler);

/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     summary: Reset Password using Token
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [token, newPassword]
 *             properties:
 *               token: { type: string }
 *               newPassword: { type: string }
 *     responses:
 *       200: { description: Password reset successfully }
 */
router.post("/reset-password", resetPasswordHandler);

/**
 * @swagger
 * /api/auth/verify-email:
 *   post:
 *     summary: Verify Email Placeholder
 *     tags: [Authentication]
 *     responses:
 *       200: { description: Endpoint placeholder }
 */
router.post("/verify-email", verifyEmailHandler);

export default router;
