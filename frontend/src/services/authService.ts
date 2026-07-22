import { apiClient, setAccessToken } from "./apiClient";

export interface UserProfile {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: string;
  isActive: boolean;
  lastLoginAt?: string;
  tenant: {
    id: string;
    name: string;
    slug: string;
    status: string;
  };
}

export interface UserSession {
  id: string;
  device?: string;
  ipAddress?: string;
  userAgent?: string;
  lastUsedAt: string;
  createdAt: string;
}

export const authService = {
  async register(data: any) {
    const res = await apiClient.post("/auth/register", data);
    if (res.data?.accessToken) {
      setAccessToken(res.data.accessToken);
    }
    return res.data;
  },

  async login(data: { email: string; password: string; tenantSlug?: string }) {
    const res = await apiClient.post("/auth/login", data);
    if (res.data?.accessToken) {
      setAccessToken(res.data.accessToken);
    }
    return res.data;
  },

  async logout() {
    try {
      await apiClient.post("/auth/logout");
    } finally {
      setAccessToken(null);
    }
  },

  async logoutAll() {
    try {
      await apiClient.post("/auth/logout-all");
    } finally {
      setAccessToken(null);
    }
  },

  async getMe(): Promise<{ success: boolean; data: UserProfile }> {
    const res = await apiClient.get("/auth/me");
    return res.data;
  },

  async getSessions(): Promise<{ success: boolean; data: UserSession[]; currentSessionId: string }> {
    const res = await apiClient.get("/auth/sessions");
    return res.data;
  },

  async revokeSession(sessionId: string) {
    const res = await apiClient.delete(`/auth/sessions/${sessionId}`);
    return res.data;
  },

  async changePassword(data: { currentPassword: string; newPassword: string }) {
    const res = await apiClient.post("/auth/change-password", data);
    if (res.data?.accessToken) {
      setAccessToken(res.data.accessToken);
    }
    return res.data;
  },

  async forgotPassword(data: { email: string; tenantSlug?: string }) {
    const res = await apiClient.post("/auth/forgot-password", data);
    return res.data;
  },

  async resetPassword(data: { token: string; newPassword: string }) {
    const res = await apiClient.post("/auth/reset-password", data);
    return res.data;
  },
};
