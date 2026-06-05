import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { AppError } from "../utils/app-error";

export function validate<T extends z.ZodTypeAny>(
  schema: T,
  source: "body" | "query" | "params" = "body"
) {
  return (
    req: Request,
    _res: Response,
    next: NextFunction
  ) => {
    const result = schema.safeParse(req[source]);

    if (!result.success) {
      throw new AppError(
        400,
        result.error.issues[0]?.message ?? "Validation failed"
      );
    }

    req[source] = result.data;

    next();
  };
}