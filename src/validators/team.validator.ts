import { z } from "zod";
import { strongPasswordSchema } from "./auth.validator";

export const inviteUserSchema = z.object({
  email: z.string().email("Invalid email address"),
  role: z.enum(["OWNER", "ADMIN", "DEVELOPER", "VIEWER"]).default("DEVELOPER"),
});

export const acceptInviteSchema = z.object({
  token: z.string().min(1, "Invite token is required"),
  password: strongPasswordSchema,
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

export const updateMemberStatusSchema = z.object({
  isActive: z.boolean(),
});

export type InviteUserInput = z.infer<typeof inviteUserSchema>;
export type AcceptInviteInput = z.infer<typeof acceptInviteSchema>;
export type UpdateMemberStatusInput = z.infer<typeof updateMemberStatusSchema>;
