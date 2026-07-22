import { apiClient, setAccessToken } from "./apiClient";

export interface TeamMember {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: string;
  isActive: boolean;
  lastLoginAt?: string;
  createdAt: string;
}

export interface PendingInvite {
  id: string;
  email: string;
  role: string;
  expiresAt: string;
  createdAt: string;
  createdBy: string;
}

export const teamService = {
  async getMembers(): Promise<{ success: boolean; data: TeamMember[] }> {
    const res = await apiClient.get("/team/members");
    return res.data;
  },

  async getInvitations(): Promise<{ success: boolean; data: PendingInvite[] }> {
    const res = await apiClient.get("/team/invites");
    return res.data;
  },

  async inviteUser(data: { email: string; role: string }) {
    const res = await apiClient.post("/team/invites", data);
    return res.data;
  },

  async resendInvite(inviteId: string) {
    const res = await apiClient.post(`/team/invites/${inviteId}/resend`);
    return res.data;
  },

  async revokeInvite(inviteId: string) {
    const res = await apiClient.delete(`/team/invites/${inviteId}`);
    return res.data;
  },

  async getPublicInviteDetails(token: string) {
    const res = await apiClient.get(`/team/invites/public/${token}`);
    return res.data;
  },

  async acceptInvite(data: { token: string; password: string; firstName?: string; lastName?: string }) {
    const res = await apiClient.post("/team/invites/accept", data);
    if (res.data?.accessToken) {
      setAccessToken(res.data.accessToken);
    }
    return res.data;
  },

  async updateMemberStatus(userId: string, isActive: boolean) {
    const res = await apiClient.patch(`/team/members/${userId}/status`, { isActive });
    return res.data;
  },

  async removeMember(userId: string) {
    const res = await apiClient.delete(`/team/members/${userId}`);
    return res.data;
  },
};
