import { ConsentStatus } from "@prisma/client";
import { prisma } from "../db/prisma";

export async function grantConsent(
  userId: string,
  tenantId: string,
  purpose: string,
  policyVersion: string
) {
  return prisma.$transaction(async (tx) => {
    const consent = await tx.consent.create({
      data: {
        userId,
        tenantId,
        purpose,
        policyVersion,
        status: ConsentStatus.GRANTED,
      },
    });

    await tx.auditLog.create({
      data: {
        userId,
        tenantId,
        action: "CONSENT_GRANTED",
        purpose,
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
    const consent = await tx.consent.update({
      where: { id: consentId },
      data: { status: ConsentStatus.REVOKED },
    });

    await tx.auditLog.create({
      data: {
        userId: consent.userId,
        tenantId: consent.tenantId,
        action: "CONSENT_REVOKED",
        purpose: consent.purpose,
      },
    });

    return consent;
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
