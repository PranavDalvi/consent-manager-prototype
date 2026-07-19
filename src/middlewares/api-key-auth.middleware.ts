import {
  NextFunction,
  Request,
  Response,
} from "express";
import { authenticateApiKey } from "../services/api-key.service";
import {
  isValidApiKeyFormat,
} from "../utils/api-key";


export async function apiKeyAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const apiKeyHeader = req.header(
      "x-api-key"
    );



    if (!apiKeyHeader) {
      console.log("[api-key-auth] missing header");
      res.status(401).json({
        success: false,
        message: "Invalid or missing API key",
      });

      return;
    }

    const rawApiKey = apiKeyHeader.trim();

    console.log("[api-key-auth] final-check trace", {
      headerPrefix: rawApiKey.slice(0, 15),
      headerLength: rawApiKey.length,
      route: req.method + " " + req.originalUrl,
    });

    if (!rawApiKey) {
      console.log("[api-key-auth] empty header after trim");
      res.status(401).json({
        success: false,
        message: "Invalid or missing API key",
      });

      return;
    }

    if (!isValidApiKeyFormat(rawApiKey)) {
      console.log("[api-key-auth] invalid format", {
        headerPrefix: rawApiKey.slice(0, 15),
      });
      res.status(401).json({
        success: false,
        message: "Invalid or missing API key",
      });

      return;
    }

    const authContext = await authenticateApiKey(
      rawApiKey
    );

    if (!authContext) {
      console.log("[api-key-auth] auth context null", {
        headerPrefix: rawApiKey.slice(0, 15),
      });
      res.status(401).json({
        success: false,
        message: "Invalid or missing API key",
      });

      return;
    }

    req.auth = authContext;

    next();
  } catch (error) {
    next(error);
  }
}
