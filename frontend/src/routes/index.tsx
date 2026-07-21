import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { API_KEY_STORAGE_KEY } from "../services/apiClient";
import { SUPER_ADMIN_JWT_STORAGE_KEY } from "../services/platformApiClient";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { PlatformLayout } from "../layouts/PlatformLayout";

// Wrapper for checking if tenant authenticated
export const ProtectedRoute: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem(API_KEY_STORAGE_KEY);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

// Wrapper for checking if Super Admin platform authenticated
export const PlatformProtectedRoute: React.FC = () => {
  const isSuperAdminAuthenticated = !!localStorage.getItem(SUPER_ADMIN_JWT_STORAGE_KEY);

  if (!isSuperAdminAuthenticated) {
    return <Navigate to="/platform/login" replace />;
  }

  return <PlatformLayout />;
};
