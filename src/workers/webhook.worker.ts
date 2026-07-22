import { Worker } from "bullmq";
import { getRedisConnectionOptions } from "../config/redis";
import { webhookDeliveryQueueName, webhookDeliveryDLQ } from "../queues/webhook.queue";
import { deliverWebhookEvent } from "../services/webhook-delivery.service";
import { prisma } from "../db/prisma";
import { dlqJobsTotal } from "../platform/metrics/prom-client";

export function createWebhookDeliveryWorker(): Worker<{ eventId: string; jobId?: string }> {
  const worker = new Worker<{ eventId: string; jobId?: string }>(
    webhookDeliveryQueueName,
    async (job) => {
      const attempt = job.attemptsMade + 1;
      await deliverWebhookEvent(job.data.eventId, attempt);
    },
    {
      connection: getRedisConnectionOptions(),
      concurrency: 5,
    }
  );

  worker.on("failed", async (job, err) => {
    if (!job) return;

    if (job.attemptsMade >= (job.opts.attempts ?? 5)) {
      // Move to Webhook DLQ
      const event = await prisma.internalEvent.findUnique({ where: { id: job.data.eventId } });
      await webhookDeliveryDLQ.add(
        "failed-webhook-dlq",
        {
          originalJobId: job.id,
          queue: webhookDeliveryQueueName,
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
          jobId: `dlq-webhook-${job.id}-${Date.now()}`,
          removeOnComplete: false,
          removeOnFail: false,
        }
      );

      const count = await webhookDeliveryDLQ.getJobCounts();
      dlqJobsTotal.set({ queue: webhookDeliveryDLQ.name }, count.waiting + count.active + count.failed);
    }
  });

  return worker;
}