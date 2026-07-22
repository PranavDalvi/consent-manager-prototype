import { prisma } from "../../lib/prisma";
import { generateRandomToken, hashToken, INVITATION_EXPIRATION_HOURS } from "../../services/jwt.service";
import { sendInvitationEmail } from "../../services/email.service";
import { createAuditLog } from "../../services/auditLogs.service";
import { TenantStatus } from "../../generated";

export interface CreatePlatformTenantInput {
  name: string;
  slug: string;
  ownerEmail: string;
  ownerFirstName?: string;
  ownerLastName?: string;
}

export async function createPlatformTenant(input: CreatePlatformTenantInput, superAdminId: string) {
  const existingSlug = await prisma.tenant.findUnique({
    where: { slug: input.slug },
  });

  if (existingSlug) {
    const error = new Error("Tenant slug is already taken");
    (error as any).statusCode = 409;
    throw error;
  }

  const rawToken = generateRandomToken();
  const tokenHash = hashToken(rawToken);
  const expiresAt = new Date(Date.now() + INVITATION_EXPIRATION_HOURS * 60 * 60 * 1000);

  const result = await prisma.$transaction(async (tx) => {
    const tenant = await tx.tenant.create({
      data: {
        name: input.name,
        slug: input.slug,
        status: "ACTIVE",
        isActive: true,
      },
    });

    const invitation = await tx.invitation.create({
      data: {
        tenantId: tenant.id,
        email: input.ownerEmail.toLowerCase(),
        role: "OWNER",
        tokenHash,
        expiresAt,
        createdBy: superAdminId,
      },
    });

    return { tenant, invitation };
  });

  const inviteLink = `${process.env.APP_BASE_URL || "http://localhost:5173"}/accept-invite?token=${rawToken}`;
  const emailResult = await sendInvitationEmail(
    input.ownerEmail,
    rawToken,
    inviteLink,
    result.tenant.name,
    "OWNER"
  );

  return {
    tenant: result.tenant,
    ownerInviteToken: emailResult.token || rawToken,
    ownerInviteLink: emailResult.link || inviteLink,
  };
}

export async function listPlatformTenants(search?: string, status?: string) {
  const where: any = {};
  if (status) {
    where.status = status as TenantStatus;
  }
  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { slug: { contains: search, mode: "insensitive" } },
    ];
  }

  const tenants = await prisma.tenant.findMany({
    where,
    include: {
      _count: {
        select: {
          users: true,
          policies: true,
          consents: true,
          apiKeys: true,
          webhooks: true,
        },
      },
      users: {
        where: { role: "OWNER" },
        take: 1,
        select: { email: true, firstName: true, lastName: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return tenants.map((t) => ({
    id: t.id,
    name: t.name,
    slug: t.slug,
    status: t.status,
    isActive: t.isActive,
    createdAt: t.createdAt,
    updatedAt: t.updatedAt,
    owner: t.users[0] || null,
    metrics: {
      usersCount: t._count.users,
      policiesCount: t._count.policies,
      consentsCount: t._count.consents,
      apiKeysCount: t._count.apiKeys,
      webhooksCount: t._count.webhooks,
    },
  }));
}

export async function getPlatformTenantDetails(tenantId: string) {
  const tenant = await prisma.tenant.findUnique({
    where: { id: tenantId },
    include: {
      _count: {
        select: {
          users: true,
          policies: true,
          consents: true,
          apiKeys: true,
          webhooks: true,
        },
      },
      users: {
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
      },
      invitations: {
        where: { acceptedAt: null, expiresAt: { gt: new Date() } },
        select: {
          id: true,
          email: true,
          role: true,
          expiresAt: true,
          createdAt: true,
        },
      },
    },
  });

  if (!tenant) {
    const error = new Error("Tenant not found");
    (error as any).statusCode = 404;
    throw error;
  }

  return tenant;
}

export async function updatePlatformTenant(
  tenantId: string,
  data: { name?: string; slug?: string }
) {
  const existing = await prisma.tenant.findUnique({ where: { id: tenantId } });
  if (!existing) {
    const error = new Error("Tenant not found");
    (error as any).statusCode = 404;
    throw error;
  }

  if (data.slug && data.slug !== existing.slug) {
    const slugCheck = await prisma.tenant.findUnique({ where: { slug: data.slug } });
    if (slugCheck) {
      const error = new Error("Tenant slug is already taken");
      (error as any).statusCode = 409;
      throw error;
    }
  }

  return prisma.tenant.update({
    where: { id: tenantId },
    data,
  });
}

export async function updatePlatformTenantStatus(tenantId: string, status: TenantStatus) {
  const existing = await prisma.tenant.findUnique({ where: { id: tenantId } });
  if (!existing) {
    const error = new Error("Tenant not found");
    (error as any).statusCode = 404;
    throw error;
  }

  const isActive = status === "ACTIVE";

  const updated = await prisma.tenant.update({
    where: { id: tenantId },
    data: { status, isActive },
  });

  // If suspended, archived, or deleted, revoke all active user sessions for this tenant
  if (!isActive) {
    const users = await prisma.tenantUser.findMany({
      where: { tenantId },
      select: { id: true },
    });
    const userIds = users.map((u) => u.id);
    if (userIds.length > 0) {
      await prisma.session.updateMany({
        where: { userId: { in: userIds }, revokedAt: null },
        data: { revokedAt: new Date() },
      });
    }
  }

  return updated;
}

export async function softDeletePlatformTenant(tenantId: string) {
  return updatePlatformTenantStatus(tenantId, "DELETED");
}
