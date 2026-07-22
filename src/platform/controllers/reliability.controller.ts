import { Request, Response } from "express";
import { prisma } from "../../db/prisma";
import { webhookDeliveryDLQ, internalEventsDLQ, enqueueWebhookDeliveryJob, enqueueInternalEventJob } from "../../queues/webhook.queue";
import { replayTotal, replayFailedTotal } from "../metrics/prom-client";

const MAX_REPLAY_ATTEMPTS = 5;

// Helper to safely extract string param
function getStringParam(param: string | string[] | undefined): string {
  if (Array.isArray(param)) return param[0] ?? "";
  return param ?? "";
}

// GET /api/platform/dlq
export async function getDLQJobsHandler(_req: Request, res: Response): Promise<void> {
  try {
    const webhookDlqJobs = await webhookDeliveryDLQ.getJobs(["waiting", "active", "failed"]);
    const eventDlqJobs = await internalEventsDLQ.getJobs(["waiting", "active", "failed"]);

    const formatted = [
      ...webhookDlqJobs.map((j) => ({
        id: j.id,
        queue: webhookDeliveryDLQ.name,
        name: j.name,
        data: j.data,
        failedReason: j.failedReason,
        stacktrace: j.stacktrace,
        timestamp: j.timestamp,
      })),
      ...eventDlqJobs.map((j) => ({
        id: j.id,
        queue: internalEventsDLQ.name,
        name: j.name,
        data: j.data,
        failedReason: j.failedReason,
        stacktrace: j.stacktrace,
        timestamp: j.timestamp,
      })),
    ];

    res.json({ success: true, data: formatted });
  } catch (err: unknown) {
    res.status(500).json({ success: false, message: "Failed to fetch DLQ jobs" });
  }
}

// DELETE /api/platform/dlq/:jobId
export async function deleteDLQJobHandler(req: Request, res: Response): Promise<void> {
  try {
    const jobId = getStringParam(req.params.jobId);
    let job = await webhookDeliveryDLQ.getJob(jobId);
    if (!job) {
      job = await internalEventsDLQ.getJob(jobId);
    }

    if (!job) {
      res.status(404).json({ success: false, message: "DLQ Job not found" });
      return;
    }

    await job.remove();

    await prisma.auditLog.create({
      data: {
        tenantId: String(job.data.tenantId ?? "system"),
        userId: String((req as any).admin?.id ?? "super-admin"),
        action: "DELETE_DLQ_JOB",
        purpose: "Reliability Maintenance",
        metadata: { jobId, queue: job.queueName },
      },
    });

    res.json({ success: true, message: `DLQ job ${jobId} removed successfully` });
  } catch (err: unknown) {
    res.status(500).json({ success: false, message: "Failed to delete DLQ job" });
  }
}

// POST /api/platform/dlq/:jobId/replay
export async function replayDLQJobHandler(req: Request, res: Response): Promise<void> {
  try {
    const jobId = getStringParam(req.params.jobId);
    const operatorId = String((req as any).admin?.id ?? "super-admin");
    const { reason } = req.body ?? {};

    let job = await webhookDeliveryDLQ.getJob(jobId);
    let isWebhookQueue = true;
    if (!job) {
      job = await internalEventsDLQ.getJob(jobId);
      isWebhookQueue = false;
    }

    if (!job) {
      res.status(404).json({ success: false, message: "DLQ job not found" });
      return;
    }

    const eventId = String(job.data.eventId);
    const previousReplays = await prisma.replayHistory.count({
      where: { targetId: jobId },
    });

    if (previousReplays >= MAX_REPLAY_ATTEMPTS) {
      res.status(400).json({ success: false, message: `Maximum replay limit (${MAX_REPLAY_ATTEMPTS}) reached for job ${jobId}` });
      return;
    }

    const newJobId = `replay-dlq-${jobId}-${Date.now()}`;
    if (isWebhookQueue) {
      await enqueueWebhookDeliveryJob(eventId, newJobId);
    } else {
      await enqueueInternalEventJob(eventId, newJobId);
    }

    await job.remove();

    await prisma.replayHistory.create({
      data: {
        targetType: "DLQ_JOB",
        targetId: jobId,
        originalJobId: jobId,
        newJobId,
        reason: String(reason ?? "Manual Super Admin DLQ Replay"),
        result: "SUCCESS",
        operatorId,
        replayCount: previousReplays + 1,
        maxReplayAttempts: MAX_REPLAY_ATTEMPTS,
      },
    });

    await prisma.auditLog.create({
      data: {
        tenantId: String(job.data.tenantId ?? "system"),
        userId: operatorId,
        action: "REPLAY_DLQ_JOB",
        purpose: "Reliability Recovery",
        metadata: { jobId, newJobId, eventId },
      },
    });

    replayTotal.inc({ target_type: "DLQ_JOB", status: "SUCCESS" });
    res.json({ success: true, data: { originalJobId: jobId, newJobId, message: "DLQ job replayed successfully" } });
  } catch (err: unknown) {
    replayFailedTotal.inc({ target_type: "DLQ_JOB" });
    res.status(500).json({ success: false, message: "Failed to replay DLQ job" });
  }
}

// POST /api/platform/dlq/replay
export async function bulkReplayDLQJobsHandler(req: Request, res: Response): Promise<void> {
  try {
    const { ids } = req.body ?? {};
    if (!Array.isArray(ids) || ids.length === 0) {
      res.status(400).json({ success: false, message: "Request body must contain an 'ids' array" });
      return;
    }

    const results = [];
    for (const idItem of ids) {
      const jobId = String(idItem);
      try {
        let job = await webhookDeliveryDLQ.getJob(jobId);
        let isWebhook = true;
        if (!job) {
          job = await internalEventsDLQ.getJob(jobId);
          isWebhook = false;
        }
        if (job) {
          const newJobId = `bulk-replay-dlq-${jobId}-${Date.now()}`;
          if (isWebhook) await enqueueWebhookDeliveryJob(String(job.data.eventId), newJobId);
          else await enqueueInternalEventJob(String(job.data.eventId), newJobId);
          await job.remove();
          results.push({ jobId, status: "REPLAYED", newJobId });
        } else {
          results.push({ jobId, status: "NOT_FOUND" });
        }
      } catch (err: unknown) {
        results.push({ jobId, status: "FAILED", error: err instanceof Error ? err.message : String(err) });
      }
    }

    res.json({ success: true, data: results });
  } catch (err: unknown) {
    res.status(500).json({ success: false, message: "Failed to perform bulk DLQ replay" });
  }
}

// GET /api/platform/webhooks/failed
export async function getFailedWebhooksHandler(_req: Request, res: Response): Promise<void> {
  try {
    const failedDeliveries = await prisma.webhookDelivery.findMany({
      where: { status: "FAILED" },
      include: {
        webhook: { select: { id: true, name: true, url: true } },
        retryHistories: { orderBy: { createdAt: "desc" } },
      },
      orderBy: { createdAt: "desc" },
      take: 100,
    });
    res.json({ success: true, data: failedDeliveries });
  } catch (err: unknown) {
    res.status(500).json({ success: false, message: "Failed to fetch failed webhooks" });
  }
}

// POST /api/platform/webhooks/:deliveryId/replay
export async function replayWebhookDeliveryHandler(req: Request, res: Response): Promise<void> {
  try {
    const deliveryId = getStringParam(req.params.deliveryId);
    const operatorId = String((req as any).admin?.id ?? "super-admin");
    const { reason } = req.body ?? {};

    const delivery = await prisma.webhookDelivery.findUnique({
      where: { id: deliveryId },
    });

    if (!delivery) {
      res.status(404).json({ success: false, message: "Webhook delivery record not found" });
      return;
    }

    const previousReplays = await prisma.replayHistory.count({
      where: { targetId: deliveryId },
    });

    if (previousReplays >= MAX_REPLAY_ATTEMPTS) {
      res.status(400).json({ success: false, message: `Maximum replay limit (${MAX_REPLAY_ATTEMPTS}) reached for webhook delivery ${deliveryId}` });
      return;
    }

    const newJobId = `replay-webhook-${deliveryId}-${Date.now()}`;
    await enqueueWebhookDeliveryJob(delivery.eventId, newJobId);

    await prisma.replayHistory.create({
      data: {
        targetType: "WEBHOOK",
        targetId: deliveryId,
        originalJobId: deliveryId,
        newJobId,
        reason: String(reason ?? "Manual Webhook Delivery Replay"),
        result: "SUCCESS",
        operatorId,
        replayCount: previousReplays + 1,
        maxReplayAttempts: MAX_REPLAY_ATTEMPTS,
      },
    });

    await prisma.auditLog.create({
      data: {
        tenantId: delivery.tenantId,
        userId: operatorId,
        action: "REPLAY_WEBHOOK_DELIVERY",
        purpose: "Webhook Recovery",
        metadata: { deliveryId, newJobId, eventId: delivery.eventId },
      },
    });

    replayTotal.inc({ target_type: "WEBHOOK", status: "SUCCESS" });
    res.json({ success: true, data: { deliveryId, newJobId, message: "Webhook delivery queued for replay" } });
  } catch (err: unknown) {
    replayFailedTotal.inc({ target_type: "WEBHOOK" });
    res.status(500).json({ success: false, message: "Failed to replay webhook delivery" });
  }
}

// POST /api/platform/webhooks/replay
export async function bulkReplayWebhookDeliveriesHandler(req: Request, res: Response): Promise<void> {
  try {
    const { ids } = req.body ?? {};
    if (!Array.isArray(ids) || ids.length === 0) {
      res.status(400).json({ success: false, message: "Request body must contain an 'ids' array" });
      return;
    }

    const operatorId = String((req as any).admin?.id ?? "super-admin");
    const results = [];

    for (const idItem of ids) {
      const deliveryId = String(idItem);
      try {
        const delivery = await prisma.webhookDelivery.findUnique({ where: { id: deliveryId } });
        if (delivery) {
          const newJobId = `bulk-replay-webhook-${deliveryId}-${Date.now()}`;
          await enqueueWebhookDeliveryJob(delivery.eventId, newJobId);
          await prisma.replayHistory.create({
            data: {
              targetType: "WEBHOOK",
              targetId: deliveryId,
              originalJobId: deliveryId,
              newJobId,
              reason: "Bulk Webhook Replay",
              result: "SUCCESS",
              operatorId,
            },
          });
          results.push({ deliveryId, status: "REPLAYED", newJobId });
        } else {
          results.push({ deliveryId, status: "NOT_FOUND" });
        }
      } catch (err: unknown) {
        results.push({ deliveryId, status: "FAILED", error: err instanceof Error ? err.message : String(err) });
      }
    }

    res.json({ success: true, data: results });
  } catch (err: unknown) {
    res.status(500).json({ success: false, message: "Failed to perform bulk webhook replay" });
  }
}

// GET /api/platform/events/failed
export async function getFailedEventsHandler(_req: Request, res: Response): Promise<void> {
  try {
    const failedEvents = await prisma.internalEvent.findMany({
      where: { status: "FAILED" },
      orderBy: { createdAt: "desc" },
      take: 100,
    });
    res.json({ success: true, data: failedEvents });
  } catch (err: unknown) {
    res.status(500).json({ success: false, message: "Failed to fetch failed internal events" });
  }
}

// POST /api/platform/events/:eventId/replay
export async function replayInternalEventHandler(req: Request, res: Response): Promise<void> {
  try {
    const eventId = getStringParam(req.params.eventId);
    const operatorId = String((req as any).admin?.id ?? "super-admin");
    const { reason } = req.body ?? {};

    const event = await prisma.internalEvent.findUnique({ where: { id: eventId } });
    if (!event) {
      res.status(404).json({ success: false, message: "Internal event not found" });
      return;
    }

    if (event.status !== "FAILED") {
      res.status(400).json({ success: false, message: "Only FAILED internal events may be replayed" });
      return;
    }

    const previousReplays = await prisma.replayHistory.count({
      where: { targetId: eventId },
    });

    if (previousReplays >= MAX_REPLAY_ATTEMPTS) {
      res.status(400).json({ success: false, message: `Maximum replay limit (${MAX_REPLAY_ATTEMPTS}) reached for event ${eventId}` });
      return;
    }

    const newJobId = `replay-event-${eventId}-${Date.now()}`;
    await enqueueInternalEventJob(eventId, newJobId);

    await prisma.replayHistory.create({
      data: {
        targetType: "INTERNAL_EVENT",
        targetId: eventId,
        originalJobId: eventId,
        newJobId,
        reason: String(reason ?? "Manual Internal Event Replay"),
        result: "SUCCESS",
        operatorId,
        replayCount: previousReplays + 1,
        maxReplayAttempts: MAX_REPLAY_ATTEMPTS,
      },
    });

    await prisma.auditLog.create({
      data: {
        tenantId: event.tenantId,
        userId: operatorId,
        action: "REPLAY_INTERNAL_EVENT",
        purpose: "Event Recovery",
        metadata: { eventId, newJobId },
      },
    });

    replayTotal.inc({ target_type: "INTERNAL_EVENT", status: "SUCCESS" });
    res.json({ success: true, data: { eventId, newJobId, message: "Internal event queued for replay" } });
  } catch (err: unknown) {
    replayFailedTotal.inc({ target_type: "INTERNAL_EVENT" });
    res.status(500).json({ success: false, message: "Failed to replay internal event" });
  }
}

// POST /api/platform/events/replay
export async function bulkReplayInternalEventsHandler(req: Request, res: Response): Promise<void> {
  try {
    const { ids } = req.body ?? {};
    if (!Array.isArray(ids) || ids.length === 0) {
      res.status(400).json({ success: false, message: "Request body must contain an 'ids' array" });
      return;
    }

    const operatorId = String((req as any).admin?.id ?? "super-admin");
    const results = [];

    for (const idItem of ids) {
      const eventId = String(idItem);
      try {
        const event = await prisma.internalEvent.findUnique({ where: { id: eventId } });
        if (event && event.status === "FAILED") {
          const newJobId = `bulk-replay-event-${eventId}-${Date.now()}`;
          await enqueueInternalEventJob(eventId, newJobId);
          await prisma.replayHistory.create({
            data: {
              targetType: "INTERNAL_EVENT",
              targetId: eventId,
              originalJobId: eventId,
              newJobId,
              reason: "Bulk Event Replay",
              result: "SUCCESS",
              operatorId,
            },
          });
          results.push({ eventId, status: "REPLAYED", newJobId });
        } else {
          results.push({ eventId, status: "INVALID_OR_NOT_FAILED" });
        }
      } catch (err: unknown) {
        results.push({ eventId, status: "FAILED", error: err instanceof Error ? err.message : String(err) });
      }
    }

    res.json({ success: true, data: results });
  } catch (err: unknown) {
    res.status(500).json({ success: false, message: "Failed to perform bulk event replay" });
  }
}

// GET /api/platform/retries
export async function getRetriesHandler(_req: Request, res: Response): Promise<void> {
  try {
    const retries = await prisma.webhookRetryHistory.findMany({
      include: {
        delivery: {
          select: { id: true, tenantId: true, webhookId: true, eventId: true, status: true },
        },
      },
      orderBy: { createdAt: "desc" },
      take: 100,
    });
    res.json({ success: true, data: retries });
  } catch (err: unknown) {
    res.status(500).json({ success: false, message: "Failed to fetch retry history" });
  }
}

// GET /api/platform/scheduled-jobs
export async function getScheduledJobsHandler(_req: Request, res: Response): Promise<void> {
  try {
    const executions = await prisma.cleanupExecution.findMany({
      orderBy: { startedAt: "desc" },
      take: 100,
    });
    res.json({ success: true, data: executions });
  } catch (err: unknown) {
    res.status(500).json({ success: false, message: "Failed to fetch scheduled jobs history" });
  }
}

// GET /api/platform/replays
export async function getReplaysHandler(_req: Request, res: Response): Promise<void> {
  try {
    const replays = await prisma.replayHistory.findMany({
      orderBy: { replayedAt: "desc" },
      take: 100,
    });
    res.json({ success: true, data: replays });
  } catch (err: unknown) {
    res.status(500).json({ success: false, message: "Failed to fetch replay history" });
  }
}

// GET /api/platform/outbox
export async function getOutboxHandler(_req: Request, res: Response): Promise<void> {
  try {
    const outboxEvents = await prisma.outboxEvent.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
    });
    res.json({ success: true, data: outboxEvents });
  } catch (err: unknown) {
    res.status(500).json({ success: false, message: "Failed to fetch outbox events" });
  }
}

// GET /api/platform/circuit-breakers
export async function getCircuitBreakersHandler(_req: Request, res: Response): Promise<void> {
  try {
    const breakers = await prisma.webhookCircuitBreaker.findMany({
      include: {
        webhook: { select: { id: true, name: true, url: true, tenantId: true } },
      },
      orderBy: { updatedAt: "desc" },
    });
    res.json({ success: true, data: breakers });
  } catch (err: unknown) {
    res.status(500).json({ success: false, message: "Failed to fetch circuit breaker states" });
  }
}
