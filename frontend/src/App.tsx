import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AlertTriangle, X } from "lucide-react";

import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { ApiKeys } from "./pages/ApiKeys";
import { Policies } from "./pages/Policies";
import { Consents } from "./pages/Consents";
import { AuditLogs } from "./pages/AuditLogs";
import { Webhooks } from "./pages/Webhooks";

import { PlatformLogin } from "./pages/platform/PlatformLogin";
import { PlatformDashboard } from "./pages/platform/PlatformDashboard";
import { PlatformTenants } from "./pages/platform/PlatformTenants";
import { PlatformLogViewer } from "./pages/platform/PlatformLogViewer";
import { PlatformMetricsView } from "./pages/platform/PlatformMetricsView";
import { PlatformQueuesView } from "./pages/platform/PlatformQueuesView";
import { DeadLetterQueueView } from "./pages/platform/DeadLetterQueueView";
import { FailedWebhooksView } from "./pages/platform/FailedWebhooksView";
import { FailedEventsView } from "./pages/platform/FailedEventsView";
import { ScheduledJobsView } from "./pages/platform/ScheduledJobsView";

import { ProtectedRoute, PlatformProtectedRoute } from "./routes";
import { ErrorBoundary } from "./components/UI";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

interface BannerNotification {
  message: string;
  type: "error" | "warning";
  retryAfter?: string;
}

export default function App() {
  const [notification, setNotification] = useState<BannerNotification | null>(null);

  useEffect(() => {
    const handleUnauthorized = (e: Event) => {
      const customEvent = e as CustomEvent;
      setNotification({
        message: customEvent.detail?.message || "Session expired or API key is invalid. Please log in again.",
        type: "error",
      });
      if (window.location.pathname !== "/login" && !window.location.pathname.startsWith("/platform")) {
        window.location.href = "/login";
      }
    };

    const handleRateLimited = (e: Event) => {
      const customEvent = e as CustomEvent;
      const retryAfter = customEvent.detail?.retryAfter;
      setNotification({
        message: `Rate limit reached. ${customEvent.detail?.message || ""}`,
        type: "warning",
        retryAfter: retryAfter ? `${retryAfter}s` : undefined,
      });
    };

    const handleApiError = (e: Event) => {
      const customEvent = e as CustomEvent;
      setNotification({
        message: customEvent.detail?.message || "API request failed.",
        type: "error",
      });
    };

    window.addEventListener("auth-unauthorized", handleUnauthorized);
    window.addEventListener("rate-limited", handleRateLimited);
    window.addEventListener("api-error", handleApiError);

    return () => {
      window.removeEventListener("auth-unauthorized", handleUnauthorized);
      window.removeEventListener("rate-limited", handleRateLimited);
      window.removeEventListener("api-error", handleApiError);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        {notification && (
          <div
            className={`fixed top-4 right-4 left-4 md:left-auto md:w-96 z-[9999] p-4 rounded-xl border shadow-xl flex gap-3 items-start animate-in slide-in-from-top duration-300 ${
              notification.type === "error"
                ? "bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-300 border-red-200 dark:border-red-900/50"
                : "bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border-amber-200 dark:border-amber-900/50"
            }`}
          >
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            <div className="flex-1 text-sm">
              <p className="font-semibold">{notification.type === "error" ? "API Error" : "Rate Limited (429)"}</p>
              <p className="mt-0.5 text-xs opacity-90">{notification.message}</p>
              {notification.retryAfter && (
                <p className="mt-1 text-xs font-semibold">Retry after: {notification.retryAfter}</p>
              )}
            </div>
            <button
              onClick={() => setNotification(null)}
              className="text-muted-foreground hover:text-foreground shrink-0 focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <BrowserRouter>
          <Routes>
            {/* Tenant Authentication & Routes */}
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/api-keys" element={<ApiKeys />} />
              <Route path="/consents" element={<Consents />} />
              <Route path="/audit-logs" element={<AuditLogs />} />
              <Route path="/webhooks" element={<Webhooks />} />
            </Route>

            {/* Super Admin Platform Routes */}
            <Route path="/platform/login" element={<PlatformLogin />} />
            <Route element={<PlatformProtectedRoute />}>
              <Route path="/platform" element={<PlatformDashboard />} />
              <Route path="/platform/dlq" element={<DeadLetterQueueView />} />
              <Route path="/platform/failed-webhooks" element={<FailedWebhooksView />} />
              <Route path="/platform/failed-events" element={<FailedEventsView />} />
              <Route path="/platform/scheduled-jobs" element={<ScheduledJobsView />} />
              <Route path="/platform/metrics" element={<PlatformMetricsView />} />
              <Route path="/platform/tenants" element={<PlatformTenants />} />
              <Route path="/platform/queues" element={<PlatformQueuesView />} />
              <Route path="/platform/workers" element={<PlatformQueuesView />} />
              <Route path="/platform/webhooks" element={<PlatformDashboard />} />
              <Route path="/platform/health" element={<PlatformDashboard />} />
              <Route path="/platform/logs" element={<PlatformLogViewer />} />
              <Route path="/platform/settings" element={<PlatformDashboard />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
