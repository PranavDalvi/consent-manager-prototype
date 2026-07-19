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
      res.status(401).json({
        success: false,
        message: "Invalid or missing API key",
      });

      return;
    }

    const rawApiKey = apiKeyHeader.trim();

    if (!rawApiKey) {
      res.status(401).json({
        success: false,
        message: "Invalid or missing API key",
      });

      return;
    }

    if (!isValidApiKeyFormat(rawApiKey)) {
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
