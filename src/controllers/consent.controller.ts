import { Request, Response } from "express";
import { checkConsent, fetchUserConsents, grantConsent, revokeConsent, listConsents } from "../services/consent.service";
import { AppError } from "../utils/app-error";
import { ConsentStatus } from "../generated";

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
    const userId = requireString(req.body.userId, "userId and policyId are required");
    const policyId = requireString(req.body.policyId, "userId and policyId are required");
    const tenantId = requireString(req.auth?.tenantId, "Authenticated tenant is required");

    const consent = await grantConsent(tenantId, userId, policyId);

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

export async function listConsentsHandler(
    req: Request,
    res: Response
): Promise<void> {
    const tenantId = req.auth?.tenantId;
    if (!tenantId) {
        throw new AppError(400, "Authenticated tenant is required");
    }

    const { userId, purpose, status, page, limit } = req.query;

    const result = await listConsents(tenantId, {
        userId: typeof userId === "string" ? userId : undefined,
        purpose: typeof purpose === "string" ? purpose : undefined,
        status: (status === "GRANTED" || status === "REVOKED") ? (status as ConsentStatus) : undefined,
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
    });

    res.json({
        success: true,
        data: result.items,
        pagination: result.pagination,
    });
}