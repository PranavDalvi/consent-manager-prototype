import { prisma } from "../db/prisma";
import { Prisma } from "../generated";
import { buildWebhookPayload } from "../utils/webhook-payload";
import { generateWebhookSignature } from "../utils/webhook-signature";
import { AppError } from "../utils/app-error";
import { getCircuitBreakerState, recordWebhookSuccess, recordWebhookFailure } from "./circuit-breaker.service";
import { webhookDeliveriesTotal, webhookDeliveryDurationSeconds } from "../platform/metrics/prom-client";

type InternalEventRecord = {
  id: string;
  tenantId: string;
  type: string;
  payload: unknown;
  status: string;
};

type WebhookRecord = {
  id: string;
  tenantId: string;
  name: string;
  url: string;
  secret: string;
  events: string[];
  isActive: boolean;
};

async function getEventOrThrow(eventId: string): Promise<InternalEventRecord> {
  const event = await prisma.internalEvent.findUnique({ where: { id: eventId } });

  if (!event) {
    throw new AppError(404, "Internal event not found");
  }

  return event;
}

export async function deliverWebhookEvent(eventId: string, attemptCount: number = 1): Promise<void> {
  const event = await getEventOrThrow(eventId);

  const webhooks = (await prisma.webhook.findMany({
    where: {
      tenantId: event.tenantId,
      isActive: true,
      events: {
        has: event.type,
      },
    },
  })) as WebhookRecord[];

  if (webhooks.length === 0) {
    await prisma.internalEvent.update({
      where: { id: event.id },
      data: {
        processedAt: new Date(),
        status: "PROCESSED",
      },
    });
    return;
  }

  const payload = buildWebhookPayload({
    event: event.type as never,
    tenantId: event.tenantId,
    data: (event.payload as Record<string, unknown>) ?? {},
  });

  const rawBody = JSON.stringify(payload);
  const timestamp = payload.timestamp;

  const results = await Promise.allSettled(
    webhooks.map(async (webhook) => {
      // Check Circuit Breaker
      const cbState = await getCircuitBreakerState(webhook.id);
      if (cbState.state === "OPEN") {
        // Record skipped attempt due to open circuit breaker
        await prisma.webhookDelivery.create({
          data: {
            tenantId: event.tenantId,
            webhookId: webhook.id,
            eventId: event.id,
            attempt: attemptCount,
            status: "FAILED",
            duration: 0,
            errorMessage: "Circuit Breaker is OPEN. Delivery skipped to avoid hammering destination.",
          },
        });
        webhookDeliveriesTotal.inc({ status: "circuit_open" });
        throw new Error(`Circuit Breaker OPEN for webhook ${webhook.id}`);
      }

      const startTime = Date.now();
      let httpStatus: number | null = null;
      let responseBody: string | null = null;
      let responseHeaders: Record<string, string> | null = null;
      let deliveryStatus = "FAILED";
      let errorMsg: string | null = null;

      try {
        const signature = generateWebhookSignature(webhook.secret, timestamp, rawBody);
        const response = await fetch(webhook.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Webhook-Signature": signature,
            "X-Webhook-Timestamp": timestamp,
            "X-Webhook-Event": payload.event,
          },
          body: rawBody,
        });

        httpStatus = response.status;
        const duration = Date.now() - startTime;
        webhookDeliveryDurationSeconds.observe(duration / 1000);

        try {
          responseBody = await response.text();
        } catch {
          responseBody = null;
        }

        const headersObj: Record<string, string> = {};
        response.headers.forEach((val, key) => {
          headersObj[key] = val;
        });
        responseHeaders = headersObj;

        if (response.ok) {
          deliveryStatus = "SUCCESS";
          await recordWebhookSuccess(webhook.id);
          webhookDeliveriesTotal.inc({ status: "success" });
        } else {
          errorMsg = `HTTP Error ${response.status}: ${responseBody?.slice(0, 200) ?? ""}`;
          await recordWebhookFailure(webhook.id);
          webhookDeliveriesTotal.inc({ status: "failed" });
        }
      } catch (err: unknown) {
        const duration = Date.now() - startTime;
        errorMsg = err instanceof Error ? err.message : String(err);
        await recordWebhookFailure(webhook.id);
        webhookDeliveriesTotal.inc({ status: "error" });
      } finally {
        const delivery = await prisma.webhookDelivery.create({
          data: {
            tenantId: event.tenantId,
            webhookId: webhook.id,
            eventId: event.id,
            attempt: attemptCount,
            status: deliveryStatus,
            httpStatus,
            responseBody: responseBody ? responseBody.slice(0, 2000) : null,
            responseHeaders: responseHeaders ? (responseHeaders as unknown as Prisma.InputJsonValue) : Prisma.JsonNull,
            duration: Date.now() - startTime,
            errorMessage: errorMsg,
          },
        });

        // Record WebhookRetryHistory
        await prisma.webhookRetryHistory.create({
          data: {
            deliveryId: delivery.id,
            attempt: attemptCount,
            reason: errorMsg ? errorMsg.slice(0, 255) : "Execution",
            scheduledAt: new Date(startTime),
            executedAt: new Date(),
            result: deliveryStatus,
          },
        });
      }

      if (deliveryStatus !== "SUCCESS") {
        throw new Error(errorMsg ?? `Delivery failed for webhook ${webhook.id}`);
      }
    })
  );

  const failures = results.filter((result) => result.status === "rejected");

  if (failures.length > 0) {
    throw new Error(`Failed to deliver ${failures.length} webhook(s) for event ${event.type}`);
  }

  await prisma.internalEvent.update({
    where: { id: event.id },
    data: {
      processedAt: new Date(),
      status: "PROCESSED",
    },
  });
}