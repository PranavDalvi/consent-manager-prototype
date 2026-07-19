import { Queue } from "bullmq";

import { getRedisConnectionOptions } from "../config/redis";

export const webhookDeliveryQueueName = "webhook-deliveries";

export const webhookDeliveryQueue = new Queue(webhookDeliveryQueueName, {
  connection: getRedisConnectionOptions(),
});

export async function enqueueWebhookDeliveryJob(eventId: string): Promise<void> {
  await webhookDeliveryQueue.add(
    "deliver-webhook-event",
    { eventId },
    {
      jobId: eventId,
      attempts: 5,
      backoff: {
        type: "exponential",
        delay: 1000,
      },
      removeOnComplete: true,
      removeOnFail: false,
    }
  );
}