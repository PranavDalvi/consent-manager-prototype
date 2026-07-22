import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Key,
  ShieldCheck,
  UserCheck,
  FileSpreadsheet,
  Webhook,
  Users,
  User,
  Settings as SettingsIcon,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
  ChevronRight,
} from "lucide-react";
import { API_KEY_STORAGE_KEY } from "../services/apiClient";
import { authService } from "../services/authService";

interface SidebarItem {
  name: string;
  path: string;
  icon: React.FC<{ className?: string }>;
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Policies", path: "/policies", icon: ShieldCheck },
  { name: "API Keys", path: "/api-keys", icon: Key },
  { name: "Consents", path: "/consents", icon: UserCheck },
  { name: "Audit Logs", path: "/audit-logs", icon: FileSpreadsheet },
  { name: "Webhooks", path: "/webhooks", icon: Webhook },
  { name: "Team", path: "/team", icon: Users },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Settings", path: "/settings", icon: SettingsIcon },
];

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || 
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleLogout = async () => {
    localStorage.removeItem(API_KEY_STORAGE_KEY);
    await authService.logout().catch(() => {});
    navigate("/login");
  };

  // Generate Breadcrumbs
  const pathnames = location.pathname.split("/").filter((x) => x);
  const getBreadcrumbs = () => {
    return (
      <div className="flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground mb-4 select-none">
        <Link to="/" className="hover:text-foreground transition-colors">
          Admin
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const label = value
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={to}>
              <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
              {isLast ? (
                <span className="font-semibold text-foreground">{label}</span>
              ) : (
                <Link to={to} className="hover:text-foreground transition-colors">
                  {label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-card border-r border-border min-h-screen select-none">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-primary-foreground dark:text-primary">
            <span className="bg-primary text-primary-foreground px-2.5 py-1.5 rounded-lg text-base font-extrabold uppercase tracking-wide">
              Consent
            </span>
            <span className="text-foreground tracking-tight">Manager</span>
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1.5">
          {SIDEBAR_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/10"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border flex flex-col gap-2">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-all duration-200"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-destructive hover:bg-destructive/10 transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Drawer Backdrop */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar for Mobile Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border flex flex-col transition-transform duration-300 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-border">
          <Link
            to="/"
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-2 font-bold text-lg"
          >
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded">Consent</span>
            <span className="text-foreground">Manager</span>
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="text-muted-foreground hover:text-foreground">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1">
          {SIDEBAR_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border flex flex-col gap-2">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-all"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-destructive hover:bg-destructive/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 z-30 select-none">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-muted-foreground hover:text-foreground focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden sm:block text-xs font-semibold px-2.5 py-1 bg-accent rounded text-accent-foreground select-none font-mono">
              TENANT CONSOLE
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
              TA
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto max-w-7xl w-full mx-auto">
          {getBreadcrumbs()}
          {children}
        </main>
      </div>
    </div>
  );
};
