import { Request, Response, NextFunction } from "express";
import {
  registerTenantSchema,
  loginSchema,
  changePasswordSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} from "../validators/auth.validator";
import {
  registerTenantAndOwner,
  loginUser,
  refreshUserToken,
  logoutUser,
  logoutAllSessions,
  getUserSessions,
  revokeSpecificSession,
  changePassword,
  forgotPassword,
  resetPassword,
} from "../services/auth.service";
import { setRefreshTokenCookie, clearRefreshTokenCookie } from "../services/jwt.service";
import { prisma } from "../lib/prisma";

export async function registerHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const input = registerTenantSchema.parse(req.body);
    const meta = {
      ipAddress: req.ip,
      userAgent: req.get("user-agent"),
    };

    const result = await registerTenantAndOwner(input, meta);
    setRefreshTokenCookie(res, result.refreshToken);

    res.status(201).json({
      success: true,
      message: "Tenant and Owner account registered successfully",
      accessToken: result.accessToken,
      user: result.user,
    });
  } catch (error) {
    next(error);
  }
}

export async function loginHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const input = loginSchema.parse(req.body);
    const meta = {
      ipAddress: req.ip,
      userAgent: req.get("user-agent"),
    };

    const result = await loginUser(input, meta);
    setRefreshTokenCookie(res, result.refreshToken);

    res.json({
      success: true,
      message: "Login successful",
      accessToken: result.accessToken,
      user: result.user,
    });
  } catch (error) {
    next(error);
  }
}

export async function refreshHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const rawRefreshToken = req.cookies?.refreshToken;
    if (!rawRefreshToken) {
      res.status(401).json({
        success: false,
        message: "Refresh token cookie missing",
      });
      return;
    }

    const meta = {
      ipAddress: req.ip,
      userAgent: req.get("user-agent"),
    };

    const result = await refreshUserToken(rawRefreshToken, meta);
    setRefreshTokenCookie(res, result.refreshToken);

    res.json({
      success: true,
      accessToken: result.accessToken,
      user: result.user,
    });
  } catch (error) {
    clearRefreshTokenCookie(res);
    next(error);
  }
}

export async function logoutHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const rawRefreshToken = req.cookies?.refreshToken;
    const tenantId = req.auth?.tenantId;
    const userId = req.auth?.userId;

    if (rawRefreshToken) {
      await logoutUser(rawRefreshToken, tenantId, userId);
    }
    clearRefreshTokenCookie(res);

    res.json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    clearRefreshTokenCookie(res);
    next(error);
  }
}

export async function logoutAllHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.auth?.userId;
    const tenantId = req.auth?.tenantId;

    if (!userId || !tenantId) {
      res.status(401).json({ success: false, message: "User context missing" });
      return;
    }

    await logoutAllSessions(userId, tenantId);
    clearRefreshTokenCookie(res);

    res.json({
      success: true,
      message: "Logged out from all devices",
    });
  } catch (error) {
    next(error);
  }
}

export async function meHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.auth?.userId;
    const tenantId = req.auth?.tenantId;

    if (!userId || !tenantId) {
      res.status(401).json({ success: false, message: "User context missing" });
      return;
    }

    const user = await prisma.tenantUser.findUnique({
      where: { id: userId },
      include: { tenant: true },
    });

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    res.json({
      success: true,
      data: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        isActive: user.isActive,
        lastLoginAt: user.lastLoginAt,
        tenant: {
          id: user.tenant.id,
          name: user.tenant.name,
          slug: user.tenant.slug,
          status: user.tenant.status,
        },
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function getSessionsHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.auth?.userId;
    if (!userId) {
      res.status(401).json({ success: false, message: "User context missing" });
      return;
    }

    const sessions = await getUserSessions(userId);
    res.json({
      success: true,
      data: sessions,
      currentSessionId: req.auth?.sessionId,
    });
  } catch (error) {
    next(error);
  }
}

export async function revokeSessionHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.auth?.userId;
    const tenantId = req.auth?.tenantId;
    const { sessionId } = req.params;

    if (!userId || !tenantId || !sessionId) {
      res.status(400).json({ success: false, message: "Session ID required" });
      return;
    }

    await revokeSpecificSession(userId, sessionId as string, tenantId);

    // If revoking current session, clear cookie
    if (sessionId === req.auth?.sessionId) {
      clearRefreshTokenCookie(res);
    }

    res.json({
      success: true,
      message: "Session revoked successfully",
    });
  } catch (error) {
    next(error);
  }
}

export async function changePasswordHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.auth?.userId;
    const tenantId = req.auth?.tenantId;
    if (!userId || !tenantId) {
      res.status(401).json({ success: false, message: "User context missing" });
      return;
    }

    const input = changePasswordSchema.parse(req.body);
    const meta = { ipAddress: req.ip, userAgent: req.get("user-agent") };

    const result = await changePassword(userId, tenantId, input.currentPassword, input.newPassword, meta);
    setRefreshTokenCookie(res, result.refreshToken);

    res.json({
      success: true,
      message: "Password changed successfully. All other sessions have been logged out.",
      accessToken: result.accessToken,
    });
  } catch (error) {
    next(error);
  }
}

export async function forgotPasswordHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const input = forgotPasswordSchema.parse(req.body);
    const result = await forgotPassword(input.email, input.tenantSlug);

    res.json({
      success: true,
      message: "If an account with that email exists, a password reset link has been issued.",
      ...(result.token ? { devResetToken: result.token, devResetLink: result.link } : {}),
    });
  } catch (error) {
    next(error);
  }
}

export async function resetPasswordHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const input = resetPasswordSchema.parse(req.body);
    await resetPassword(input.token, input.newPassword);
    clearRefreshTokenCookie(res);

    res.json({
      success: true,
      message: "Password reset successfully. Please log in with your new password.",
    });
  } catch (error) {
    next(error);
  }
}

export async function verifyEmailHandler(req: Request, res: Response): Promise<void> {
  res.json({
    success: true,
    message: "Email verification endpoint placeholder. Email verification will be enabled in a future release.",
  });
}
