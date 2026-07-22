import { Request, Response, NextFunction } from "express";

export function requireRole(...allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.auth) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
      });
      return;
    }

    // M2M API Keys are treated as admin permissions for API endpoints unless restricted
    if (req.auth.authType === "API_KEY") {
      return next();
    }

    if (!req.auth.role || !allowedRoles.includes(req.auth.role)) {
      res.status(403).json({
        success: false,
        message: `Forbidden. Required role: ${allowedRoles.join(" or ")}`,
      });
      return;
    }

    next();
  };
}
