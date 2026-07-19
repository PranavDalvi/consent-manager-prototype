import { prisma } from "../db/prisma";
import { AppError } from "../utils/app-error";
import { generateApiKey, getApiKeyPrefix, hashApiKey } from "../utils/api-key";
import { createInternalEvent, enqueueInternalEventDelivery } from "../events/internal-event.publisher";

function ensureTenantId(tenantId: string | undefined): string {
  if (!tenantId) {
    throw new AppError(400, "Authenticated tenant is required");
  }
  return tenantId;
}

async function assertTenantExists(tenantId: string) {
  const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
  if (!tenant) throw new AppError(404, "Tenant not found");
  return tenant;
}

function toPublicApiKey(apiKey: {
  id: string;
  tenantId: string;
  name: string;
  keyPrefix: string;
  isActive: boolean;
  expiresAt: Date | null;
  revokedAt: Date | null;
  lastUsedAt: Date | null;
  createdAt: Date;
}) {
  return {
    ...apiKey,
    keyHash: undefined,
  } as typeof apiKey & { keyHash: undefined };
}

export async function createTenantApiKey(input: { tenantId?: string; name: string; expiresAt?: Date }) {
  const tenantId = ensureTenantId(input.tenantId);
  await assertTenantExists(tenantId);

  const rawApiKey = generateApiKey();
  const apiKey = await prisma.apiKey.create({
    data: {
      tenantId,
      name: input.name,
      keyPrefix: getApiKeyPrefix(rawApiKey),
      keyHash: hashApiKey(rawApiKey),
      expiresAt: input.expiresAt,
    },
    select: {
      id: true,
      tenantId: true,
      name: true,
      keyPrefix: true,
      isActive: true,
      expiresAt: true,
      revokedAt: true,
      lastUsedAt: true,
      createdAt: true,
    },
  });

  const event = await prisma.$transaction(async (tx) => {
    return createInternalEvent(tx, {
      tenantId,
      type: "API_KEY_CREATED",
      payload: {
        apiKey,
      },
    });
  });

  void enqueueInternalEventDelivery(event.id);

  return { ...toPublicApiKey(apiKey), key: rawApiKey };
}

export async function listTenantApiKeys(tenantId?: string) {
  const resolvedTenantId = ensureTenantId(tenantId);
  const apiKeys = await prisma.apiKey.findMany({
    where: { tenantId: resolvedTenantId },
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
    select: {
      id: true,
      tenantId: true,
      name: true,
      keyPrefix: true,
      isActive: true,
      expiresAt: true,
      revokedAt: true,
      lastUsedAt: true,
      createdAt: true,
    },
  });

  return apiKeys.map((apiKey) => ({
    ...apiKey,
    keyHash: undefined,
  }));
}

export async function getTenantApiKey(tenantId?: string, id?: string) {
  const resolvedTenantId = ensureTenantId(tenantId);
  if (!id) throw new AppError(400, "id is required");

  const apiKey = await prisma.apiKey.findFirst({
    where: { id, tenantId: resolvedTenantId },
    select: {
      id: true,
      tenantId: true,
      name: true,
      keyPrefix: true,
      isActive: true,
      expiresAt: true,
      revokedAt: true,
      lastUsedAt: true,
      createdAt: true,
    },
  });

  if (!apiKey) throw new AppError(404, "API key not found");
  return { ...apiKey, keyHash: undefined };
}

export async function revokeTenantApiKey(tenantId?: string, id?: string) {
  const resolvedTenantId = ensureTenantId(tenantId);
  if (!id) throw new AppError(400, "id is required");

  const apiKey = await prisma.apiKey.findFirst({ where: { id, tenantId: resolvedTenantId } });
  if (!apiKey) throw new AppError(404, "API key not found");

  if (!apiKey.isActive && apiKey.revokedAt) {
    return {
      id: apiKey.id,
      tenantId: apiKey.tenantId,
      name: apiKey.name,
      keyPrefix: apiKey.keyPrefix,
      isActive: apiKey.isActive,
      expiresAt: apiKey.expiresAt,
      revokedAt: apiKey.revokedAt,
      lastUsedAt: apiKey.lastUsedAt,
      createdAt: apiKey.createdAt,
      keyHash: undefined,
    };
  }

  const updated = await prisma.apiKey.update({
    where: { id },
    data: { isActive: false, revokedAt: new Date() },
    select: {
      id: true,
      tenantId: true,
      name: true,
      keyPrefix: true,
      isActive: true,
      expiresAt: true,
      revokedAt: true,
      lastUsedAt: true,
      createdAt: true,
    },
  });

  const event = await prisma.$transaction(async (tx) => {
    return createInternalEvent(tx, {
      tenantId: resolvedTenantId,
      type: "API_KEY_REVOKED",
      payload: {
        apiKey: updated,
      },
    });
  });

  void enqueueInternalEventDelivery(event.id);

  return { ...updated, keyHash: undefined };
}

export async function rotateTenantApiKey(tenantId?: string, id?: string) {
  const resolvedTenantId = ensureTenantId(tenantId);
  if (!id) throw new AppError(400, "id is required");

  const { apiKey, key, eventId } = await prisma.$transaction(async (tx) => {
    const existing = await tx.apiKey.findFirst({ where: { id, tenantId: resolvedTenantId } });
    if (!existing) throw new AppError(404, "API key not found");

    const rawApiKey = generateApiKey();
    const replacement = await tx.apiKey.create({
      data: {
        tenantId: resolvedTenantId,
        name: existing.name,
        keyPrefix: getApiKeyPrefix(rawApiKey),
        keyHash: hashApiKey(rawApiKey),
        expiresAt: existing.expiresAt,
      },
      select: {
        id: true,
        tenantId: true,
        name: true,
        keyPrefix: true,
        isActive: true,
        expiresAt: true,
        revokedAt: true,
        lastUsedAt: true,
        createdAt: true,
      },
    });

    await tx.apiKey.update({
      where: { id },
      data: { isActive: false, revokedAt: new Date() },
    });

    const event = await createInternalEvent(tx, {
      tenantId: resolvedTenantId,
      type: "API_KEY_ROTATED",
      payload: {
        oldApiKeyId: existing.id,
        apiKey: replacement,
      },
    });

    return { apiKey: replacement, key: rawApiKey, eventId: event.id };
  });

  void enqueueInternalEventDelivery(eventId);

  return { ...apiKey, keyHash: undefined, key };
}
