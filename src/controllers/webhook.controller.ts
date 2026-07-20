import { Request, Response } from "express";

import { AppError } from "../utils/app-error";
import { createWebhook, disableWebhook, enableWebhook, getWebhook, listWebhooks, updateWebhook, deleteWebhook } from "../services/webhook.service";

function requireTenantId(req: Request): string {
  if (!req.auth?.tenantId) {
    throw new AppError(400, "Authenticated tenant is required");
  }

  return req.auth.tenantId;
}

function requireString(value: unknown, message: string): string {
  if (typeof value !== "string") {
    throw new AppError(400, message);
  }

  return value;
}

export async function createWebhookHandler(req: Request, res: Response): Promise<void> {
  const webhook = await createWebhook({
    tenantId: requireTenantId(req),
    name: requireString(req.body.name, "name is required"),
    url: requireString(req.body.url, "url is required"),
    events: Array.isArray(req.body.events) ? req.body.events : [],
  });

  res.status(201).json({ success: true, data: webhook });
}

export async function listWebhooksHandler(req: Request, res: Response): Promise<void> {
  const webhooks = await listWebhooks(requireTenantId(req));

  res.json({ success: true, data: webhooks });
}

export async function getWebhookHandler(req: Request, res: Response): Promise<void> {
  const webhook = await getWebhook(requireTenantId(req), requireString(req.params.id, "id is required"));

  res.json({ success: true, data: webhook });
}

export async function updateWebhookHandler(req: Request, res: Response): Promise<void> {
  const webhook = await updateWebhook({
    tenantId: requireTenantId(req),
    id: requireString(req.params.id, "id is required"),
    name: typeof req.body.name === "string" ? req.body.name : undefined,
    url: typeof req.body.url === "string" ? req.body.url : undefined,
    events: Array.isArray(req.body.events) ? req.body.events : undefined,
  });

  res.json({ success: true, data: webhook });
}

export async function disableWebhookHandler(req: Request, res: Response): Promise<void> {
  const webhook = await disableWebhook(requireTenantId(req), requireString(req.params.id, "id is required"));

  res.json({ success: true, data: webhook });
}

export async function enableWebhookHandler(req: Request, res: Response): Promise<void> {
  const webhook = await enableWebhook(requireTenantId(req), requireString(req.params.id, "id is required"));

  res.json({ success: true, data: webhook });
}

export async function deleteWebhookHandler(req: Request, res: Response): Promise<void> {
  const webhook = await deleteWebhook(requireTenantId(req), requireString(req.params.id, "id is required"));

  res.json({ success: true, data: webhook });
}