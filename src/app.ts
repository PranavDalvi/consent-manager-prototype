import express from "express";
import cors from "cors";
import { prisma } from "./db/prisma";
import consentRoutes from "./routes/consent.routes";
import { errorHandler } from "./middlewares/error.middleware";
import swaggerSpec from "./docs/swagger";
import swaggerUi from "swagger-ui-express";
import auditRoutes from "./routes/audit.routes";
import apiKeyRoutes from "./routes/api-key.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/health", (_req, res) => {
	res.json({status: "ok"})
});


app.get("/db-check", async (_req, res) => {
  const count = await prisma.consent.count();

  res.json({
    consentCount: count,
  });
});


app.use("/api/consents", consentRoutes);
app.use("/api/audit", auditRoutes);
app.use("/api/api-keys", apiKeyRoutes);
app.use(errorHandler);

export default app;