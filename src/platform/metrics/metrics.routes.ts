import { Router, Request, Response } from "express";
import { register } from "./prom-client";

const router = Router();

/**
 * @swagger
 * /metrics:
 *   get:
 *     summary: Prometheus Metrics Endpoint
 *     description: Exposes application, database, system, and queue metrics in text format for Prometheus scraping.
 *     tags:
 *       - Observability
 *     responses:
 *       200:
 *         description: Prometheus format plain text metrics
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */
router.get("/metrics", async (_req: Request, res: Response): Promise<void> => {
  try {
    res.set("Content-Type", register.contentType);
    const metrics = await register.metrics();
    res.send(metrics);
  } catch (error) {
    res.status(500).send("Error generating Prometheus metrics");
  }
});

export default router;
