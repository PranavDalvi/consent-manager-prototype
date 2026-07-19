import { prisma } from "../db/prisma";
export async function fetchAuditLogs(userId: string, tenantId: string) {
  return prisma.auditLog.findMany({
    where: { userId, tenantId },
    orderBy: [
      { createdAt: "desc" },
      { id: "desc" },
    ],
  });
}