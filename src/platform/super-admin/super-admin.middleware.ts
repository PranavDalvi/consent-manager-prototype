import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../../db/prisma";

export const SUPER_ADMIN_JWT_SECRET = process.env.SUPER_ADMIN_JWT_SECRET || "super-admin-secret-jwt-key-change-in-prod";

export async function superAdminAuthMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({
        success: false,
        message: "Super Admin JWT token required",
      });
      return;
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, SUPER_ADMIN_JWT_SECRET) as {
      sub: string;
      email: string;
      role: string;
    };

    const admin = await prisma.superAdmin.findUnique({
      where: { id: decoded.sub },
    });

    if (!admin || !admin.isActive) {
      res.status(401).json({
        success: false,
        message: "Invalid or inactive Super Admin account",
      });
      return;
    }

    req.superAdmin = {
      id: admin.id,
      email: admin.email,
      role: admin.role,
    };

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid or expired Super Admin token",
    });
  }
}
