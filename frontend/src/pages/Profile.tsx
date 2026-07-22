import React, { useState, useEffect } from "react";
import {
  KeyRound,
  Laptop,
  LogOut,
  Trash2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { Card, Button, Input, Badge } from "../components/UI";
import { authService, type UserProfile, type UserSession } from "../services/authService";

export const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [sessions, setSessions] = useState<UserSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Change Password state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [meRes, sessionsRes] = await Promise.all([
        authService.getMe(),
        authService.getSessions().catch(() => ({ success: false, data: [], currentSessionId: null })),
      ]);
      if (meRes.success) setProfile(meRes.data);
      if (sessionsRes.success) {
        setSessions(sessionsRes.data);
        setCurrentSessionId(sessionsRes.currentSessionId);
      }
    } catch (err: any) {
      setError("Failed to load profile details.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) return;
    setIsChangingPassword(true);
    setError(null);
    setSuccessMsg(null);
    try {
      await authService.changePassword({ currentPassword, newPassword });
      setSuccessMsg("Password changed successfully. All other active sessions have been revoked.");
      setCurrentPassword("");
      setNewPassword("");
      loadData();
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Failed to change password.");
    } finally {
      setIsChangingPassword(false);
    }
  };

  const handleRevokeSession = async (sessionId: string) => {
    try {
      await authService.revokeSession(sessionId);
      loadData();
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed to revoke session");
    }
  };

  const handleLogoutAll = async () => {
    if (!confirm("Are you sure you want to log out from ALL devices?")) return;
    try {
      await authService.logoutAll();
      window.location.href = "/login";
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed to log out all sessions");
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">User Profile & Security</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your account details, password, and active device sessions
        </p>
      </div>

      {error && (
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive flex items-center gap-3 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {successMsg && (
        <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-emerald-900 dark:text-emerald-300 flex items-center gap-3 text-sm">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* User Info Card */}
      {profile && (
        <Card className="p-6 border border-border/80 shadow-sm space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-2xl">
              {profile.firstName?.[0] || profile.email[0].toUpperCase()}
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                {profile.firstName || profile.lastName
                  ? `${profile.firstName || ""} ${profile.lastName || ""}`.trim()
                  : profile.email}
              </h2>
              <p className="text-sm text-muted-foreground">{profile.email}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className="font-mono text-xs">
                  Role: {profile.role}
                </Badge>
                <Badge variant="secondary" className="font-mono text-xs">
                  Workspace: {profile.tenant.name} ({profile.tenant.slug})
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Change Password Card */}
      <Card className="p-6 border border-border/80 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <KeyRound className="w-5 h-5 text-primary" />
          <div>
            <h3 className="font-semibold text-base">Change Password</h3>
            <p className="text-xs text-muted-foreground">
              Updating your password will revoke all other active sessions for security
            </p>
          </div>
        </div>

        <form onSubmit={handleChangePassword} className="space-y-4 max-w-md">
          <Input
            label="Current Password"
            type="password"
            placeholder="••••••••"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />

          <Input
            label="New Password"
            type="password"
            placeholder="Min 8 chars (UPPER, lower, number, special)"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <Button type="submit" loading={isChangingPassword}>
            Update Password
          </Button>
        </form>
      </Card>

      {/* Active Sessions & Devices */}
      <Card className="p-6 border border-border/80 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <Laptop className="w-5 h-5 text-primary" />
            <div>
              <h3 className="font-semibold text-base">Active Devices & Sessions</h3>
              <p className="text-xs text-muted-foreground">
                Revoke individual sessions or log out from all devices
              </p>
            </div>
          </div>
          <Button variant="outline" className="text-destructive border-destructive/30 hover:bg-destructive/10" onClick={handleLogoutAll}>
            <LogOut className="w-4 h-4 mr-2" />
            Log Out All Devices
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground font-semibold border-b border-border">
              <tr>
                <th className="py-3 px-4">Device / User Agent</th>
                <th className="py-3 px-4">IP Address</th>
                <th className="py-3 px-4">Last Active</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sessions.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-6 text-center text-muted-foreground">
                    No active sessions found.
                  </td>
                </tr>
              ) : (
                sessions.map((s) => (
                  <tr key={s.id} className="hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-medium text-foreground flex items-center gap-2">
                        {s.device || "Browser"}
                        {s.id === currentSessionId && (
                          <Badge variant="success" className="text-[10px] py-0 px-1.5">
                            Current Session
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground truncate max-w-xs">{s.userAgent || "Unknown"}</div>
                    </td>
                    <td className="py-3 px-4 text-xs font-mono text-muted-foreground">
                      {s.ipAddress || "Unknown"}
                    </td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">
                      {new Date(s.lastUsedAt || s.createdAt).toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleRevokeSession(s.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
