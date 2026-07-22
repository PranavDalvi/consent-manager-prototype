import { Router } from "express";
import { tenantAuthMiddleware } from "../middlewares/tenant-auth.middleware";
import { prisma } from "../db/prisma";

const router = Router();

/**
 * @swagger
 * /events:
 *   get:
 *     summary: List recent domain events for the tenant
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *       - Events
 */
router.get("/", tenantAuthMiddleware, async (req, res, next) => {
  try {
    const tenantId = req.auth?.tenantId;
    if (!tenantId) {
      res.status(400).json({ message: "Authenticated tenant is required" });
      return;
    }

    const events = await prisma.internalEvent.findMany({
      where: { tenantId },
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    res.json({ success: true, data: events });
  } catch (error) {
    next(error);
  }
});

export default router;
