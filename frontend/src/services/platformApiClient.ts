import axios from "axios";

export const SUPER_ADMIN_JWT_STORAGE_KEY = "consent_manager_super_admin_jwt";

export const platformApiClient = axios.create({
  baseURL: "/api/platform",
  headers: {
    "Content-Type": "application/json",
  },
});

platformApiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(SUPER_ADMIN_JWT_STORAGE_KEY);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

platformApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        localStorage.removeItem(SUPER_ADMIN_JWT_STORAGE_KEY);
        if (window.location.pathname !== "/platform/login") {
          window.location.href = "/platform/login";
        }
      }
    }
    return Promise.reject(error);
  }
);
