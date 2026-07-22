import React from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Activity,
  Users,
  Layers,
  Cpu,
  Webhook,
  HeartPulse,
  FileText,
  Settings,
  LogOut,
  ShieldAlert,
} from "lucide-react";
import { SUPER_ADMIN_JWT_STORAGE_KEY } from "../services/platformApiClient";

export const PlatformLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(SUPER_ADMIN_JWT_STORAGE_KEY);
    navigate("/platform/login");
  };

  const navItems = [
    { label: "Overview", path: "/platform", icon: LayoutDashboard },
    { label: "Dead Letter Queue", path: "/platform/dlq", icon: ShieldAlert },
    { label: "Failed Webhooks", path: "/platform/failed-webhooks", icon: Webhook },
    { label: "Failed Events", path: "/platform/failed-events", icon: Layers },
    { label: "Scheduled Jobs", path: "/platform/scheduled-jobs", icon: Cpu },
    { label: "Metrics", path: "/platform/metrics", icon: Activity },
    { label: "Tenants", path: "/platform/tenants", icon: Users },
    { label: "Queues", path: "/platform/queues", icon: Layers },
    { label: "Workers", path: "/platform/workers", icon: Cpu },
    { label: "Webhooks", path: "/platform/webhooks", icon: Webhook },
    { label: "System Health", path: "/platform/health", icon: HeartPulse },
    { label: "Logs", path: "/platform/logs", icon: FileText },
    { label: "Settings", path: "/platform/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col shrink-0">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/30">
            <ShieldAlert className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-sm text-white tracking-wide">Platform Admin</h2>
            <p className="text-[10px] text-indigo-400 font-semibold tracking-wider uppercase">Operator Mode</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-red-400 hover:bg-red-950/40 hover:text-red-300 transition"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
