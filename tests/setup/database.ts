import "dotenv/config";

import { prisma } from "../../src/db/prisma";
import { generateApiKey, getApiKeyPrefix, hashApiKey } from "../../src/utils/api-key";

function getDatabaseUrl(): string {
  const databaseUrl = process.env.TEST_DATABASE_URL ?? process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("TEST_DATABASE_URL or DATABASE_URL must be set for integration tests");
  }

  return databaseUrl;
}

function isTestDatabaseUrl(databaseUrl: string): boolean {
  const normalizedUrl = databaseUrl.toLowerCase();

  return (
    process.env.NODE_ENV === "test" ||
    normalizedUrl.includes("consent_manager_test") ||
    normalizedUrl.includes("consent-manager-test")
  );
}

function assertSafeTestDatabase(): void {
  const databaseUrl = getDatabaseUrl();

  if (!isTestDatabaseUrl(databaseUrl)) {
    throw new Error(
      "Refusing to clean the database because the active connection is not explicitly configured for tests"
    );
  }
}

export async function clearTestDatabase(): Promise<void> {
  assertSafeTestDatabase();

  await prisma.auditLog.deleteMany();
  await prisma.consent.deleteMany();
  await prisma.apiKey.deleteMany();
  await prisma.tenant.deleteMany();
}

export async function createTenantWithApiKey(input: { tenantId: string; tenantName: string; apiKeyName: string }) {
  assertSafeTestDatabase();

  const tenant = await prisma.tenant.create({
    data: {
      id: input.tenantId,
      name: input.tenantName,
      slug: input.tenantId,
    },
  });

  const rawApiKey = generateApiKey();

  const apiKey = await prisma.apiKey.create({
    data: {
      tenantId: tenant.id,
      name: input.apiKeyName,
      keyPrefix: getApiKeyPrefix(rawApiKey),
      keyHash: hashApiKey(rawApiKey),
    },
  });

  console.log("[test-fixture] created api key", {
    tenantId: tenant.id,
    apiKeyId: apiKey.id,
    rawApiKeyPrefix: rawApiKey.slice(0, 15),
    keyHash: hashApiKey(rawApiKey),
  });

  return { tenant, apiKey, rawApiKey };
}

export async function disconnectTestDatabase(): Promise<void> {
  await prisma.$disconnect();
}

export { prisma };
