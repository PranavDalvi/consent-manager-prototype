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
