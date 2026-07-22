import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";
import {
  generateAccessToken,
  generateRandomToken,
  hashToken,
  INVITATION_EXPIRATION_HOURS,
  REFRESH_TOKEN_EXPIRATION_DAYS,
} from "./jwt.service";
import { InviteUserInput, AcceptInviteInput } from "../validators/team.validator";
import { sendInvitationEmail } from "./email.service";
import { createAuditLog } from "./auditLogs.service";
import { ClientMeta } from "./auth.service";
import {
  recordInvitationAccepted,
  recordSessionCreated,
} from "../platform/services/platform-metrics.service";
import { TenantUserRole } from "../generated";

export async function getTeamMembers(tenantId: string) {
  return prisma.tenantUser.findMany({
    where: { tenantId },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      role: true,
      isActive: true,
      lastLoginAt: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getPendingInvitations(tenantId: string) {
  return prisma.invitation.findMany({
    where: {
      tenantId,
      acceptedAt: null,
      expiresAt: { gt: new Date() },
    },
    select: {
      id: true,
      email: true,
      role: true,
      expiresAt: true,
      createdAt: true,
      createdBy: true,
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function createInvitation(
  tenantId: string,
  createdById: string,
  input: InviteUserInput
) {
  const email = input.email.toLowerCase();

  // Check if user already exists in this tenant
  const existingUser = await prisma.tenantUser.findUnique({
    where: { tenantId_email: { tenantId, email } },
  });

  if (existingUser) {
    const error = new Error("User with this email is already a team member");
    (error as any).statusCode = 409;
    throw error;
  }

  const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
  if (!tenant) {
    const error = new Error("Tenant not found");
    (error as any).statusCode = 404;
    throw error;
  }

  // Delete/invalidate existing pending invitations for this email in this tenant
  await prisma.invitation.deleteMany({
    where: { tenantId, email, acceptedAt: null },
  });

  const rawToken = generateRandomToken();
  const tokenHash = hashToken(rawToken);
  const expiresAt = new Date(Date.now() + INVITATION_EXPIRATION_HOURS * 60 * 60 * 1000);

  const invitation = await prisma.invitation.create({
    data: {
      tenantId,
      email,
      role: input.role as TenantUserRole,
      tokenHash,
      expiresAt,
      createdBy: createdById,
    },
  });

  const inviteLink = `${process.env.APP_BASE_URL || "http://localhost:5173"}/accept-invite?token=${rawToken}`;
  const emailResult = await sendInvitationEmail(
    email,
    rawToken,
    inviteLink,
    tenant.name,
    input.role
  );

  await createAuditLog({
    tenantId,
    userId: createdById,
    action: "INVITATION_CREATED",
    metadata: { email, role: input.role },
  });

  return {
    invitation: {
      id: invitation.id,
      email: invitation.email,
      role: invitation.role,
      expiresAt: invitation.expiresAt,
    },
    inviteToken: emailResult.token || rawToken,
    inviteLink: emailResult.link || inviteLink,
  };
}

export async function resendInvitation(tenantId: string, inviteId: string, createdById: string) {
  const existing = await prisma.invitation.findFirst({
    where: { id: inviteId, tenantId, acceptedAt: null },
    include: { tenant: true },
  });

  if (!existing) {
    const error = new Error("Pending invitation not found");
    (error as any).statusCode = 404;
    throw error;
  }

  // Generate new token & extend expiration (invalidates previous token hash)
  const newRawToken = generateRandomToken();
  const newTokenHash = hashToken(newRawToken);
  const expiresAt = new Date(Date.now() + INVITATION_EXPIRATION_HOURS * 60 * 60 * 1000);

  const updated = await prisma.invitation.update({
    where: { id: inviteId },
    data: {
      tokenHash: newTokenHash,
      expiresAt,
      createdAt: new Date(),
    },
  });

  const inviteLink = `${process.env.APP_BASE_URL || "http://localhost:5173"}/accept-invite?token=${newRawToken}`;
  const emailResult = await sendInvitationEmail(
    updated.email,
    newRawToken,
    inviteLink,
    existing.tenant.name,
    updated.role
  );

  await createAuditLog({
    tenantId,
    userId: createdById,
    action: "INVITATION_RESENT",
    metadata: { email: updated.email, role: updated.role },
  });

  return {
    invitation: {
      id: updated.id,
      email: updated.email,
      role: updated.role,
      expiresAt: updated.expiresAt,
    },
    inviteToken: emailResult.token || newRawToken,
    inviteLink: emailResult.link || inviteLink,
  };
}

export async function revokeInvitation(tenantId: string, inviteId: string, createdById: string) {
  const invitation = await prisma.invitation.findFirst({
    where: { id: inviteId, tenantId, acceptedAt: null },
  });

  if (!invitation) {
    const error = new Error("Pending invitation not found");
    (error as any).statusCode = 404;
    throw error;
  }

  await prisma.invitation.delete({ where: { id: inviteId } });

  await createAuditLog({
    tenantId,
    userId: createdById,
    action: "INVITATION_REVOKED",
    metadata: { email: invitation.email },
  });
}

export async function getInvitationDetailsPublic(rawToken: string) {
  const tokenHash = hashToken(rawToken);
  const invitation = await prisma.invitation.findUnique({
    where: { tokenHash },
    include: { tenant: true },
  });

  if (!invitation) {
    const error = new Error("Invalid or expired invitation token");
    (error as any).statusCode = 404;
    throw error;
  }

  const isExpired = invitation.expiresAt < new Date() || invitation.acceptedAt !== null;

  return {
    email: invitation.email,
    tenantName: invitation.tenant.name,
    role: invitation.role,
    isExpired,
  };
}

export async function acceptInvitation(input: AcceptInviteInput, meta: ClientMeta = {}) {
  const tokenHash = hashToken(input.token);

  const invitation = await prisma.invitation.findUnique({
    where: { tokenHash },
    include: { tenant: true },
  });

  if (!invitation || invitation.acceptedAt !== null || invitation.expiresAt < new Date()) {
    const error = new Error("Invalid, expired, or already accepted invitation token");
    (error as any).statusCode = 400;
    throw error;
  }

  if (!invitation.tenant.isActive || invitation.tenant.status !== "ACTIVE") {
    const error = new Error("Tenant is inactive or suspended");
    (error as any).statusCode = 403;
    throw error;
  }

  const passwordHash = await bcrypt.hash(input.password, 10);
  const rawRefreshToken = generateRandomToken();
  const refreshTokenHash = hashToken(rawRefreshToken);
  const expiresAt = new Date(Date.now() + REFRESH_TOKEN_EXPIRATION_DAYS * 24 * 60 * 60 * 1000);

  const result = await prisma.$transaction(async (tx) => {
    const user = await tx.tenantUser.create({
      data: {
        tenantId: invitation.tenantId,
        email: invitation.email.toLowerCase(),
        passwordHash,
        firstName: input.firstName,
        lastName: input.lastName,
        role: invitation.role,
        isActive: true,
      },
    });

    await tx.invitation.update({
      where: { id: invitation.id },
      data: { acceptedAt: new Date() },
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

    return { user, session };
  });

  const accessToken = generateAccessToken({
    userId: result.user.id,
    tenantId: invitation.tenantId,
    role: result.user.role,
    sessionId: result.session.id,
    email: result.user.email,
  });

  recordInvitationAccepted();
  recordSessionCreated();

  await createAuditLog({
    tenantId: invitation.tenantId,
    userId: result.user.id,
    action: "INVITATION_ACCEPTED",
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
      tenantId: invitation.tenantId,
      tenantName: invitation.tenant.name,
      tenantSlug: invitation.tenant.slug,
    },
  };
}

export async function updateMemberStatus(
  tenantId: string,
  targetUserId: string,
  isActive: boolean,
  actionById: string
) {
  if (targetUserId === actionById) {
    const error = new Error("You cannot update your own active status");
    (error as any).statusCode = 400;
    throw error;
  }

  const target = await prisma.tenantUser.findFirst({
    where: { id: targetUserId, tenantId },
  });

  if (!target) {
    const error = new Error("Team member not found");
    (error as any).statusCode = 404;
    throw error;
  }

  const updated = await prisma.tenantUser.update({
    where: { id: targetUserId },
    data: { isActive },
  });

  // If disabling, revoke all active sessions for that user
  if (!isActive) {
    await prisma.session.updateMany({
      where: { userId: targetUserId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  await createAuditLog({
    tenantId,
    userId: actionById,
    action: isActive ? "USER_ACTIVATED" : "USER_DISABLED",
    metadata: { targetUserId, email: target.email },
  });

  return updated;
}

export async function removeMember(tenantId: string, targetUserId: string, actionById: string) {
  if (targetUserId === actionById) {
    const error = new Error("You cannot remove yourself from the team");
    (error as any).statusCode = 400;
    throw error;
  }

  const target = await prisma.tenantUser.findFirst({
    where: { id: targetUserId, tenantId },
  });

  if (!target) {
    const error = new Error("Team member not found");
    (error as any).statusCode = 404;
    throw error;
  }

  // Prevent removing sole OWNER
  if (target.role === "OWNER") {
    const ownerCount = await prisma.tenantUser.count({
      where: { tenantId, role: "OWNER" },
    });
    if (ownerCount <= 1) {
      const error = new Error("Cannot remove the sole owner of the tenant");
      (error as any).statusCode = 400;
      throw error;
    }
  }

  await prisma.$transaction([
    prisma.session.deleteMany({ where: { userId: targetUserId } }),
    prisma.tenantUser.delete({ where: { id: targetUserId } }),
  ]);

  await createAuditLog({
    tenantId,
    userId: actionById,
    action: "USER_REMOVED",
    metadata: { targetUserId, email: target.email },
  });
}
