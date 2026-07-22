import { prisma } from "../db/prisma";
import { Prisma } from "../generated";
import { enqueueInternalEventJob } from "../queues/webhook.queue";
import { outboxBacklog } from "../platform/metrics/prom-client";

export async function reconcileOutboxEvents(): Promise<{ processed: number; errors: number }> {
  const pendingEvents = await prisma.outboxEvent.findMany({
    where: {
      status: { in: ["PENDING", "FAILED"] },
    },
    take: 50,
    orderBy: { createdAt: "asc" },
  });

  outboxBacklog.set(pendingEvents.length);

  let processed = 0;
  let errors = 0;

  for (const event of pendingEvents) {
    try {
      // Ensure idempotency: create or update InternalEvent with deterministic key/payload
      const internalEvent = await prisma.internalEvent.create({
        data: {
          tenantId: event.tenantId,
          type: event.eventType,
          payload: (event.payload ?? {}) as Prisma.InputJsonValue,
          status: "PENDING",
        },
      });

      // Enqueue job safely
      await enqueueInternalEventJob(internalEvent.id, `outbox-reconcile-${event.id}-${Date.now()}`);

      await prisma.outboxEvent.update({
        where: { id: event.id },
        data: {
          status: "PROCESSED",
          processedAt: new Date(),
        },
      });

      processed++;
    } catch (err: unknown) {
      errors++;
      const errorMessage = err instanceof Error ? err.message : String(err);
      await prisma.outboxEvent.update({
        where: { id: event.id },
        data: {
          retryCount: { increment: 1 },
          lastError: errorMessage.slice(0, 500),
          status: "FAILED",
        },
      });
    }
  }

  return { processed, errors };
}
