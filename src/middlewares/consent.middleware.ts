import { NextFunction, Request, Response } from "express";
import { checkConsent } from "../services/consent.service";
import { AppError } from "../utils/app-error";

export function requireConsent(purpose: string) {
  return async (
    req: Request,
    _res: Response,
    next: NextFunction
  ) => {
    const userId = req.body.userId;
    const tenantId = req.body.tenantId;

    if (!userId) {
      return next(
        new AppError(
          400,
          "userId is required"
        )
      );
    }

    if (!tenantId) {
      return next(
        new AppError(
          400,
          "tenantId is required"
        )
      );
    }

    const hasConsent = await checkConsent(
      userId,
      tenantId,
      purpose
    );

    if (!hasConsent) {
      return next(
        new AppError(
          403,
          `Consent required for ${purpose}`
        )
      );
    }

    next();
  };
}