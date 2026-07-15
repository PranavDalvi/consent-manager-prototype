import {
  createHash,
  randomBytes,
} from "node:crypto";

const API_KEY_PREFIX = "cm_live_";
const API_KEY_RANDOM_BYTES = 32;

/**
 * Generates a cryptographically secure API key.
 *
 * The raw API key must be returned to the client only once
 * and must never be stored in the database.
 */
export function generateApiKey(): string {
  const secret = randomBytes(
    API_KEY_RANDOM_BYTES
  ).toString("hex");

  return `${API_KEY_PREFIX}${secret}`;
}

/**
 * Creates a deterministic SHA-256 hash for API-key lookup.
 *
 * Only this hash is stored in PostgreSQL.
 */
export function hashApiKey(
  rawApiKey: string
): string {
  return createHash("sha256")
    .update(rawApiKey)
    .digest("hex");
}

/**
 * Returns a non-secret prefix that can help identify
 * an API key without exposing the complete key.
 */
export function getApiKeyPrefix(
  rawApiKey: string
): string {
  return rawApiKey.slice(0, 15);
}
