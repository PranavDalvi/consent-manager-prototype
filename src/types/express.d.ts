import type { Tenant } from "../generated";

declare global {
  namespace Express {
    interface Request {
      auth?: {
        tenantId: string;
        userId?: string;
        role?: string;
        sessionId?: string;
        apiKeyId?: string;
        authType?: "JWT" | "API_KEY";
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
