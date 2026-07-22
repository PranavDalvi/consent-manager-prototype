import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../../db/prisma";
import { SUPER_ADMIN_JWT_SECRET } from "./super-admin.middleware";
import { PlatformMetricsService } from "../services/platform-metrics.service";
import { logBuffer } from "../observability/logging.middleware";
import {
  createPlatformTenant,
  getPlatformTenantDetails,
  updatePlatformTenant,
  updatePlatformTenantStatus,
  softDeletePlatformTenant,
} from "../services/platform-tenant.service";

export async function loginSuperAdminHandler(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ success: false, message: "Email and password are required" });
      return;
    }

    const admin = await prisma.superAdmin.findUnique({ where: { email } });

    if (!admin || !admin.isActive) {
      res.status(401).json({ success: false, message: "Invalid credentials" });
      return;
    }

    const isValidPassword = await bcrypt.compare(password, admin.passwordHash);
    if (!isValidPassword) {
      res.status(401).json({ success: false, message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      {
        sub: admin.id,
        email: admin.email,
        role: admin.role,
        isSuperAdmin: true,
      },
      SUPER_ADMIN_JWT_SECRET,
      { expiresIn: "8h" }
    );

    res.json({
      success: true,
      message: "Super Admin authenticated successfully",
      data: {
        token,
        admin: {
          id: admin.id,
          email: admin.email,
          name: admin.name,
          role: admin.role,
        },
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error during super admin login" });
  }
}

export async function getPlatformOverviewHandler(req: Request, res: Response): Promise<void> {
  try {
    const metrics = await PlatformMetricsService.getDashboardMetrics();
    res.json({
      success: true,
      data: metrics,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch platform overview" });
  }
}

export async function getPlatformMetricsHandler(req: Request, res: Response): Promise<void> {
  try {
    const metrics = await PlatformMetricsService.getDashboardMetrics();
    res.json({ success: true, data: metrics });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch platform metrics" });
  }
}

export async function getPlatformHealthHandler(req: Request, res: Response): Promise<void> {
  try {
    const metrics = await PlatformMetricsService.getDashboardMetrics();
    res.json({ success: true, data: metrics.infrastructure });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch platform health" });
  }
}

export async function getPlatformQueuesHandler(req: Request, res: Response): Promise<void> {
  try {
    const metrics = await PlatformMetricsService.getDashboardMetrics();
    res.json({ success: true, data: metrics.queues });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch queue metrics" });
  }
}

export async function getPlatformWebhooksHandler(req: Request, res: Response): Promise<void> {
  try {
    const metrics = await PlatformMetricsService.getDashboardMetrics();
    res.json({ success: true, data: metrics.webhooks });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch webhook metrics" });
  }
}

export async function getPlatformSystemHandler(req: Request, res: Response): Promise<void> {
  try {
    const metrics = await PlatformMetricsService.getDashboardMetrics();
    res.json({ success: true, data: metrics.reliability });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch system reliability metrics" });
  }
}

export async function listPlatformTenantsHandler(_req: Request, res: Response): Promise<void> {
  try {
    const tenants = await prisma.tenant.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: {
            apiKeys: true,
            policies: true,
            consents: true,
            webhooks: true,
            users: true,
          },
        },
      },
    });

    const formattedTenants = tenants.map((t) => ({
      id: t.id,
      name: t.name,
      slug: t.slug,
      status: t.status,
      isActive: t.isActive,
      createdAt: t.createdAt,
      updatedAt: t.updatedAt,
      usersCount: t._count.users,
      apiKeysCount: t._count.apiKeys,
      policiesCount: t._count.policies,
      consentsCount: t._count.consents,
      webhookCount: t._count.webhooks,
      rateLimitHits: 0,
      requests: t._count.consents + t._count.policies + t._count.apiKeys,
    }));

    res.json({
      success: true,
      data: formattedTenants,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch platform tenants" });
  }
}

export const getPlatformTenantsHandler = listPlatformTenantsHandler;

export async function createPlatformTenantHandler(req: Request, res: Response): Promise<void> {
  try {
    const { name, slug, ownerEmail, ownerFirstName, ownerLastName } = req.body;
    const superAdminId = req.superAdmin?.id || "system-super-admin";

    if (!name || !slug || !ownerEmail) {
      res.status(400).json({ success: false, message: "Name, slug, and ownerEmail are required" });
      return;
    }

    const result = await createPlatformTenant(
      { name, slug, ownerEmail, ownerFirstName, ownerLastName },
      superAdminId
    );

    res.status(201).json({
      success: true,
      message: "Tenant created successfully. Owner invitation link issued.",
      data: result,
    });
  } catch (error: any) {
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({ success: false, message: error.message || "Failed to create tenant" });
  }
}

export async function getPlatformTenantDetailsHandler(req: Request, res: Response): Promise<void> {
  try {
    const tenantId = req.params.tenantId as string;
    const tenant = await getPlatformTenantDetails(tenantId);
    res.json({ success: true, data: tenant });
  } catch (error: any) {
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({ success: false, message: error.message || "Failed to fetch tenant details" });
  }
}

export async function updatePlatformTenantHandler(req: Request, res: Response): Promise<void> {
  try {
    const tenantId = req.params.tenantId as string;
    const { name, slug } = req.body;

    const updated = await updatePlatformTenant(tenantId, { name, slug });
    res.json({ success: true, message: "Tenant updated successfully", data: updated });
  } catch (error: any) {
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({ success: false, message: error.message || "Failed to update tenant" });
  }
}

export async function updatePlatformTenantStatusHandler(req: Request, res: Response): Promise<void> {
  try {
    const tenantId = req.params.tenantId as string;
    const { status } = req.body; // ACTIVE, SUSPENDED, ARCHIVED, DELETED

    if (!status || !["ACTIVE", "SUSPENDED", "ARCHIVED", "DELETED"].includes(status)) {
      res.status(400).json({ success: false, message: "Valid status required (ACTIVE, SUSPENDED, ARCHIVED, DELETED)" });
      return;
    }

    const updated = await updatePlatformTenantStatus(tenantId, status);

    res.json({ success: true, message: `Tenant status updated to ${status}`, data: updated });
  } catch (error: any) {
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({ success: false, message: error.message || "Failed to update tenant status" });
  }
}

export async function deletePlatformTenantHandler(req: Request, res: Response): Promise<void> {
  try {
    const tenantId = req.params.tenantId as string;

    const deleted = await softDeletePlatformTenant(tenantId);
    res.json({ success: true, message: "Tenant soft deleted successfully", data: deleted });
  } catch (error: any) {
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({ success: false, message: error.message || "Failed to delete tenant" });
  }
}

export async function getPlatformLogsHandler(req: Request, res: Response): Promise<void> {
  try {
    const logs = logBuffer.slice(-100);
    res.json({
      success: true,
      data: logs,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch platform logs" });
  }
}
