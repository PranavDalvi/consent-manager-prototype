import {z} from "zod";

export const createAuditLogSchema = z.object({
  userId: z.string().min(1),
  action: z.string().min(1),
  details: z.record(z.string(), z.any()).optional(),
});

export const fetchAuditLogsSchema = z.object({
  userId: z.string().min(1, "userId is required"),
  action: z.string().optional(),
  page: z.string().optional(),
  limit: z.string().optional(),
});