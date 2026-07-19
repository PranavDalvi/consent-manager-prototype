import { z } from "zod";

const idSchema = z.string().min(1);

export const createPolicySchema = z.object({
  title: z.string().min(1).max(255),
  purpose: z.string().min(1).max(255),
  version: z.coerce.number().int().positive(),
  content: z.string().min(1).max(10000),
});

export const policyIdSchema = z.object({
  id: idSchema,
});

export const createPolicyVersionSchema = z.object({
  content: z.string().min(1).max(10000),
});
