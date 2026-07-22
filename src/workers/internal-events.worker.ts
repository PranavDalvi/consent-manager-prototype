import { Worker } from "bullmq";
import { getRedisConnectionOptions } from "../config/redis";
import { internalEventsQueueName, internalEventsDLQ } from "../queues/webhook.queue";
import { prisma } from "../db/prisma";
import { dlqJobsTotal } from "../platform/metrics/prom-client";

export function createInternalEventsWorker(): Worker<{ eventId: string; jobId?: string }> {
  const worker = new Worker<{ eventId: string; jobId?: string }>(
    internalEventsQueueName,
    async (job) => {
      const event = await prisma.internalEvent.findUnique({ where: { id: job.data.eventId } });
      if (!event) return;

      // Processing internal event logic
      await prisma.internalEvent.update({
        where: { id: event.id },
        data: {
          status: "DISPATCHED",
          dispatchedAt: new Date(),
        },
      });
    },
    {
      connection: getRedisConnectionOptions(),
      concurrency: 5,
    }
  );

  worker.on("failed", async (job, err) => {
    if (!job) return;

    const event = await prisma.internalEvent.findUnique({ where: { id: job.data.eventId } });
    if (event) {
      await prisma.internalEvent.update({
        where: { id: event.id },
        data: {
          status: "FAILED",
        },
      });
    }

    if (job.attemptsMade >= (job.opts.attempts ?? 5)) {
      await internalEventsDLQ.add(
        "failed-internal-event-dlq",
        {
          originalJobId: job.id,
          queue: internalEventsQueueName,
          tenantId: event?.tenantId ?? "unknown",
          eventType: event?.type ?? "unknown",
          payload: event?.payload ?? {},
          failureReason: err.message,
          stackTrace: err.stack,
          attempts: job.attemptsMade,
          failedAt: new Date().toISOString(),
          retryCount: job.attemptsMade,
          eventId: job.data.eventId,
        },
        {
          jobId: `dlq-event-${job.id}-${Date.now()}`,
          removeOnComplete: false,
          removeOnFail: false,
        }
      );

      const count = await internalEventsDLQ.getJobCounts();
      dlqJobsTotal.set({ queue: internalEventsDLQ.name }, count.waiting + count.active + count.failed);
    }
  });

  return worker;
}
