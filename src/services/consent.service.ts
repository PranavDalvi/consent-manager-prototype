import { ConsentStatus } from "@prisma/client";
import { prisma } from "../db/prisma";

export async function grantConsent(
  userId: string,
  purpose: string,
  policyVersion: string
) {
  return prisma.$transaction(async (tx) => {
    const consent = await tx.consent.create({
      data: {
        userId,
        purpose,
        policyVersion,
        status: ConsentStatus.GRANTED,
      },
    });

    await tx.auditLog.create({
      data: {
        userId,
        action: "CONSENT_GRANTED",
        purpose,
      },
    });

    return consent;
  });
}

export async function fetchUserConsents(userId: string) {
  return prisma.consent.findMany({
    where: { userId, status: ConsentStatus.GRANTED },
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
) {
    const consent = await prisma.consent.findFirst({
        where: {
            userId,
            purpose,
            status: ConsentStatus.GRANTED
        }
    });
    return !!consent;
}
