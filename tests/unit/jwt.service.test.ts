import { describe, it, expect } from "vitest";
import {
  generateAccessToken,
  verifyAccessToken,
  generateRandomToken,
  hashToken,
} from "../../src/services/jwt.service";

describe("JWT & Cookie Service", () => {
  it("generates and verifies access token with correct claims", () => {
    const payload = {
      userId: "user-123",
      tenantId: "tenant-456",
      role: "OWNER",
      sessionId: "session-789",
      email: "owner@test.com",
    };

    const token = generateAccessToken(payload);
    expect(token).toBeDefined();
    expect(typeof token).toBe("string");

    const decoded = verifyAccessToken(token);
    expect(decoded).not.toBeNull();
    expect(decoded?.sub).toBe("user-123");
    expect(decoded?.tenantId).toBe("tenant-456");
    expect(decoded?.role).toBe("OWNER");
    expect(decoded?.sessionId).toBe("session-789");
    expect(decoded?.email).toBe("owner@test.com");
  });

  it("returns null for invalid or corrupted access tokens", () => {
    const decoded = verifyAccessToken("invalid.corrupted.token");
    expect(decoded).toBeNull();
  });

  it("generates unique random tokens and produces consistent SHA-256 hashes", () => {
    const token1 = generateRandomToken();
    const token2 = generateRandomToken();
    expect(token1).not.toBe(token2);

    const hash1 = hashToken(token1);
    const hash1Again = hashToken(token1);
    expect(hash1).toBe(hash1Again);
    expect(hash1).not.toBe(token1);
  });
});
