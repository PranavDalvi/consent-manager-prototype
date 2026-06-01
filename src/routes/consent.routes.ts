import { Router } from "express";
import { checkConsentHandler, fetchUserConsentsHandler, grantConsentHandler, revokeConsentHandler } from "../controllers/consent.controller";
import { fetchAuditLogsHandler } from "../controllers/audit.controller";

const router = Router();

router.post("/", grantConsentHandler);
router.post("/revoke", revokeConsentHandler);
router.get("/check", checkConsentHandler);
router.get("/user/:userId", fetchUserConsentsHandler);

export default router;