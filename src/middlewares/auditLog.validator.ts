import {z} from "zod";

export const createAuditLogSchema = z.object({
  tenantId: z.string().min(1),
  userId: z.string().min(1),
  action: z.string().min(1),
  details: z.record(z.string(), z.any()).optional(),
});

export const fetchAuditLogsSchema = z.object({
  tenantId: z.string().min(1),
  userId: z.string().min(1),
});