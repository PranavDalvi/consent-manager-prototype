import { z } from "zod";

export const createTouchpointSchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9_-]+$/, "Slug must contain only lowercase letters, numbers, hyphens, and underscores"),
  description: z.string().optional(),
  policies: z.array(
    z.object({
      policyId: z.string().min(1, "Policy ID is required"),
      isRequired: z.boolean().default(true),
      displayOrder: z.number().int().default(0),
      customLabel: z.string().optional(),
    })
  ).optional(),
});

export const updateTouchpointSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().optional(),
  isActive: z.boolean().optional(),
  policies: z.array(
    z.object({
      policyId: z.string().min(1),
      isRequired: z.boolean().default(true),
      displayOrder: z.number().int().default(0),
      customLabel: z.string().optional(),
    })
  ).optional(),
});
