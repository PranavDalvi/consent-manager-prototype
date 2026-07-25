import { Router } from "express";
import {
  createTouchpointHandler,
  listTouchpointsHandler,
  getTouchpointHandler,
  updateTouchpointHandler,
  deleteTouchpointHandler,
  getTouchpointConfigHandler,
} from "../controllers/touchpoint.controller";
import { tenantAuthMiddleware } from "../middlewares/tenant-auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { createTouchpointSchema, updateTouchpointSchema } from "../validators/touchpoint.validator";

const router = Router();

router.get("/", tenantAuthMiddleware, listTouchpointsHandler);
router.post("/", tenantAuthMiddleware, validate(createTouchpointSchema, "body"), createTouchpointHandler);
router.get("/:id", tenantAuthMiddleware, getTouchpointHandler);
router.put("/:id", tenantAuthMiddleware, validate(updateTouchpointSchema, "body"), updateTouchpointHandler);
router.delete("/:id", tenantAuthMiddleware, deleteTouchpointHandler);

// Public/API-Key endpoint to resolve touchpoint policy requirements & user consent status
router.get("/config/:slug", tenantAuthMiddleware, getTouchpointConfigHandler);

export default router;
