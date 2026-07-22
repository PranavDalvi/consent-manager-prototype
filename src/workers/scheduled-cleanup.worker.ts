import { Worker } from "bullmq";
import { getRedisConnectionOptions } from "../config/redis";
import { scheduledCleanupQueueName, scheduledCleanupQueue } from "../queues/webhook.queue";
import { runScheduledCleanupJobs } from "../services/scheduled-cleanup.service";
import { reconcileOutboxEvents } from "../services/outbox-reconciler.service";

export function createScheduledCleanupWorker(): Worker {
  return new Worker(
    scheduledCleanupQueueName,
    async (job) => {
      if (job.name === "outbox-reconcile") {
        await reconcileOutboxEvents();
      } else {
        await runScheduledCleanupJobs();
      }
    },
    {
      connection: getRedisConnectionOptions(),
    }
  );
}

export async function setupRecurringReliabilityJobs(): Promise<void> {
  // Outbox Reconciler every 1 minute
  await scheduledCleanupQueue.add(
    "outbox-reconcile",
    {},
    {
      repeat: { pattern: "* * * * *" },
      jobId: "recurring-outbox-reconciler",
    }
  );

  // Scheduled Cleanup every hour
  await scheduledCleanupQueue.add(
    "scheduled-cleanup",
    {},
    {
      repeat: { pattern: "0 * * * *" },
      jobId: "recurring-scheduled-cleanup",
    }
  );
}
