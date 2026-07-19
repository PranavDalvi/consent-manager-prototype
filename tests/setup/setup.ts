import { afterAll, beforeAll } from "vitest";

import { clearTestDatabase, disconnectTestDatabase } from "./database";

function hasSafeTestDatabase(): boolean {
  const databaseUrl = process.env.TEST_DATABASE_URL ?? process.env.DATABASE_URL;

  return Boolean(
    process.env.NODE_ENV === "test" &&
      databaseUrl &&
      (databaseUrl.toLowerCase().includes("consent_manager_test") ||
        databaseUrl.toLowerCase().includes("consent-manager-test"))
  );
}

const globalForTests = globalThis as typeof globalThis & {
  __consentManagerTestDbCleared?: boolean;
  __consentManagerTestDbDisconnected?: boolean;
};

beforeAll(async () => {
  if (!hasSafeTestDatabase() || globalForTests.__consentManagerTestDbCleared) {
    return;
  }

  globalForTests.__consentManagerTestDbCleared = true;
  await clearTestDatabase();
});

afterAll(async () => {
  if (!hasSafeTestDatabase() || globalForTests.__consentManagerTestDbDisconnected) {
    return;
  }

  globalForTests.__consentManagerTestDbDisconnected = true;
  await disconnectTestDatabase();
});
