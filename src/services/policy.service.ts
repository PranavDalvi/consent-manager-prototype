import { prisma } from "../db/prisma";
import { AppError } from "../utils/app-error";
import { createInternalEvent, enqueueInternalEventDelivery } from "../events/internal-event.publisher";

function requireTenantId(tenantId?: string): string {
  if (!tenantId) {
    throw new AppError(400, "Authenticated tenant is required");
  }

  return tenantId;
}

function requirePolicyOwnership(policy: { tenantId: string }, tenantId: string): void {
  if (policy.tenantId !== tenantId) {
    throw new AppError(404, "Policy not found");
  }
}

export async function createPolicy(input: {
  tenantId?: string;
  title: string;
  purpose: string;
  version: number;
  content: string;
}) {
  const tenantId = requireTenantId(input.tenantId);

  const policy = await prisma.policy.create({
    data: {
      tenantId,
      title: input.title,
      purpose: input.purpose,
      version: input.version,
      content: input.content,
      isActive: true,
    },
  });

  const event = await prisma.$transaction(async (tx) => {
    return createInternalEvent(tx, {
      tenantId,
      type: "POLICY_CREATED",
      payload: { policy },
    });
  });

  void enqueueInternalEventDelivery(event.id);

  return policy;
}

export async function listPolicies(tenantId?: string) {
  const resolvedTenantId = requireTenantId(tenantId);

  return prisma.policy.findMany({
    where: { tenantId: resolvedTenantId },
    orderBy: [{ purpose: "asc" }, { version: "desc" }, { id: "asc" }],
  });
}

export async function getPolicy(tenantId?: string, id?: string) {
  const resolvedTenantId = requireTenantId(tenantId);
  if (!id) throw new AppError(400, "id is required");

  const policy = await prisma.policy.findUnique({ where: { id } });
  if (!policy) throw new AppError(404, "Policy not found");
  requirePolicyOwnership(policy, resolvedTenantId);
  return policy;
}

export async function archivePolicy(tenantId?: string, id?: string) {
  const resolvedTenantId = requireTenantId(tenantId);
  if (!id) throw new AppError(400, "id is required");

  const policy = await prisma.policy.findUnique({ where: { id } });
  if (!policy) throw new AppError(404, "Policy not found");
  requirePolicyOwnership(policy, resolvedTenantId);

  if (!policy.isActive) return policy;

  const archived = await prisma.policy.update({ where: { id }, data: { isActive: false } });
  const event = await prisma.$transaction(async (tx) => {
    return createInternalEvent(tx, {
      tenantId: resolvedTenantId,
      type: "POLICY_ARCHIVED",
      payload: { policy: archived },
    });
  });

  void enqueueInternalEventDelivery(event.id);

  return archived;
}

export async function createPolicyVersion(tenantId?: string, id?: string, content?: string) {
  const resolvedTenantId = requireTenantId(tenantId);
  if (!id) throw new AppError(400, "id is required");
  if (!content) throw new AppError(400, "content is required");

  const current = await prisma.policy.findUnique({ where: { id } });
  if (!current) throw new AppError(404, "Policy not found");
  requirePolicyOwnership(current, resolvedTenantId);

  const normalizedContent = content;

  const result = await prisma.$transaction(async (tx) => {
    const latest = await tx.policy.findFirst({
      where: { tenantId: resolvedTenantId, purpose: current.purpose },
      orderBy: [{ version: "desc" }, { createdAt: "desc" }],
    });

    const nextVersion = (latest?.version ?? current.version) + 1;

    const created = await tx.policy.create({
      data: {
        tenantId: resolvedTenantId,
        title: current.title,
        purpose: current.purpose,
        version: nextVersion,
        content: normalizedContent,
        isActive: true,
      },
    });

    const event = await createInternalEvent(tx, {
      tenantId: resolvedTenantId,
      type: "POLICY_VERSION_CREATED",
      payload: { policy: created, basePolicyId: current.id },
    });

    return { policy: created, eventId: event.id };
  });

  void enqueueInternalEventDelivery(result.eventId);

  return result.policy;
}

export async function listPolicyVersions(tenantId?: string, id?: string) {
  const resolvedTenantId = requireTenantId(tenantId);
  if (!id) throw new AppError(400, "id is required");

  const policy = await prisma.policy.findUnique({ where: { id } });
  if (!policy) throw new AppError(404, "Policy not found");
  requirePolicyOwnership(policy, resolvedTenantId);

  return prisma.policy.findMany({
    where: { tenantId: resolvedTenantId, purpose: policy.purpose },
    orderBy: [{ version: "asc" }, { createdAt: "asc" }],
  });
}

export async function findActivePolicyForConsent(tenantId: string, policyId: string) {
  const policy = await prisma.policy.findUnique({ where: { id: policyId } });
  if (!policy || policy.tenantId !== tenantId) throw new AppError(404, "Policy not found");
  if (!policy.isActive) throw new AppError(400, "Policy is archived");
  return policy;
}
