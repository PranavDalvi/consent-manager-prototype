import { prisma } from "../db/prisma";
import { enqueueWebhookDeliveryJob } from "../queues/webhook.queue";
import type { Prisma } from "../generated";
import type { InternalEventType } from "./internal-event-types";

export async function createInternalEvent(
  tx: Prisma.TransactionClient,
  input: { tenantId: string; type: InternalEventType; payload: Prisma.InputJsonValue }
) {
  return tx.internalEvent.create({
    data: {
      tenantId: input.tenantId,
      type: input.type,
      payload: input.payload,
      status: "PENDING",
    },
  });
}

export async function enqueueInternalEventDelivery(eventId: string): Promise<void> {
  try {
    const event = await prisma.internalEvent.findUnique({ where: { id: eventId } });

    if (!event || event.status !== "PENDING") {
      return;
    }

    await enqueueWebhookDeliveryJob(event.id);

    await prisma.internalEvent.update({
      where: { id: event.id },
      data: {
        status: "ENQUEUED",
        dispatchedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Failed to enqueue internal event delivery", error);
  }
}

export async function recoverPendingInternalEvents(limit = 100): Promise<void> {
  const pendingEvents = await prisma.internalEvent.findMany({
    where: { status: "PENDING" },
    orderBy: { createdAt: "asc" },
    take: limit,
  });

  for (const event of pendingEvents) {
    try {
      await enqueueInternalEventDelivery(event.id);
    } catch (error) {
      console.error("Failed to enqueue internal event", error);
    }
  }
}