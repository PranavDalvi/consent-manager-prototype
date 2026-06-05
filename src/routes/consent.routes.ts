import { Router } from "express";
import { checkConsentHandler, fetchUserConsentsHandler, grantConsentHandler, revokeConsentHandler } from "../controllers/consent.controller";
import { validate } from "../middlewares/validate.middleware";
import { checkConsentSchema, fetchUserConsentsSchema, grantConsentSchema, revokeConsentSchema } from "../validators/consent.validator";

const router = Router();

router.post("/", validate(grantConsentSchema), grantConsentHandler);
router.post("/revoke/:consentId", validate(revokeConsentSchema), revokeConsentHandler);
router.get("/check", validate(checkConsentSchema), checkConsentHandler);
router.get("/:tenantId/user/:userId", validate(fetchUserConsentsSchema), fetchUserConsentsHandler);

export default router;