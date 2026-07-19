import { z } from "zod";

import { supportedInternalEventTypes } from "../events/internal-event-types";

const webhookEventSchema = z.enum(supportedInternalEventTypes);

export const createWebhookSchema = z.object({
  name: z.string().min(1).max(120),
  url: z.string().url().max(2048),
  events: z.array(webhookEventSchema).min(1).max(20),
});

export const updateWebhookSchema = z
  .object({
    name: z.string().min(1).max(120).optional(),
    url: z.string().url().max(2048).optional(),
    events: z.array(webhookEventSchema).min(1).max(20).optional(),
  })
  .refine((value) => value.name !== undefined || value.url !== undefined || value.events !== undefined, {
    message: "At least one webhook field must be provided",
  });

export const webhookIdSchema = z.object({
  id: z.string().min(1),
});
