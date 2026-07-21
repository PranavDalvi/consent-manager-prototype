import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../../db/prisma";
import { SUPER_ADMIN_JWT_SECRET } from "./super-admin.middleware";
import { PlatformMetricsService } from "../services/platform-metrics.service";
import { logBuffer } from "../observability/logging.middleware";

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

    await prisma.superAdmin.update({
      where: { id: admin.id },
      data: { lastLoginAt: new Date() },
    });

    const token = jwt.sign(
      { sub: admin.id, email: admin.email, role: admin.role },
      SUPER_ADMIN_JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({
      success: true,
      data: {
        token,
        admin: {
          id: admin.id,
          email: admin.email,
          name: admin.name,
          role: admin.role,
          lastLoginAt: admin.lastLoginAt,
        },
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getPlatformOverviewHandler(_req: Request, res: Response): Promise<void> {
  try {
    const metrics = await PlatformMetricsService.getDashboardMetrics();
    res.json({ success: true, data: metrics });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch platform metrics" });
  }
}

export async function getPlatformMetricsHandler(_req: Request, res: Response): Promise<void> {
  try {
    const metrics = await PlatformMetricsService.getDashboardMetrics();
    res.json({
      success: true,
      data: {
        traffic: metrics.traffic,
        performance: metrics.performance,
        errors: metrics.errors,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch platform traffic metrics" });
  }
}

export async function getPlatformHealthHandler(_req: Request, res: Response): Promise<void> {
  try {
    const metrics = await PlatformMetricsService.getDashboardMetrics();
    res.json({ success: true, data: metrics.infrastructure });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch infrastructure health" });
  }
}

export async function getPlatformQueuesHandler(_req: Request, res: Response): Promise<void> {
  try {
    const metrics = await PlatformMetricsService.getDashboardMetrics();
    res.json({ success: true, data: metrics.queues });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch queue metrics" });
  }
}

export async function getPlatformWebhooksHandler(_req: Request, res: Response): Promise<void> {
  try {
    const metrics = await PlatformMetricsService.getDashboardMetrics();
    res.json({ success: true, data: metrics.webhooks });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch webhook metrics" });
  }
}

export async function getPlatformSystemHandler(_req: Request, res: Response): Promise<void> {
  try {
    const metrics = await PlatformMetricsService.getDashboardMetrics();
    res.json({
      success: true,
      data: {
        uptime: metrics.infrastructure.systemUptimeSeconds,
        memoryUsageMb: metrics.infrastructure.memoryUsageMb,
        cpuUsagePercent: metrics.infrastructure.cpuUsagePercent,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch system metrics" });
  }
}

export async function getPlatformTenantsHandler(_req: Request, res: Response): Promise<void> {
  try {
    const tenants = await prisma.tenant.findMany({
      include: {
        _count: {
          select: {
            apiKeys: true,
            policies: true,
            consents: true,
            webhooks: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    const tenantList = tenants.map((tenant) => {
      const tenantLogs = logBuffer.filter((l) => l.tenantId === tenant.id);
      const requests = tenantLogs.length;
      const rateLimitHits = tenantLogs.filter((l) => l.statusCode === 429).length;

      return {
        id: tenant.id,
        name: tenant.name,
        slug: tenant.slug,
        isActive: tenant.isActive,
        createdAt: tenant.createdAt,
        apiKeysCount: tenant._count.apiKeys,
        policiesCount: tenant._count.policies,
        consentsCount: tenant._count.consents,
        webhookCount: tenant._count.webhooks,
        requests,
        rateLimitHits,
        status: tenant.isActive ? "ACTIVE" : "INACTIVE",
      };
    });

    res.json({ success: true, data: tenantList });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch tenants" });
  }
}

export async function getPlatformLogsHandler(req: Request, res: Response): Promise<void> {
  try {
    const { requestId, correlationId, tenantId, level, method, endpoint, statusCode, search } = req.query;

    let filtered = [...logBuffer];

    if (requestId && typeof requestId === "string") {
      filtered = filtered.filter((l) => l.requestId.toLowerCase().includes(requestId.toLowerCase()));
    }
    if (correlationId && typeof correlationId === "string") {
      filtered = filtered.filter((l) => l.correlationId.toLowerCase().includes(correlationId.toLowerCase()));
    }
    if (tenantId && typeof tenantId === "string") {
      filtered = filtered.filter((l) => l.tenantId && l.tenantId.toLowerCase().includes(tenantId.toLowerCase()));
    }
    if (level && typeof level === "string") {
      filtered = filtered.filter((l) => l.level === level.toLowerCase());
    }
    if (method && typeof method === "string") {
      filtered = filtered.filter((l) => l.method.toUpperCase() === method.toUpperCase());
    }
    if (endpoint && typeof endpoint === "string") {
      filtered = filtered.filter((l) => l.endpoint.toLowerCase().includes(endpoint.toLowerCase()));
    }
    if (statusCode && typeof statusCode === "string") {
      filtered = filtered.filter((l) => l.statusCode === Number(statusCode));
    }
    if (search && typeof search === "string") {
      const query = search.toLowerCase();
      filtered = filtered.filter(
        (l) =>
          l.message.toLowerCase().includes(query) ||
          l.endpoint.toLowerCase().includes(query) ||
          l.requestId.toLowerCase().includes(query) ||
          l.correlationId.toLowerCase().includes(query)
      );
    }

    res.json({ success: true, data: filtered });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch logs" });
  }
}
