import { Request, Response } from "express";
import { AppError } from "../utils/app-error";
import { archivePolicy, createPolicy, createPolicyVersion, getPolicy, listPolicies, listPolicyVersions } from "../services/policy.service";

function requireTenantId(req: Request): string {
  if (!req.auth?.tenantId) throw new AppError(400, "Authenticated tenant is required");
  return req.auth.tenantId;
}

function requireString(value: unknown, message: string): string {
  if (typeof value !== "string") throw new AppError(400, message);
  return value;
}

export async function createPolicyHandler(req: Request, res: Response): Promise<void> {
  const policy = await createPolicy({ tenantId: requireTenantId(req), ...req.body });
  res.status(201).json({ success: true, data: policy });
}

export async function listPoliciesHandler(req: Request, res: Response): Promise<void> {
  const policies = await listPolicies(requireTenantId(req));
  res.json({ success: true, data: policies });
}

export async function getPolicyHandler(req: Request, res: Response): Promise<void> {
  const policy = await getPolicy(requireTenantId(req), requireString(req.params.id, "id is required"));
  res.json({ success: true, data: policy });
}

export async function archivePolicyHandler(req: Request, res: Response): Promise<void> {
  const policy = await archivePolicy(requireTenantId(req), requireString(req.params.id, "id is required"));
  res.json({ success: true, data: policy });
}

export async function createPolicyVersionHandler(req: Request, res: Response): Promise<void> {
  const policy = await createPolicyVersion(requireTenantId(req), requireString(req.params.id, "id is required"), req.body.content);
  res.status(201).json({ success: true, data: policy });
}

export async function listPolicyVersionsHandler(req: Request, res: Response): Promise<void> {
  const policies = await listPolicyVersions(requireTenantId(req), requireString(req.params.id, "id is required"));
  res.json({ success: true, data: policies });
}
