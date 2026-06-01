import { Request, Response } from "express";
import { fetchAuditLogs } from "../services/auditLogs.service";
export const fetchAuditLogsHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;

    if (!userId) {
      res.status(400).json({
        message: "userId is required",
      });
      return;
    }

    const logs = await fetchAuditLogs(userId as string);

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