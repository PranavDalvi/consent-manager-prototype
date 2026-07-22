import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { API_KEY_STORAGE_KEY, getAccessToken } from "../services/apiClient";
import { SUPER_ADMIN_JWT_STORAGE_KEY } from "../services/platformApiClient";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { PlatformLayout } from "../layouts/PlatformLayout";
import { authService } from "../services/authService";
import { Loader2 } from "lucide-react";

export const ProtectedRoute: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if in-memory JWT access token exists or attempt automatic token refresh/getMe
    if (getAccessToken() || localStorage.getItem(API_KEY_STORAGE_KEY)) {
      setIsAuthenticated(true);
      return;
    }

    // Try fetching /auth/me (will trigger automatic cookie refresh interceptor if cookie exists)
    authService
      .getMe()
      .then((res) => {
        if (res.success) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export const PlatformProtectedRoute: React.FC = () => {
  const isSuperAdminAuthenticated = !!localStorage.getItem(SUPER_ADMIN_JWT_STORAGE_KEY);

  if (!isSuperAdminAuthenticated) {
    return <Navigate to="/platform/login" replace />;
  }

  return <PlatformLayout />;
};
