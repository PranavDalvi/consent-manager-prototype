import { Request, Response } from "express";
import { prisma } from "../../db/prisma";
import { webhookDeliveryQueue } from "../../queues/webhook.queue";

export async function healthHandler(_req: Request, res: Response): Promise<void> {
  res.json({
    status: "Healthy",
    service: "consent-manager-api",
    timestamp: new Date().toISOString(),
  });
}

export async function readyHandler(_req: Request, res: Response): Promise<void> {
  const checks = {
    api: true,
    database: false,
    redis: false,
    queue: false,
  };

  try {
    await prisma.$queryRaw`SELECT 1`;
    checks.database = true;
  } catch (err) {
    checks.database = false;
  }

  try {
    const client = await webhookDeliveryQueue.client;
    const pingRes = await (client as any).ping();
    checks.redis = pingRes === "PONG";
  } catch (err) {
    checks.redis = false;
  }

  try {
    const jobCounts = await webhookDeliveryQueue.getJobCounts();
    checks.queue = Boolean(jobCounts);
  } catch (err) {
    checks.queue = false;
  }

  const isReady = checks.database && checks.redis && checks.queue;
  const status = isReady ? "Healthy" : checks.database || checks.redis ? "Degraded" : "Unhealthy";
  const statusCode = isReady ? 200 : 503;

  res.status(statusCode).json({
    status,
    ready: isReady,
    checks,
    timestamp: new Date().toISOString(),
  });
}
