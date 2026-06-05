import { z } from "zod";

export const grantConsentSchema = z.object({
  tenantId: z.string().min(1),
  userId: z.string().min(1),
  purpose: z.string().min(1),
  policyVersion: z.string().min(1),
});

export const revokeConsentSchema = z.object({
  consentId: z.string().min(1),
});

export const checkConsentSchema = z.object({
  tenantId: z.string().min(1),
  userId: z.string().min(1),
  purpose: z.string().min(1),
});

export const fetchUserConsentsSchema = z.object({
  userId: z.string().min(1),
  tenantId: z.string().min(1),
});