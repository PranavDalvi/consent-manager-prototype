import { Request, Response } from "express";
import { checkConsent, fetchUserConsents, grantConsent, revokeConsent } from "../services/consent.service";
import { AppError } from "../utils/app-error";

function requireString(value: unknown, message: string): string {
    if (typeof value !== "string") {
        throw new AppError(400, message);
    }

    return value;
}

export async function grantConsentHandler(
  req: Request,
  res: Response
): Promise<void> {
    const userId = requireString(req.body.userId, "userId, purpose and policyVersion are required");
    const purpose = requireString(req.body.purpose, "userId, purpose and policyVersion are required");
    const policyVersion = requireString(req.body.policyVersion, "userId, purpose and policyVersion are required");
    const tenantId = requireString(req.auth?.tenantId, "Authenticated tenant is required");

    const consent = await grantConsent(tenantId, userId, purpose, policyVersion);

    res.status(201).json({
        success: true,
        data: consent,
    });
}

export async function fetchUserConsentsHandler(
    req: Request,
    res: Response
): Promise<void> {
    const userId = requireString(req.params.userId, "userId is required");
    const tenantId = requireString(req.auth?.tenantId, "Authenticated tenant is required");

    const consents = await fetchUserConsents(userId, tenantId);

    res.json({
        success: true,
        data: consents,
    });
}

export async function revokeConsentHandler(
    req: Request,
    res: Response,
): Promise<void> {
    const consentId = requireString(req.params.consentId, "consentId is required");

    const consent = await revokeConsent(consentId);

    res.json({
        success: true,
        data: consent,
    });
}

export async function checkConsentHandler(
    req: Request,
    res: Response
): Promise<void> {
    const userId = requireString(req.query.userId, "userId and purpose are required");
    const purpose = requireString(req.query.purpose, "userId and purpose are required");
    const tenantId = requireString(req.auth?.tenantId, "Authenticated tenant is required");

    const hasConsent = await checkConsent(userId, purpose, tenantId);

    res.json({
        success: true,
        data: {
            hasConsent,
        },
    });
}