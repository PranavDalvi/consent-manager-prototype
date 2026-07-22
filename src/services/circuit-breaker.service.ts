import { prisma } from "../db/prisma";
import { reliabilityConfig } from "../config/reliability";

export type CircuitState = "CLOSED" | "OPEN" | "HALF_OPEN";

export async function getCircuitBreakerState(webhookId: string): Promise<{ state: CircuitState; openedAt: Date | null }> {
  const breaker = await prisma.webhookCircuitBreaker.findUnique({
    where: { webhookId },
  });

  if (!breaker) {
    return { state: "CLOSED", openedAt: null };
  }

  const now = new Date();

  if (breaker.state === "OPEN" && breaker.openedAt) {
    const elapsed = now.getTime() - breaker.openedAt.getTime();
    if (elapsed >= reliabilityConfig.circuitBreaker.openTimeoutMs) {
      // Transition to HALF_OPEN
      await prisma.webhookCircuitBreaker.update({
        where: { webhookId },
        data: {
          state: "HALF_OPEN",
          lastTestedAt: now,
        },
      });
      return { state: "HALF_OPEN", openedAt: breaker.openedAt };
    }
  }

  return { state: breaker.state as CircuitState, openedAt: breaker.openedAt };
}

export async function recordWebhookSuccess(webhookId: string): Promise<void> {
  await prisma.webhookCircuitBreaker.upsert({
    where: { webhookId },
    create: {
      webhookId,
      state: "CLOSED",
      consecutiveFailures: 0,
    },
    update: {
      state: "CLOSED",
      consecutiveFailures: 0,
      openedAt: null,
    },
  });
}

export async function recordWebhookFailure(webhookId: string): Promise<void> {
  const current = await prisma.webhookCircuitBreaker.findUnique({ where: { webhookId } });
  const consecutiveFailures = (current?.consecutiveFailures ?? 0) + 1;
  const shouldTrip = consecutiveFailures >= reliabilityConfig.circuitBreaker.failureThreshold;

  const now = new Date();

  await prisma.webhookCircuitBreaker.upsert({
    where: { webhookId },
    create: {
      webhookId,
      state: shouldTrip ? "OPEN" : "CLOSED",
      consecutiveFailures,
      openedAt: shouldTrip ? now : null,
    },
    update: {
      consecutiveFailures,
      ...(shouldTrip
        ? {
            state: "OPEN",
            openedAt: now,
          }
        : {}),
    },
  });
}
