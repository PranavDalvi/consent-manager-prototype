import axios from "axios";

export const API_KEY_STORAGE_KEY = "consent_manager_api_key";

export const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach the API key
apiClient.interceptors.request.use(
  (config) => {
    const apiKey = localStorage.getItem(API_KEY_STORAGE_KEY);
    if (apiKey) {
      config.headers["X-API-Key"] = apiKey;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle global errors (401, 403, 429, 500)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const data = error.response?.data;
      const message = data?.message || error.message;

      if (status === 401 || status === 403) {
        // Clear API key and trigger redirect event
        localStorage.removeItem(API_KEY_STORAGE_KEY);
        window.dispatchEvent(new CustomEvent("auth-unauthorized", { detail: { message } }));
      } else if (status === 429) {
        // Rate limit hit
        const retryAfter = error.response?.headers["retry-after"];
        window.dispatchEvent(
          new CustomEvent("rate-limited", {
            detail: { message: "Too many requests. Please slow down.", retryAfter },
          })
        );
      } else {
        // General error dispatch
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
