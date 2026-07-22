import jwt from "jsonwebtoken";
import crypto from "crypto";
import { Response } from "express";

const JWT_SECRET = process.env.JWT_SECRET || "default-jwt-secret-for-dev-environment-only";

export const ACCESS_TOKEN_EXPIRATION = "15m";
export const REFRESH_TOKEN_EXPIRATION_DAYS = 7;
export const INVITATION_EXPIRATION_HOURS = 24;
export const PASSWORD_RESET_EXPIRATION_MINUTES = 30;

export interface JwtAccessPayload {
  sub: string; // userId
  tenantId: string;
  role: string;
  sessionId: string;
  email: string;
}

export function generateAccessToken(payload: {
  userId: string;
  tenantId: string;
  role: string;
  sessionId: string;
  email: string;
}): string {
  return jwt.sign(
    {
      sub: payload.userId,
      tenantId: payload.tenantId,
      role: payload.role,
      sessionId: payload.sessionId,
      email: payload.email,
    },
    JWT_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRATION }
  );
}

export function verifyAccessToken(token: string): JwtAccessPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    if (!decoded || !decoded.sub || !decoded.tenantId || !decoded.sessionId) {
      return null;
    }
    return {
      sub: decoded.sub as string,
      tenantId: decoded.tenantId as string,
      role: (decoded.role as string) || "OWNER",
      sessionId: decoded.sessionId as string,
      email: (decoded.email as string) || "",
    };
  } catch (error) {
    return null;
  }
}

export function generateRandomToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

export function hashToken(rawToken: string): string {
  return crypto.createHash("sha256").update(rawToken).digest("hex");
}

export function setRefreshTokenCookie(res: Response, rawRefreshToken: string): void {
  const isProd = process.env.NODE_ENV === "production";
  res.cookie("refreshToken", rawRefreshToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/api/auth",
    maxAge: REFRESH_TOKEN_EXPIRATION_DAYS * 24 * 60 * 60 * 1000,
  });
}

export function clearRefreshTokenCookie(res: Response): void {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    path: "/api/auth",
  });
}
