import { prisma } from "../db/prisma";
import { reliabilityConfig } from "../config/reliability";
import { webhookDeliveryQueue, webhookDeliveryDLQ, internalEventsQueue, internalEventsDLQ } from "../queues/webhook.queue";
import { cleanupDurationSeconds, cleanupFailuresTotal } from "../platform/metrics/prom-client";

export async function runScheduledCleanupJobs(): Promise<Array<{ jobName: string; status: string; itemsProcessed: number; itemsDeleted: number; durationMs: number }>> {
  const results = [];

  // Job 1: Clean completed BullMQ jobs
  results.push(await executeCleanupTask("clean_completed_bullmq_jobs", async () => {
    await webhookDeliveryQueue.clean(0, 1000, "completed");
    await internalEventsQueue.clean(0, 1000, "completed");
    return { itemsProcessed: 1, itemsDeleted: 1 };
  }));

  // Job 2: Archive old webhook history
  results.push(await executeCleanupTask("archive_webhook_history", async () => {
    const cutoff = new Date(Date.now() - reliabilityConfig.retention.webhookRetentionDays * 86400 * 1000);
    const deleted = await prisma.webhookDelivery.deleteMany({
      where: { createdAt: { lt: cutoff } },
    });
    return { itemsProcessed: deleted.count, itemsDeleted: deleted.count };
  }));

  // Job 3: Clean old failed DLQ jobs exceeding retention
  results.push(await executeCleanupTask("clean_old_failed_jobs", async () => {
    const cutoff = new Date(Date.now() - reliabilityConfig.retention.dlqRetentionDays * 86400 * 1000);
    await webhookDeliveryDLQ.clean(reliabilityConfig.retention.dlqRetentionDays * 86400 * 1000, 1000, "failed");
    await internalEventsDLQ.clean(reliabilityConfig.retention.dlqRetentionDays * 86400 * 1000, 1000, "failed");
    return { itemsProcessed: 1, itemsDeleted: 1 };
  }));

  // Job 4: Remove expired replay metadata
  results.push(await executeCleanupTask("remove_expired_replay_metadata", async () => {
    const cutoff = new Date(Date.now() - reliabilityConfig.retention.replayRetentionDays * 86400 * 1000);
    const deleted = await prisma.replayHistory.deleteMany({
      where: { replayedAt: { lt: cutoff } },
    });
    return { itemsProcessed: deleted.count, itemsDeleted: deleted.count };
  }));

  return results;
}

async function executeCleanupTask(
  jobName: string,
  fn: () => Promise<{ itemsProcessed: number; itemsDeleted: number }>
): Promise<{ jobName: string; status: string; itemsProcessed: number; itemsDeleted: number; durationMs: number }> {
  const startedAt = new Date();
  const startTime = Date.now();

  try {
    const res = await fn();
    const durationMs = Date.now() - startTime;
    cleanupDurationSeconds.observe({ job_name: jobName }, durationMs / 1000);

    await prisma.cleanupExecution.create({
      data: {
        jobName,
        startedAt,
        completedAt: new Date(),
        status: "SUCCESS",
        itemsProcessed: res.itemsProcessed,
        itemsDeleted: res.itemsDeleted,
        durationMs,
      },
    });

    return { jobName, status: "SUCCESS", ...res, durationMs };
  } catch (err: unknown) {
    const durationMs = Date.now() - startTime;
    const errorMessage = err instanceof Error ? err.message : String(err);
    cleanupFailuresTotal.inc({ job_name: jobName });

    await prisma.cleanupExecution.create({
      data: {
        jobName,
        startedAt,
        completedAt: new Date(),
        status: "FAILED",
        itemsProcessed: 0,
        itemsDeleted: 0,
        durationMs,
        errorMessage: errorMessage.slice(0, 500),
      },
    });

    return { jobName, status: "FAILED", itemsProcessed: 0, itemsDeleted: 0, durationMs };
  }
}
