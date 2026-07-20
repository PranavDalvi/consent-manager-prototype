import { ConsentStatus } from "../generated";
import { prisma } from "../db/prisma";
import { AppError } from "../utils/app-error";
import { createInternalEvent, enqueueInternalEventDelivery } from "../events/internal-event.publisher";

export async function grantConsent(
  tenantId: string,
  userId: string,
  policyId: string
) {
  const result = await prisma.$transaction(async (tx) => {
    const policy = await tx.policy.findUnique({ where: { id: policyId } });
    if (!policy || policy.tenantId !== tenantId) {
      throw new AppError(404, "Policy not found");
    }
    if (!policy.isActive) {
      throw new AppError(400, "Policy is archived");
    }

    const consent = await tx.consent.upsert({
      where: {
        tenantId_userId_purpose: {
          tenantId,
          userId,
          purpose: policy.purpose,
        },
      },
      update: {
        status: ConsentStatus.GRANTED,
        policyId: policy.id,
        policyVersion: policy.version,
      },
      create: {
        tenantId,
        userId,
        policyId: policy.id,
        purpose: policy.purpose,
        policyVersion: policy.version,
        status: ConsentStatus.GRANTED,
      },
    });

    await tx.auditLog.create({
      data: {
        tenantId,
        userId,
        action: "CONSENT_GRANTED",
        purpose: policy.purpose,
      },
    });

    const event = await createInternalEvent(tx, {
      tenantId,
      type: "CONSENT_GRANTED",
      payload: {
        consent,
        policy: {
          id: policy.id,
          purpose: policy.purpose,
          version: policy.version,
        },
      },
    });

    return { consent, eventId: event.id };
  });

  void enqueueInternalEventDelivery(result.eventId);

  return result.consent;
}

export async function fetchUserConsents(userId: string, tenantId: string) {
  return prisma.consent.findMany({
    where: { userId, tenantId, status: ConsentStatus.GRANTED },
    orderBy: { createdAt: "desc" },
  });
}

export async function listConsents(
  tenantId: string,
  filters: { userId?: string; purpose?: string; status?: ConsentStatus; page?: number; limit?: number }
) {
  const page = Number(filters.page) || 1;
  const limit = Number(filters.limit) || 10;
  const skip = (page - 1) * limit;

  const where: any = { tenantId };
  if (filters.userId) {
    where.userId = { contains: filters.userId, mode: "insensitive" };
  }
  if (filters.purpose) {
    where.purpose = filters.purpose;
  }
  if (filters.status) {
    where.status = filters.status;
  }

  const [total, items] = await Promise.all([
    prisma.consent.count({ where }),
    prisma.consent.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
      include: {
        policy: true,
      },
    }),
  ]);

  return {
    items,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
}

export async function revokeConsent(consentId: string) {
  const result = await prisma.$transaction(async (tx) => {
    const consent = await tx.consent.findUnique({
      where: { id: consentId },
    });

    if (!consent) {
      throw new Error("Consent not found");
    }

    if (consent.status === ConsentStatus.REVOKED) {
      return { consent, eventId: null as string | null };
    }

    const revokedConsent = await tx.consent.update({
      where: { id: consentId },
      data: { status: ConsentStatus.REVOKED },
    });

    await tx.auditLog.create({
      data: {
        userId: revokedConsent.userId,
        tenantId: revokedConsent.tenantId,
        action: "CONSENT_REVOKED",
        purpose: revokedConsent.purpose,
      },
    });

    const event = await createInternalEvent(tx, {
      tenantId: revokedConsent.tenantId,
      type: "CONSENT_REVOKED",
      payload: {
        consent: revokedConsent,
      },
    });

    return { consent: revokedConsent, eventId: event.id };
  });

  if (result.eventId) {
    void enqueueInternalEventDelivery(result.eventId);
  }

  return result.consent;
}

export async function checkConsent(
    userId: string,
    purpose: string,
    tenantId: string
) {
    const consent = await prisma.consent.findFirst({
        where: {
            userId,
            tenantId,
            purpose,
            status: ConsentStatus.GRANTED
        }
    });
    return !!consent;
}
