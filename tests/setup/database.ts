import "dotenv/config";

import { prisma } from "../../src/db/prisma";

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

  await prisma.$transaction([
    prisma.auditLog.deleteMany(),
    prisma.consent.deleteMany(),
  ]);
}

export async function disconnectTestDatabase(): Promise<void> {
  await prisma.$disconnect();
}

export { prisma };
