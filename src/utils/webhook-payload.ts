import type { InternalEventType } from "../events/internal-event-types";

export interface WebhookDeliveryPayload {
  event: InternalEventType;
  timestamp: string;
  tenantId: string;
  data: Record<string, unknown>;
}

export function buildWebhookPayload(input: {
  event: InternalEventType;
  tenantId: string;
  data: Record<string, unknown>;
  timestamp?: string;
}): WebhookDeliveryPayload {
  return {
    event: input.event,
    timestamp: input.timestamp ?? new Date().toISOString(),
    tenantId: input.tenantId,
    data: input.data,
  };
}