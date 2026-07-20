import { Request, Response } from "express";
import { fetchAuditLogs } from "../services/auditLogs.service";

export const fetchAuditLogsHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.auth?.tenantId) {
      res.status(400).json({
        message: "Authenticated tenant is required",
      });
      return;
    }

    const { userId, action, page, limit } = req.query;

    const result = await fetchAuditLogs(req.auth.tenantId, {
      userId: typeof userId === "string" ? userId : undefined,
      action: typeof action === "string" ? action : undefined,
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
    });

    res.json({
      success: true,
      data: result.items,
      pagination: result.pagination,
    });
  } catch (error) {
    console.error("Failed to fetch audit logs:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};