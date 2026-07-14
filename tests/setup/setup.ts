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

beforeAll(async () => {
  if (!hasSafeTestDatabase()) {
    return;
  }

  await clearTestDatabase();
});

afterAll(async () => {
  if (!hasSafeTestDatabase()) {
    return;
  }

  await clearTestDatabase();
  await disconnectTestDatabase();
});
