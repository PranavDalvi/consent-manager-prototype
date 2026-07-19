import { randomBytes } from "node:crypto";

import { prisma } from "../db/prisma";
import { AppError } from "../utils/app-error";

const webhookSelect = {
  id: true,
  tenantId: true,
  name: true,
  url: true,
  events: true,
  isActive: true,
  createdAt: true,
  updatedAt: true,
} as const;

function requireTenantId(tenantId?: string): string {
  if (!tenantId) {
    throw new AppError(400, "Authenticated tenant is required");
  }

  return tenantId;
}

function requireWebhookId(id?: string): string {
  if (!id) {
    throw new AppError(400, "id is required");
  }

  return id;
}

function generateWebhookSecret(): string {
  return randomBytes(32).toString("hex");
}

async function findWebhookOrThrow(tenantId: string, id: string) {
  const webhook = await prisma.webhook.findFirst({
    where: { id, tenantId },
    select: webhookSelect,
  });

  if (!webhook) {
    throw new AppError(404, "Webhook not found");
  }

  return webhook;
}

export async function createWebhook(input: {
  tenantId?: string;
  name: string;
  url: string;
  events: string[];
}) {
  const tenantId = requireTenantId(input.tenantId);
  const secret = generateWebhookSecret();

  const webhook = await prisma.webhook.create({
    data: {
      tenantId,
      name: input.name,
      url: input.url,
      secret,
      events: input.events,
      isActive: true,
    },
    select: webhookSelect,
  });

  return {
    ...webhook,
    secret,
  };
}

export async function listWebhooks(tenantId?: string) {
  const resolvedTenantId = requireTenantId(tenantId);

  return prisma.webhook.findMany({
    where: { tenantId: resolvedTenantId },
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
    select: webhookSelect,
  });
}

export async function getWebhook(tenantId?: string, id?: string) {
  const resolvedTenantId = requireTenantId(tenantId);
  const resolvedWebhookId = requireWebhookId(id);

  return findWebhookOrThrow(resolvedTenantId, resolvedWebhookId);
}

export async function updateWebhook(input: {
  tenantId?: string;
  id?: string;
  name?: string;
  url?: string;
  events?: string[];
}) {
  const tenantId = requireTenantId(input.tenantId);
  const id = requireWebhookId(input.id);
  await findWebhookOrThrow(tenantId, id);

  return prisma.webhook.update({
    where: { id },
    data: {
      ...(input.name ? { name: input.name } : {}),
      ...(input.url ? { url: input.url } : {}),
      ...(input.events ? { events: input.events } : {}),
    },
    select: webhookSelect,
  });
}

export async function disableWebhook(tenantId?: string, id?: string) {
  const resolvedTenantId = requireTenantId(tenantId);
  const resolvedWebhookId = requireWebhookId(id);
  await findWebhookOrThrow(resolvedTenantId, resolvedWebhookId);

  return prisma.webhook.update({
    where: { id: resolvedWebhookId },
    data: { isActive: false },
    select: webhookSelect,
  });
}

export async function enableWebhook(tenantId?: string, id?: string) {
  const resolvedTenantId = requireTenantId(tenantId);
  const resolvedWebhookId = requireWebhookId(id);
  await findWebhookOrThrow(resolvedTenantId, resolvedWebhookId);

  return prisma.webhook.update({
    where: { id: resolvedWebhookId },
    data: { isActive: true },
    select: webhookSelect,
  });
}