import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../services/jwt.service";
import { authenticateApiKey } from "../services/api-key.service";
import { isValidApiKeyFormat } from "../utils/api-key";
import { prisma } from "../lib/prisma";

export async function tenantAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authHeader = req.headers.authorization;
    const apiKeyHeader = req.header("x-api-key");

    // 1. Try JWT Bearer authentication first
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7).trim();
      const payload = verifyAccessToken(token);

      if (!payload) {
        res.status(401).json({
          success: false,
          message: "Invalid or expired access token",
        });
        return;
      }

      // Check session validity in database
      const session = await prisma.session.findUnique({
        where: { id: payload.sessionId },
      });

      if (!session || session.revokedAt || session.expiresAt < new Date()) {
        res.status(401).json({
          success: false,
          message: "Session has been revoked or expired",
        });
        return;
      }

      // Check tenant status
      const tenant = await prisma.tenant.findUnique({
        where: { id: payload.tenantId },
        select: { id: true, status: true, isActive: true },
      });

      if (!tenant || !tenant.isActive || tenant.status !== "ACTIVE") {
        res.status(403).json({
          success: false,
          message: `Tenant is ${tenant?.status?.toLowerCase() || "inactive"}`,
        });
        return;
      }

      // Check user status
      const user = await prisma.tenantUser.findUnique({
        where: { id: payload.sub },
        select: { id: true, isActive: true },
      });

      if (!user || !user.isActive) {
        res.status(403).json({
          success: false,
          message: "User account is inactive or disabled",
        });
        return;
      }

      req.auth = {
        tenantId: payload.tenantId,
        userId: payload.sub,
        role: payload.role,
        sessionId: payload.sessionId,
        authType: "JWT",
      };

      return next();
    }

    // 2. Fallback to X-API-Key authentication for M2M requests
    if (apiKeyHeader) {
      const rawApiKey = apiKeyHeader.trim();

      if (!rawApiKey || !isValidApiKeyFormat(rawApiKey)) {
        res.status(401).json({
          success: false,
          message: "Invalid or missing API key",
        });
        return;
      }

      const authContext = await authenticateApiKey(rawApiKey);

      if (!authContext) {
        res.status(401).json({
          success: false,
          message: "Invalid or missing API key",
        });
        return;
      }

      // Check tenant status for API key access
      const tenant = await prisma.tenant.findUnique({
        where: { id: authContext.tenantId },
        select: { id: true, status: true, isActive: true },
      });

      if (!tenant || !tenant.isActive || tenant.status !== "ACTIVE") {
        res.status(403).json({
          success: false,
          message: `Tenant is ${tenant?.status?.toLowerCase() || "inactive"}`,
        });
        return;
      }

      req.auth = {
        tenantId: authContext.tenantId,
        apiKeyId: authContext.apiKeyId,
        authType: "API_KEY",
      };

      return next();
    }

    res.status(401).json({
      success: false,
      message: "Authentication required. Provide a Bearer token or X-API-Key header.",
    });
  } catch (error) {
    next(error);
  }
}
