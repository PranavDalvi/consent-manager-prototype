import { prisma } from "../db/prisma";

export async function createAuditLog(params: {
  tenantId: string;
  userId?: string;
  action: string;
  purpose?: string;
  metadata?: any;
}) {
  return prisma.auditLog.create({
    data: {
      tenantId: params.tenantId,
      userId: params.userId || "system",
      action: params.action,
      purpose: params.purpose || "system_action",
      metadata: params.metadata ?? null,
    },
  });
}

export async function fetchAuditLogs(
  tenantId: string,
  filters: { userId?: string; action?: string; page?: number; limit?: number }
) {
  const page = Number(filters.page) || 1;
  const limit = Number(filters.limit) || 10;
  const skip = (page - 1) * limit;

  const where: any = { tenantId };
  if (filters.userId) {
    where.userId = { contains: filters.userId, mode: "insensitive" };
  }
  if (filters.action) {
    where.action = filters.action;
  }

  const [total, items] = await Promise.all([
    prisma.auditLog.count({ where }),
    prisma.auditLog.findMany({
      where,
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      skip,
      take: limit,
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