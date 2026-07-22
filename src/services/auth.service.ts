import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";
import {
  generateAccessToken,
  generateRandomToken,
  hashToken,
  REFRESH_TOKEN_EXPIRATION_DAYS,
  PASSWORD_RESET_EXPIRATION_MINUTES,
} from "./jwt.service";
import { RegisterTenantInput, LoginInput } from "../validators/auth.validator";
import { sendPasswordResetEmail } from "./email.service";
import { createAuditLog } from "./auditLogs.service";
import {
  recordLoginSuccess,
  recordLoginFailure,
  recordRegistration,
  recordPasswordReset,
  recordTokenRefresh,
  recordSessionCreated,
  recordSessionRevocation,
} from "../platform/services/platform-metrics.service";

export interface ClientMeta {
  ipAddress?: string;
  userAgent?: string;
  device?: string;
}

export async function registerTenantAndOwner(
  input: RegisterTenantInput,
  meta: ClientMeta = {}
) {
  const allowPublicSignup = process.env.ALLOW_PUBLIC_SIGNUP !== "false";
  if (!allowPublicSignup) {
    const error = new Error("Public tenant registration is disabled on this platform");
    (error as any).statusCode = 403;
    throw error;
  }

  // Check if tenant slug is already taken
  const existingTenant = await prisma.tenant.findUnique({
    where: { slug: input.slug },
  });

  if (existingTenant) {
    const error = new Error("Tenant slug is already taken");
    (error as any).statusCode = 409;
    throw error;
  }

  const passwordHash = await bcrypt.hash(input.password, 10);
  const rawRefreshToken = generateRandomToken();
  const refreshTokenHash = hashToken(rawRefreshToken);
  const expiresAt = new Date(Date.now() + REFRESH_TOKEN_EXPIRATION_DAYS * 24 * 60 * 60 * 1000);

  const result = await prisma.$transaction(async (tx) => {
    const tenant = await tx.tenant.create({
      data: {
        name: input.tenantName,
        slug: input.slug,
        status: "ACTIVE",
        isActive: true,
      },
    });

    const user = await tx.tenantUser.create({
      data: {
        tenantId: tenant.id,
        email: input.email.toLowerCase(),
        passwordHash,
        firstName: input.firstName,
        lastName: input.lastName,
        role: "OWNER",
        isActive: true,
      },
    });

    const session = await tx.session.create({
      data: {
        userId: user.id,
        refreshTokenHash,
        device: meta.device || "Browser",
        ipAddress: meta.ipAddress,
        userAgent: meta.userAgent,
        expiresAt,
      },
    });

    return { tenant, user, session };
  });

  const accessToken = generateAccessToken({
    userId: result.user.id,
    tenantId: result.tenant.id,
    role: result.user.role,
    sessionId: result.session.id,
    email: result.user.email,
  });

  recordRegistration();
  recordSessionCreated();
  await createAuditLog({
    tenantId: result.tenant.id,
    userId: result.user.id,
    action: "USER_REGISTER",
    metadata: { email: result.user.email, role: result.user.role },
  });

  return {
    accessToken,
    refreshToken: rawRefreshToken,
    user: {
      id: result.user.id,
      email: result.user.email,
      firstName: result.user.firstName,
      lastName: result.user.lastName,
      role: result.user.role,
      tenantId: result.tenant.id,
      tenantName: result.tenant.name,
      tenantSlug: result.tenant.slug,
    },
  };
}

export async function loginUser(input: LoginInput, meta: ClientMeta = {}) {
  const email = input.email.toLowerCase();

  // Scope user search by tenantSlug if provided, or find candidate user
  let user;
  if (input.tenantSlug) {
    const tenant = await prisma.tenant.findUnique({
      where: { slug: input.tenantSlug },
    });
    if (!tenant) {
      const error = new Error("Invalid credentials");
      (error as any).statusCode = 401;
      throw error;
    }
    user = await prisma.tenantUser.findUnique({
      where: { tenantId_email: { tenantId: tenant.id, email } },
      include: { tenant: true },
    });
  } else {
    user = await prisma.tenantUser.findFirst({
      where: { email },
      include: { tenant: true },
    });
  }

  if (!user) {
    recordLoginFailure();
    const error = new Error("Invalid credentials");
    (error as any).statusCode = 401;
    throw error;
  }

  if (!user.tenant.isActive || user.tenant.status !== "ACTIVE") {
    recordLoginFailure();
    const error = new Error(`Tenant is ${user.tenant.status.toLowerCase()}`);
    (error as any).statusCode = 403;
    throw error;
  }

  if (!user.isActive) {
    recordLoginFailure();
    const error = new Error("User account is inactive or disabled");
    (error as any).statusCode = 403;
    throw error;
  }

  // Account Lockout check
  if (user.lockedUntil && user.lockedUntil > new Date()) {
    recordLoginFailure();
    const remainingMinutes = Math.ceil((user.lockedUntil.getTime() - Date.now()) / 60000);
    const error = new Error(
      `Account is temporarily locked due to repeated failed logins. Try again in ${remainingMinutes} minute(s).`
    );
    (error as any).statusCode = 423; // Locked
    throw error;
  }

  const isPasswordValid = await bcrypt.compare(input.password, user.passwordHash);

  if (!isPasswordValid) {
    const failedCount = user.failedLogins + 1;
    let lockedUntil: Date | null = null;
    if (failedCount >= 5) {
      lockedUntil = new Date(Date.now() + 15 * 60 * 1000); // 15 min lock
    }

    await prisma.tenantUser.update({
      where: { id: user.id },
      data: {
        failedLogins: failedCount,
        lockedUntil,
      },
    });

    recordLoginFailure();
    const error = new Error("Invalid credentials");
    (error as any).statusCode = 401;
    throw error;
  }

  // Reset failed logins & update lastLoginAt
  await prisma.tenantUser.update({
    where: { id: user.id },
    data: {
      failedLogins: 0,
      lockedUntil: null,
      lastLoginAt: new Date(),
    },
  });

  const rawRefreshToken = generateRandomToken();
  const refreshTokenHash = hashToken(rawRefreshToken);
  const expiresAt = new Date(Date.now() + REFRESH_TOKEN_EXPIRATION_DAYS * 24 * 60 * 60 * 1000);

  const session = await prisma.session.create({
    data: {
      userId: user.id,
      refreshTokenHash,
      device: meta.device || "Browser",
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      expiresAt,
    },
  });

  const accessToken = generateAccessToken({
    userId: user.id,
    tenantId: user.tenantId,
    role: user.role,
    sessionId: session.id,
    email: user.email,
  });

  recordLoginSuccess();
  recordSessionCreated();
  await createAuditLog({
    tenantId: user.tenantId,
    userId: user.id,
    action: "USER_LOGIN",
    metadata: { ipAddress: meta.ipAddress },
  });

  return {
    accessToken,
    refreshToken: rawRefreshToken,
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      tenantId: user.tenantId,
      tenantName: user.tenant.name,
      tenantSlug: user.tenant.slug,
    },
  };
}

export async function refreshUserToken(rawRefreshToken: string, meta: ClientMeta = {}) {
  if (!rawRefreshToken) {
    const error = new Error("Refresh token missing");
    (error as any).statusCode = 401;
    throw error;
  }

  const tokenHash = hashToken(rawRefreshToken);

  const session = await prisma.session.findUnique({
    where: { refreshTokenHash: tokenHash },
    include: { user: { include: { tenant: true } } },
  });

  // Token Theft Detection: If session is already revoked, revoke ALL user sessions!
  if (!session || session.revokedAt) {
    if (session) {
      await prisma.session.updateMany({
        where: { userId: session.userId, revokedAt: null },
        data: { revokedAt: new Date() },
      });
      recordSessionRevocation();
    }
    const error = new Error("Invalid or revoked refresh token");
    (error as any).statusCode = 401;
    throw error;
  }

  if (session.expiresAt < new Date()) {
    const error = new Error("Refresh token expired");
    (error as any).statusCode = 401;
    throw error;
  }

  if (!session.user.isActive || !session.user.tenant.isActive || session.user.tenant.status !== "ACTIVE") {
    const error = new Error("Account or tenant is inactive");
    (error as any).statusCode = 403;
    throw error;
  }

  // Rotate token: create new session and mark previous session revoked & replaced
  const newRawRefreshToken = generateRandomToken();
  const newRefreshTokenHash = hashToken(newRawRefreshToken);
  const expiresAt = new Date(Date.now() + REFRESH_TOKEN_EXPIRATION_DAYS * 24 * 60 * 60 * 1000);

  const newSession = await prisma.session.create({
    data: {
      userId: session.userId,
      refreshTokenHash: newRefreshTokenHash,
      device: meta.device || session.device,
      ipAddress: meta.ipAddress || session.ipAddress,
      userAgent: meta.userAgent || session.userAgent,
      expiresAt,
    },
  });

  await prisma.session.update({
    where: { id: session.id },
    data: {
      revokedAt: new Date(),
      replacedBy: newSession.id,
      lastUsedAt: new Date(),
    },
  });

  const accessToken = generateAccessToken({
    userId: session.user.id,
    tenantId: session.user.tenantId,
    role: session.user.role,
    sessionId: newSession.id,
    email: session.user.email,
  });

  recordTokenRefresh();
  recordSessionCreated();

  return {
    accessToken,
    refreshToken: newRawRefreshToken,
    user: {
      id: session.user.id,
      email: session.user.email,
      firstName: session.user.firstName,
      lastName: session.user.lastName,
      role: session.user.role,
      tenantId: session.user.tenantId,
      tenantName: session.user.tenant.name,
      tenantSlug: session.user.tenant.slug,
    },
  };
}

export async function logoutUser(rawRefreshToken: string, tenantId?: string, userId?: string) {
  if (rawRefreshToken) {
    const tokenHash = hashToken(rawRefreshToken);
    const session = await prisma.session.findUnique({
      where: { refreshTokenHash: tokenHash },
    });

    if (session) {
      await prisma.session.update({
        where: { id: session.id },
        data: { revokedAt: new Date() },
      });
      recordSessionRevocation();
      if (tenantId && userId) {
        await createAuditLog({
          tenantId,
          userId,
          action: "USER_LOGOUT",
        });
      }
    }
  }
}

export async function logoutAllSessions(userId: string, tenantId: string) {
  await prisma.session.updateMany({
    where: { userId, revokedAt: null },
    data: { revokedAt: new Date() },
  });
  recordSessionRevocation();
  await createAuditLog({
    tenantId,
    userId,
    action: "USER_LOGOUT_ALL",
  });
}

export async function getUserSessions(userId: string) {
  return prisma.session.findMany({
    where: { userId, revokedAt: null, expiresAt: { gt: new Date() } },
    select: {
      id: true,
      device: true,
      ipAddress: true,
      userAgent: true,
      lastUsedAt: true,
      createdAt: true,
    },
    orderBy: { lastUsedAt: "desc" },
  });
}

export async function revokeSpecificSession(userId: string, sessionId: string, tenantId: string) {
  const session = await prisma.session.findFirst({
    where: { id: sessionId, userId, revokedAt: null },
  });

  if (!session) {
    const error = new Error("Session not found or already revoked");
    (error as any).statusCode = 404;
    throw error;
  }

  await prisma.session.update({
    where: { id: sessionId },
    data: { revokedAt: new Date() },
  });

  recordSessionRevocation();
  await createAuditLog({
    tenantId,
    userId,
    action: "SESSION_REVOKED",
    metadata: { sessionId },
  });
}

export async function changePassword(
  userId: string,
  tenantId: string,
  currentPassword: string,
  newPassword: string,
  meta: ClientMeta = {}
) {
  const user = await prisma.tenantUser.findUnique({
    where: { id: userId },
    include: { tenant: true },
  });

  if (!user) {
    const error = new Error("User not found");
    (error as any).statusCode = 404;
    throw error;
  }

  const isPasswordValid = await bcrypt.compare(currentPassword, user.passwordHash);
  if (!isPasswordValid) {
    const error = new Error("Current password is incorrect");
    (error as any).statusCode = 400;
    throw error;
  }

  const newPasswordHash = await bcrypt.hash(newPassword, 10);

  // Update password & revoke ALL existing sessions for security
  await prisma.$transaction([
    prisma.tenantUser.update({
      where: { id: userId },
      data: { passwordHash: newPasswordHash },
    }),
    prisma.session.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() },
    }),
  ]);

  recordSessionRevocation();

  // Create a fresh session for the user
  const rawRefreshToken = generateRandomToken();
  const refreshTokenHash = hashToken(rawRefreshToken);
  const expiresAt = new Date(Date.now() + REFRESH_TOKEN_EXPIRATION_DAYS * 24 * 60 * 60 * 1000);

  const session = await prisma.session.create({
    data: {
      userId: user.id,
      refreshTokenHash,
      device: meta.device || "Browser",
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
      expiresAt,
    },
  });

  const accessToken = generateAccessToken({
    userId: user.id,
    tenantId: user.tenantId,
    role: user.role,
    sessionId: session.id,
    email: user.email,
  });

  await createAuditLog({
    tenantId,
    userId,
    action: "PASSWORD_CHANGE",
  });

  return { accessToken, refreshToken: rawRefreshToken };
}

export async function forgotPassword(emailInput: string, tenantSlug?: string) {
  const email = emailInput.toLowerCase();

  let user;
  if (tenantSlug) {
    const tenant = await prisma.tenant.findUnique({ where: { slug: tenantSlug } });
    if (tenant) {
      user = await prisma.tenantUser.findUnique({
        where: { tenantId_email: { tenantId: tenant.id, email } },
        include: { tenant: true },
      });
    }
  } else {
    user = await prisma.tenantUser.findFirst({
      where: { email },
      include: { tenant: true },
    });
  }

  if (!user) {
    // For security, do not disclose whether email exists
    return { sent: true };
  }

  const rawToken = generateRandomToken();
  const tokenHash = hashToken(rawToken);
  const expiresAt = new Date(Date.now() + PASSWORD_RESET_EXPIRATION_MINUTES * 60 * 1000);

  await prisma.passwordResetToken.create({
    data: {
      userId: user.id,
      tokenHash,
      expiresAt,
    },
  });

  const resetLink = `${process.env.APP_BASE_URL || "http://localhost:5173"}/reset-password?token=${rawToken}`;
  const result = await sendPasswordResetEmail(user.email, rawToken, resetLink);

  await createAuditLog({
    tenantId: user.tenantId,
    userId: user.id,
    action: "PASSWORD_RESET_REQUESTED",
  });

  return result;
}

export async function resetPassword(rawToken: string, newPassword: string) {
  const tokenHash = hashToken(rawToken);

  const resetRecord = await prisma.passwordResetToken.findUnique({
    where: { tokenHash },
    include: { user: true },
  });

  if (!resetRecord || resetRecord.usedAt || resetRecord.expiresAt < new Date()) {
    const error = new Error("Invalid or expired password reset token");
    (error as any).statusCode = 400;
    throw error;
  }

  const newPasswordHash = await bcrypt.hash(newPassword, 10);

  await prisma.$transaction([
    prisma.tenantUser.update({
      where: { id: resetRecord.userId },
      data: { passwordHash: newPasswordHash, failedLogins: 0, lockedUntil: null },
    }),
    prisma.passwordResetToken.update({
      where: { id: resetRecord.id },
      data: { usedAt: new Date() },
    }),
    // Revoke ALL user sessions for security
    prisma.session.updateMany({
      where: { userId: resetRecord.userId, revokedAt: null },
      data: { revokedAt: new Date() },
    }),
  ]);

  recordPasswordReset();
  recordSessionRevocation();

  await createAuditLog({
    tenantId: resetRecord.user.tenantId,
    userId: resetRecord.userId,
    action: "PASSWORD_RESET",
  });

  return { success: true };
}
