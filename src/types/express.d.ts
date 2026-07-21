import type { Tenant } from "../generated";

declare global {
  namespace Express {
    interface Request {
      auth?: {
        tenantId: string;
        apiKeyId: string;
      };
      superAdmin?: {
        id: string;
        email: string;
        role: string;
      };
      requestId?: string;
      correlationId?: string;
    }
  }
}

export {};
