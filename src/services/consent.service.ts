import { ConsentStatus } from "../generated";
import { prisma } from "../db/prisma";
import { AppError } from "../utils/app-error";

export async function grantConsent(
  tenantId: string,
  userId: string,
  policyId: string
) {
  return prisma.$transaction(async (tx) => {
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

    return consent;
  });
}

export async function fetchUserConsents(userId: string, tenantId: string) {
  return prisma.consent.findMany({
    where: { userId, tenantId, status: ConsentStatus.GRANTED },
    orderBy: { createdAt: "desc" },
  });
}

export async function revokeConsent(consentId: string) {
  return prisma.$transaction(async (tx) => {
    const consent = await tx.consent.findUnique({
      where: { id: consentId },
    });

    if (!consent) {
      throw new Error("Consent not found");
    }

    if (consent.status === ConsentStatus.REVOKED) {
      return consent;
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

    return revokedConsent;
  });
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
