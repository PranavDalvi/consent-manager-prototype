import {Router} from "express";
import {fetchAuditLogsHandler} from "../controllers/audit.controller";

const router = Router();

router.get("/:userId", fetchAuditLogsHandler);

export default router;