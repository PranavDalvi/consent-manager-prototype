import { Request, Response } from "express";
import {
  createTouchpoint,
  listTouchpoints,
  getTouchpoint,
  updateTouchpoint,
  deleteTouchpoint,
  getTouchpointConsentConfig,
} from "../services/touchpoint.service";
import { AppError } from "../utils/app-error";

function requireTenantId(req: Request): string {
  if (!req.auth?.tenantId) {
    throw new AppError(400, "Authenticated tenant is required");
  }
  return req.auth.tenantId;
}

export async function createTouchpointHandler(req: Request, res: Response): Promise<void> {
  const tenantId = requireTenantId(req);
  const touchpoint = await createTouchpoint({ tenantId, ...req.body });
  res.status(201).json({
    success: true,
    data: touchpoint,
  });
}

export async function listTouchpointsHandler(req: Request, res: Response): Promise<void> {
  const tenantId = requireTenantId(req);
  const touchpoints = await listTouchpoints(tenantId);
  res.json({
    success: true,
    data: touchpoints,
  });
}

export async function getTouchpointHandler(req: Request, res: Response): Promise<void> {
  const tenantId = requireTenantId(req);
  const touchpoint = await getTouchpoint(tenantId, req.params.id);
  res.json({
    success: true,
    data: touchpoint,
  });
}

export async function updateTouchpointHandler(req: Request, res: Response): Promise<void> {
  const tenantId = requireTenantId(req);
  const touchpoint = await updateTouchpoint(tenantId, req.params.id, req.body);
  res.json({
    success: true,
    data: touchpoint,
  });
}

export async function deleteTouchpointHandler(req: Request, res: Response): Promise<void> {
  const tenantId = requireTenantId(req);
  const result = await deleteTouchpoint(tenantId, req.params.id);
  res.json({
    success: true,
    data: result,
  });
}

export async function getTouchpointConfigHandler(req: Request, res: Response): Promise<void> {
  const tenantId = requireTenantId(req);
  const { slug } = req.params;
  const userId = typeof req.query.userId === "string" ? req.query.userId : undefined;

  const config = await getTouchpointConsentConfig(tenantId, slug, userId);
  res.json({
    success: true,
    data: config,
  });
}
