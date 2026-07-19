import { Worker } from "bullmq";

import { getRedisConnectionOptions } from "../config/redis";
import { webhookDeliveryQueueName } from "../queues/webhook.queue";
import { deliverWebhookEvent } from "../services/webhook-delivery.service";

export function createWebhookDeliveryWorker(): Worker<{ eventId: string }> {
  return new Worker(
    webhookDeliveryQueueName,
    async (job) => {
      await deliverWebhookEvent(job.data.eventId);
    },
    {
      connection: getRedisConnectionOptions(),
      concurrency: 5,
    }
  );
}