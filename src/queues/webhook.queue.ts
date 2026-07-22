import { Queue } from "bullmq";
import { getRedisConnectionOptions } from "../config/redis";
import { reliabilityConfig } from "../config/reliability";

export const webhookDeliveryQueueName = "webhook-deliveries";
export const webhookDeliveryDLQName = "webhook-deliveries-dlq";

export const internalEventsQueueName = "internal-events";
export const internalEventsDLQName = "internal-events-dlq";

export const scheduledCleanupQueueName = "scheduled-cleanup";

export const webhookDeliveryQueue = new Queue(webhookDeliveryQueueName, {
  connection: getRedisConnectionOptions(),
});

export const webhookDeliveryDLQ = new Queue(webhookDeliveryDLQName, {
  connection: getRedisConnectionOptions(),
});

export const internalEventsQueue = new Queue(internalEventsQueueName, {
  connection: getRedisConnectionOptions(),
});

export const internalEventsDLQ = new Queue(internalEventsDLQName, {
  connection: getRedisConnectionOptions(),
});

export const scheduledCleanupQueue = new Queue(scheduledCleanupQueueName, {
  connection: getRedisConnectionOptions(),
});

export async function enqueueWebhookDeliveryJob(eventId: string, customJobId?: string): Promise<void> {
  const jobId = customJobId || eventId;
  await webhookDeliveryQueue.add(
    "deliver-webhook-event",
    { eventId, jobId },
    {
      jobId,
      attempts: reliabilityConfig.retry.maxRetries,
      backoff: {
        type: "exponential",
        delay: reliabilityConfig.retry.initialDelayMs,
      },
      removeOnComplete: true,
      removeOnFail: false,
    }
  );
}

export async function enqueueInternalEventJob(eventId: string, customJobId?: string): Promise<void> {
  const jobId = customJobId || `internal-${eventId}`;
  await internalEventsQueue.add(
    "process-internal-event",
    { eventId, jobId },
    {
      jobId,
      attempts: reliabilityConfig.retry.maxRetries,
      backoff: {
        type: "exponential",
        delay: reliabilityConfig.retry.initialDelayMs,
      },
      removeOnComplete: true,
      removeOnFail: false,
    }
  );
}