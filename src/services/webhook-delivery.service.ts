import { prisma } from "../db/prisma";
import { buildWebhookPayload } from "../utils/webhook-payload";
import { generateWebhookSignature } from "../utils/webhook-signature";
import { AppError } from "../utils/app-error";

type InternalEventRecord = {
  id: string;
  tenantId: string;
  type: string;
  payload: unknown;
  status: string;
};

type WebhookRecord = {
  id: string;
  tenantId: string;
  name: string;
  url: string;
  secret: string;
  events: string[];
  isActive: boolean;
};

async function getEventOrThrow(eventId: string): Promise<InternalEventRecord> {
  const event = await prisma.internalEvent.findUnique({ where: { id: eventId } });

  if (!event) {
    throw new AppError(404, "Internal event not found");
  }

  return event;
}

export async function deliverWebhookEvent(eventId: string): Promise<void> {
  const event = await getEventOrThrow(eventId);

  const webhooks = await prisma.webhook.findMany({
    where: {
      tenantId: event.tenantId,
      isActive: true,
      events: {
        has: event.type,
      },
    },
  }) as WebhookRecord[];

  if (webhooks.length === 0) {
    await prisma.internalEvent.update({
      where: { id: event.id },
      data: {
        processedAt: new Date(),
        status: "PROCESSED",
      },
    });

    return;
  }

  const payload = buildWebhookPayload({
    event: event.type as never,
    tenantId: event.tenantId,
    data: (event.payload as Record<string, unknown>) ?? {},
  });

  const rawBody = JSON.stringify(payload);
  const timestamp = payload.timestamp;

  const results = await Promise.allSettled(
    webhooks.map(async (webhook) => {
      const signature = generateWebhookSignature(webhook.secret, timestamp, rawBody);

      const response = await fetch(webhook.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Webhook-Signature": signature,
          "X-Webhook-Timestamp": timestamp,
          "X-Webhook-Event": payload.event,
        },
        body: rawBody,
      });

      if (!response.ok) {
        throw new Error(`Webhook ${webhook.id} returned ${response.status}`);
      }
    })
  );

  const failures = results.filter((result) => result.status === "rejected");

  if (failures.length > 0) {
    throw new Error(`Failed to deliver ${failures.length} webhook(s) for event ${event.type}`);
  }

  await prisma.internalEvent.update({
    where: { id: event.id },
    data: {
      processedAt: new Date(),
      status: "PROCESSED",
    },
  });
}