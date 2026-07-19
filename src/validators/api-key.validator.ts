import { z } from "zod";

export const createApiKeySchema = z.object({
  name: z.string().min(1).max(100),
  expiresAt: z.string().datetime().optional(),
});

export const apiKeyIdSchema = z.object({
  id: z.string().min(1),
});
