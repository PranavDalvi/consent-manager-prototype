export interface Policy {
  id: string;
  title: string;
  purpose: string;
  version: number;
  content: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ApiKey {
  id: string;
  tenantId: string;
  name: string;
  keyPrefix: string;
  isActive: boolean;
  lastUsedAt: string | null;
  expiresAt: string | null;
  revokedAt: string | null;
  createdAt: string;
  updatedAt: string;
  key?: string; // only present upon creation
}

export type ConsentStatus = "GRANTED" | "REVOKED";
export const ConsentStatus = {
  GRANTED: "GRANTED" as const,
  REVOKED: "REVOKED" as const,
};

export interface Consent {
  id: string;
  tenantId: string;
  userId: string;
  policyId: string;
  purpose: string;
  status: ConsentStatus;
  policyVersion: number;
  createdAt: string;
  policy?: Policy;
}

export interface AuditLog {
  id: string;
  tenantId: string;
  userId: string;
  action: string;
  purpose: string | null;
  metadata: any | null;
  createdAt: string;
}

export interface Webhook {
  id: string;
  tenantId: string;
  name: string;
  url: string;
  secret: string;
  events: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface InternalEvent {
  id: string;
  tenantId: string;
  type: string;
  payload: any;
  status: string;
  createdAt: string;
  updatedAt: string;
  dispatchedAt: string | null;
  processedAt: string | null;
}

export interface TouchpointPolicy {
  id?: string;
  policyId: string;
  policy?: Policy;
  isRequired: boolean;
  displayOrder: number;
  customLabel?: string;
}

export interface Touchpoint {
  id: string;
  tenantId: string;
  name: string;
  slug: string;
  description?: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  policies?: TouchpointPolicy[];
}

export interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  pagination?: Pagination;
  message?: string;
}
