import axios from "axios";

let inMemoryAccessToken: string | null = null;

export function setAccessToken(token: string | null) {
  inMemoryAccessToken = token;
}

export function getAccessToken(): string | null {
  return inMemoryAccessToken;
}

export const API_KEY_STORAGE_KEY = "consent_manager_api_key";

export const apiClient = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach Bearer Access Token (or API Key fallback)
apiClient.interceptors.request.use(
  (config) => {
    if (inMemoryAccessToken) {
      config.headers.Authorization = `Bearer ${inMemoryAccessToken}`;
    } else {
      const apiKey = localStorage.getItem(API_KEY_STORAGE_KEY);
      if (apiKey) {
        config.headers["X-API-Key"] = apiKey;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor with automatic token refresh on 401
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const data = error.response?.data;
      const message = data?.message || error.message;
      const originalRequest = error.config as any;

      if (
        status === 401 &&
        originalRequest &&
        !originalRequest._retry &&
        !originalRequest.url?.includes("/auth/login") &&
        !originalRequest.url?.includes("/auth/refresh") &&
        !originalRequest.url?.includes("/auth/register")
      ) {
        originalRequest._retry = true;
        try {
          const refreshRes = await axios.post(
            "/api/auth/refresh",
            {},
            { withCredentials: true }
          );
          if (refreshRes.data?.success && refreshRes.data?.accessToken) {
            setAccessToken(refreshRes.data.accessToken);
            originalRequest.headers.Authorization = `Bearer ${refreshRes.data.accessToken}`;
            return apiClient(originalRequest);
          }
        } catch (refreshErr) {
          setAccessToken(null);
          window.dispatchEvent(
            new CustomEvent("auth-unauthorized", {
              detail: { message: "Session expired. Please log in again." },
            })
          );
          return Promise.reject(refreshErr);
        }
      }

      if (status === 401 || status === 403) {
        window.dispatchEvent(
          new CustomEvent("auth-unauthorized", { detail: { message } })
        );
      } else if (status === 429) {
        const retryAfter = error.response?.headers["retry-after"];
        window.dispatchEvent(
          new CustomEvent("rate-limited", {
            detail: { message: "Too many requests. Please slow down.", retryAfter },
          })
        );
      } else {
        window.dispatchEvent(
          new CustomEvent("api-error", {
            detail: { message: message || "An unexpected error occurred." },
          })
        );
      }
    }
    return Promise.reject(error);
  }
);
