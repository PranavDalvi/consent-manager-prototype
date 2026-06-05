import {Router} from "express";
import {fetchAuditLogsHandler} from "../controllers/audit.controller";
import { fetchAuditLogsSchema } from "../middlewares/auditLog.validator";
import { validate } from "../middlewares/validate.middleware";

const router = Router();

router.get("/", validate(fetchAuditLogsSchema), fetchAuditLogsHandler);

export default router;