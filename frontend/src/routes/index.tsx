import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { API_KEY_STORAGE_KEY } from "../services/apiClient";
import { DashboardLayout } from "../layouts/DashboardLayout";

// Wrapper for checking if authenticated
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
