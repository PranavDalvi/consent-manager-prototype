import { Request, Response } from "express";
import { fetchAuditLogs } from "../services/auditLogs.service";
export const fetchAuditLogsHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.query;

    if (!userId) {
      res.status(400).json({
        message: "userId is required",
      });
      return;
    }

    if (!req.auth?.tenantId) {
      res.status(400).json({
        message: "Authenticated tenant is required",
      });
      return;
    }

    const logs = await fetchAuditLogs(userId as string, req.auth.tenantId);

    res.json({
      success: true,
      data: logs,
    });
  } catch (error) {
    console.error("Failed to fetch audit logs:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};