import { prisma } from "../db/prisma";
export async function fetchAuditLogs(userId: string) {
  return prisma.auditLog.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}