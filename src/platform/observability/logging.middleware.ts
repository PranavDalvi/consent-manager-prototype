import { Request, Response, NextFunction } from "express";
import { randomUUID } from "crypto";
import { logger } from "./pino-logger";

export interface LogEntry {
  id: string;
  requestId: string;
  correlationId: string;
  tenantId?: string;
  method: string;
  endpoint: string;
  statusCode: number;
  level: "info" | "warn" | "error";
  message: string;
  responseTimeMs: number;
  timestamp: string;
}

const MAX_IN_MEMORY_LOGS = 1000;
export const logBuffer: LogEntry[] = [];

export function recordLogEntry(entry: LogEntry): void {
  logBuffer.unshift(entry);
  if (logBuffer.length > MAX_IN_MEMORY_LOGS) {
    logBuffer.pop();
  }
}

export function observabilityMiddleware(req: Request, res: Response, next: NextFunction): void {
  const startTime = Date.now();

  const correlationId = (req.header("X-Correlation-ID") || req.header("x-correlation-id") || randomUUID()) as string;
  const requestId = randomUUID();

  req.correlationId = correlationId;
  req.requestId = requestId;

  res.setHeader("X-Correlation-ID", correlationId);
  res.setHeader("X-Request-ID", requestId);

  res.on("finish", () => {
    const duration = Date.now() - startTime;
    const tenantId = req.auth?.tenantId;
    const statusCode = res.statusCode;
    const level = statusCode >= 500 ? "error" : statusCode >= 400 ? "warn" : "info";

    logger.info({
      requestId,
      correlationId,
      tenantId,
      method: req.method,
      url: req.originalUrl,
      statusCode,
      responseTimeMs: duration,
    }, `${req.method} ${req.originalUrl} ${statusCode} in ${duration}ms`);

    recordLogEntry({
      id: randomUUID(),
      requestId,
      correlationId,
      tenantId,
      method: req.method,
      endpoint: req.originalUrl,
      statusCode,
      level,
      message: `${req.method} ${req.originalUrl} completed with status ${statusCode}`,
      responseTimeMs: duration,
      timestamp: new Date().toISOString(),
    });
  });

  next();
}
