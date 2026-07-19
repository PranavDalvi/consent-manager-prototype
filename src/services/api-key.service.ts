import { prisma } from "../db/prisma";

import {
  generateApiKey,
  getApiKeyPrefix,
  hashApiKey,
} from "../utils/api-key";

interface CreateApiKeyInput {
  tenantId: string;
  name: string;
  expiresAt?: Date;
}

export async function createApiKey(
  input: CreateApiKeyInput
) {
  const tenant = await prisma.tenant.findUnique({
    where: {
      id: input.tenantId,
    },
  });

  if (!tenant) {
    throw new Error("Tenant not found");
  }

  if (!tenant.isActive) {
    throw new Error("Tenant is inactive");
  }

  const rawApiKey = generateApiKey();

  const keyHash = hashApiKey(rawApiKey);

  const apiKey = await prisma.apiKey.create({
    data: {
      tenantId: input.tenantId,
      name: input.name,
      keyPrefix: getApiKeyPrefix(rawApiKey),
      keyHash,
      expiresAt: input.expiresAt,
    },

    select: {
      id: true,
      tenantId: true,
      name: true,
      keyPrefix: true,
      isActive: true,
      expiresAt: true,
      createdAt: true,
    },
  });

  return {
    ...apiKey,

    /*
     * This is the only time the raw key should
     * be returned.
     */
    key: rawApiKey,
  };
}

export async function authenticateApiKey(
  rawApiKey: string
) {
  const keyHash = hashApiKey(rawApiKey);



  const apiKey = await prisma.apiKey.findUnique({
    where: {
      keyHash,
    },

    include: {
      tenant: true,
    },
  });



  if (!apiKey) {
    return null;
  }

  if (!apiKey.isActive) {
    return null;
  }

  if (apiKey.revokedAt) {
    return null;
  }

  if (
    apiKey.expiresAt &&
    apiKey.expiresAt <= new Date()
  ) {
    return null;
  }

  if (!apiKey.tenant.isActive) {
    return null;
  }

  return {
    tenantId: apiKey.tenantId,
    apiKeyId: apiKey.id,
  };
}
