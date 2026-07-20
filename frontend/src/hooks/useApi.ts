import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../services/apiClient";
import type { ApiResponse, Policy, ApiKey, Consent, AuditLog, Webhook, InternalEvent } from "../types";

// --- POLICIES ---

export function usePolicies() {
  return useQuery<ApiResponse<Policy[]>, Error>({
    queryKey: ["policies"],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<Policy[]>>("/policies");
      return response.data;
    },
  });
}

export function useCreatePolicy() {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse<Policy>, Error, { title: string; purpose: string; version: number; content: string }>({
    mutationFn: async (data) => {
      const response = await apiClient.post<ApiResponse<Policy>>("/policies", data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["policies"] });
    },
  });
}

export function useArchivePolicy() {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse<Policy>, Error, string>({
    mutationFn: async (id) => {
      const response = await apiClient.patch<ApiResponse<Policy>>(`/policies/${id}/archive`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["policies"] });
    },
  });
}

export function useCreatePolicyVersion() {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse<Policy>, Error, { policyId: string; content: string }>({
    mutationFn: async ({ policyId, content }) => {
      const response = await apiClient.post<ApiResponse<Policy>>(`/policies/${policyId}/versions`, { content });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["policies"] });
      queryClient.invalidateQueries({ queryKey: ["policy-versions"] });
    },
  });
}

export function usePolicyVersions(policyId: string | undefined) {
  return useQuery<ApiResponse<Policy[]>, Error>({
    queryKey: ["policy-versions", policyId],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<Policy[]>>(`/policies/${policyId}/versions`);
      return response.data;
    },
    enabled: !!policyId,
  });
}

// --- API KEYS ---

export function useApiKeys() {
  return useQuery<ApiResponse<ApiKey[]>, Error>({
    queryKey: ["api-keys"],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<ApiKey[]>>("/api-keys");
      return response.data;
    },
  });
}

export function useCreateApiKey() {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse<ApiKey>, Error, { name: string; expiresAt?: string }>({
    mutationFn: async (data) => {
      const response = await apiClient.post<ApiResponse<ApiKey>>("/api-keys", data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["api-keys"] });
    },
  });
}

export function useRevokeApiKey() {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse<ApiKey>, Error, string>({
    mutationFn: async (id) => {
      const response = await apiClient.patch<ApiResponse<ApiKey>>(`/api-keys/${id}/revoke`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["api-keys"] });
    },
  });
}

// --- CONSENTS ---

interface ConsentFilters {
  userId?: string;
  purpose?: string;
  status?: string;
  page?: number;
  limit?: number;
}

export function useConsents(filters: ConsentFilters) {
  return useQuery<ApiResponse<Consent[]>, Error>({
    queryKey: ["consents", filters],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<Consent[]>>("/consents", { params: filters });
      return response.data;
    },
  });
}

export function useGrantConsent() {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse<Consent>, Error, { userId: string; policyId: string }>({
    mutationFn: async (data) => {
      const response = await apiClient.post<ApiResponse<Consent>>("/consents", data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["consents"] });
      queryClient.invalidateQueries({ queryKey: ["audit-logs"] });
    },
  });
}

export function useRevokeConsent() {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse<Consent>, Error, string>({
    mutationFn: async (consentId) => {
      const response = await apiClient.post<ApiResponse<Consent>>(`/consents/revoke/${consentId}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["consents"] });
      queryClient.invalidateQueries({ queryKey: ["audit-logs"] });
    },
  });
}

// --- AUDIT LOGS ---

interface AuditFilters {
  userId?: string;
  action?: string;
  page?: number;
  limit?: number;
}

export function useAuditLogs(filters: AuditFilters) {
  return useQuery<ApiResponse<AuditLog[]>, Error>({
    queryKey: ["audit-logs", filters],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<AuditLog[]>>("/audit", { params: filters });
      return response.data;
    },
  });
}

// --- WEBHOOKS ---

export function useWebhooks() {
  return useQuery<ApiResponse<Webhook[]>, Error>({
    queryKey: ["webhooks"],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<Webhook[]>>("/webhooks");
      return response.data;
    },
  });
}

export function useCreateWebhook() {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse<Webhook>, Error, { name: string; url: string; events: string[] }>({
    mutationFn: async (data) => {
      const response = await apiClient.post<ApiResponse<Webhook>>("/webhooks", data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["webhooks"] });
    },
  });
}

export function useUpdateWebhook() {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse<Webhook>, Error, { id: string; name?: string; url?: string; events?: string[] }>({
    mutationFn: async ({ id, ...data }) => {
      const response = await apiClient.patch<ApiResponse<Webhook>>(`/webhooks/${id}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["webhooks"] });
    },
  });
}

export function useToggleWebhook() {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse<Webhook>, Error, { id: string; active: boolean }>({
    mutationFn: async ({ id, active }) => {
      const endpoint = active ? `/webhooks/${id}/enable` : `/webhooks/${id}/disable`;
      const response = await apiClient.patch<ApiResponse<Webhook>>(endpoint);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["webhooks"] });
    },
  });
}

export function useDeleteWebhook() {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse<Webhook>, Error, string>({
    mutationFn: async (id) => {
      const response = await apiClient.delete<ApiResponse<Webhook>>(`/webhooks/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["webhooks"] });
    },
  });
}

// --- EVENTS ---

export function useEvents() {
  return useQuery<ApiResponse<InternalEvent[]>, Error>({
    queryKey: ["events"],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<InternalEvent[]>>("/events");
      return response.data;
    },
  });
}
