import type { Tenant } from "../generated";

declare global {
  namespace Express {
    interface Request {
      auth?: {
        tenantId: string;
        apiKeyId: string;
      };
    }
  }
}

export {};
