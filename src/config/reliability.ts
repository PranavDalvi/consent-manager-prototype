import dotenv from "dotenv";
dotenv.config();

export const reliabilityConfig = {
  retry: {
    maxRetries: Number(process.env.RETRY_MAX_RETRIES ?? 5),
    initialDelayMs: Number(process.env.RETRY_INITIAL_DELAY_MS ?? 1000),
    maxDelayMs: Number(process.env.RETRY_MAX_DELAY_MS ?? 60000),
    backoffMultiplier: Number(process.env.RETRY_BACKOFF_MULTIPLIER ?? 2),
    enableJitter: (process.env.RETRY_ENABLE_JITTER ?? "true") === "true",
  },
  circuitBreaker: {
    failureThreshold: Number(process.env.CIRCUIT_BREAKER_FAILURE_THRESHOLD ?? 5),
    openTimeoutMs: Number(process.env.CIRCUIT_BREAKER_OPEN_TIMEOUT_MS ?? 30000),
    halfOpenMaxRequests: Number(process.env.CIRCUIT_BREAKER_HALF_OPEN_MAX_REQUESTS ?? 1),
  },
  retention: {
    webhookRetentionDays: Number(process.env.WEBHOOK_RETENTION_DAYS ?? 30),
    dlqRetentionDays: Number(process.env.DLQ_RETENTION_DAYS ?? 14),
    logRetentionDays: Number(process.env.LOG_RETENTION_DAYS ?? 30),
    replayRetentionDays: Number(process.env.REPLAY_RETENTION_DAYS ?? 30),
  },
};
