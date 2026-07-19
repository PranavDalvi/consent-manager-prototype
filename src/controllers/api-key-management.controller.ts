import { Request, Response } from "express";
import { AppError } from "../utils/app-error";
import { createTenantApiKey, getTenantApiKey, listTenantApiKeys, revokeTenantApiKey, rotateTenantApiKey } from "../services/api-key-management.service";

function requireTenantId(req: Request): string {
  if (!req.auth?.tenantId) throw new AppError(400, "Authenticated tenant is required");
  return req.auth.tenantId;
}

function requireString(value: unknown, message: string): string {
  if (typeof value !== "string") throw new AppError(400, message);
  return value;
}

export async function createApiKeyHandler(req: Request, res: Response): Promise<void> {
  const tenantId = requireTenantId(req);
  const name = requireString(req.body.name, "name is required");
  const expiresAt = typeof req.body.expiresAt === "string" ? new Date(req.body.expiresAt) : undefined;
  const apiKey = await createTenantApiKey({ tenantId, name, expiresAt });
  res.status(201).json({ success: true, data: apiKey });
}

export async function listApiKeysHandler(req: Request, res: Response): Promise<void> {
  const tenantId = requireTenantId(req);
  const apiKeys = await listTenantApiKeys(tenantId);
  res.json({ success: true, data: apiKeys });
}

export async function getApiKeyHandler(req: Request, res: Response): Promise<void> {
  const tenantId = requireTenantId(req);
  const apiKey = await getTenantApiKey(tenantId, requireString(req.params.id, "id is required"));
  res.json({ success: true, data: apiKey });
}

export async function revokeApiKeyHandler(req: Request, res: Response): Promise<void> {
  const tenantId = requireTenantId(req);
  const apiKey = await revokeTenantApiKey(tenantId, requireString(req.params.id, "id is required"));
  res.json({ success: true, data: apiKey });
}

export async function rotateApiKeyHandler(req: Request, res: Response): Promise<void> {
  const tenantId = requireTenantId(req);
  const apiKey = await rotateTenantApiKey(tenantId, requireString(req.params.id, "id is required"));
  res.json({ success: true, data: apiKey });
}
