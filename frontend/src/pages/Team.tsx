import React, { useState, useEffect } from "react";
import {
  UserPlus,
  Trash2,
  Copy,
  Check,
  RefreshCw,
  XCircle,
  AlertCircle,
} from "lucide-react";
import { Card, Button, Input, Modal, Badge } from "../components/UI";
import { teamService, type TeamMember, type PendingInvite } from "../services/teamService";

export const Team: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"members" | "invitations">("members");
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [invitations, setInvitations] = useState<PendingInvite[]>([]);
  const [, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Invite Modal State
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("DEVELOPER");
  const [isInviting, setIsInviting] = useState(false);
  const [generatedInviteLink, setGeneratedInviteLink] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [membersRes, invitesRes] = await Promise.all([
        teamService.getMembers().catch(() => ({ success: false, data: [] })),
        teamService.getInvitations().catch(() => ({ success: false, data: [] })),
      ]);
      if (membersRes.success) setMembers(membersRes.data);
      if (invitesRes.success) setInvitations(invitesRes.data);
    } catch (err: any) {
      setError("Failed to load team data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInviteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail) return;
    setIsInviting(true);
    setError(null);
    try {
      const res = await teamService.inviteUser({ email: inviteEmail, role: inviteRole });
      if (res.devInviteLink) {
        setGeneratedInviteLink(res.devInviteLink);
      } else {
        setIsInviteModalOpen(false);
        setInviteEmail("");
      }
      loadData();
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Failed to issue invitation.");
    } finally {
      setIsInviting(false);
    }
  };

  const handleResendInvite = async (inviteId: string) => {
    try {
      const res = await teamService.resendInvite(inviteId);
      if (res.devInviteLink) {
        setGeneratedInviteLink(res.devInviteLink);
        setIsInviteModalOpen(true);
      }
      loadData();
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed to resend invitation");
    }
  };

  const handleRevokeInvite = async (inviteId: string) => {
    if (!confirm("Are you sure you want to revoke this pending invitation?")) return;
    try {
      await teamService.revokeInvite(inviteId);
      loadData();
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed to revoke invitation");
    }
  };

  const handleToggleMemberStatus = async (userId: string, currentStatus: boolean) => {
    try {
      await teamService.updateMemberStatus(userId, !currentStatus);
      loadData();
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed to update member status");
    }
  };

  const handleRemoveMember = async (userId: string) => {
    if (!confirm("Are you sure you want to remove this member from the team?")) return;
    try {
      await teamService.removeMember(userId);
      loadData();
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed to remove member");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Team Management</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage team members, roles, and pending invitations
          </p>
        </div>
        <Button onClick={() => { setGeneratedInviteLink(null); setIsInviteModalOpen(true); }}>
          <UserPlus className="w-4 h-4 mr-2" />
          Invite User
        </Button>
      </div>

      {error && (
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive flex items-center gap-3 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-border">
        <button
          onClick={() => setActiveTab("members")}
          className={`pb-3 px-4 font-semibold text-sm transition-colors border-b-2 ${
            activeTab === "members"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Active Members ({members.length})
        </button>
        <button
          onClick={() => setActiveTab("invitations")}
          className={`pb-3 px-4 font-semibold text-sm transition-colors border-b-2 ${
            activeTab === "invitations"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Pending Invitations ({invitations.length})
        </button>
      </div>

      {/* Members Tab */}
      {activeTab === "members" && (
        <Card className="overflow-hidden border border-border/80 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/50 text-muted-foreground font-semibold border-b border-border">
                <tr>
                  <th className="py-3 px-4">Member</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Last Login</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {members.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-muted-foreground">
                      No team members found.
                    </td>
                  </tr>
                ) : (
                  members.map((m) => (
                    <tr key={m.id} className="hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-medium text-foreground">
                          {m.firstName || m.lastName ? `${m.firstName || ""} ${m.lastName || ""}`.trim() : m.email.split("@")[0]}
                        </div>
                        <div className="text-xs text-muted-foreground">{m.email}</div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className="font-mono text-xs">
                          {m.role}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant={m.isActive ? "success" : "destructive"}>
                          {m.isActive ? "Active" : "Disabled"}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-xs text-muted-foreground">
                        {m.lastLoginAt ? new Date(m.lastLoginAt).toLocaleString() : "Never"}
                      </td>
                      <td className="py-3 px-4 text-right space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleToggleMemberStatus(m.id, m.isActive)}
                        >
                          {m.isActive ? "Disable" : "Enable"}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                          onClick={() => handleRemoveMember(m.id)}
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
      )}

      {/* Invitations Tab */}
      {activeTab === "invitations" && (
        <Card className="overflow-hidden border border-border/80 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/50 text-muted-foreground font-semibold border-b border-border">
                <tr>
                  <th className="py-3 px-4">Invited Email</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Sent Date</th>
                  <th className="py-3 px-4">Expires</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {invitations.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-muted-foreground">
                      No pending invitations.
                    </td>
                  </tr>
                ) : (
                  invitations.map((inv) => (
                    <tr key={inv.id} className="hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4 font-medium text-foreground">{inv.email}</td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className="font-mono text-xs">
                          {inv.role}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-xs text-muted-foreground">
                        {new Date(inv.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 text-xs text-muted-foreground">
                        {new Date(inv.expiresAt).toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-right space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleResendInvite(inv.id)}
                          title="Resend Invitation Token"
                        >
                          <RefreshCw className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                          onClick={() => handleRevokeInvite(inv.id)}
                          title="Revoke Invitation"
                        >
                          <XCircle className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Invite Modal */}
      <Modal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        title="Invite Team Member"
      >
        {generatedInviteLink ? (
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 text-emerald-900 dark:text-emerald-300 text-sm">
              <p className="font-semibold mb-1">Invitation Token Generated!</p>
              <p className="text-xs">Share this link with the recipient to complete onboarding:</p>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-muted rounded border font-mono text-xs break-all">
              <span className="flex-1 select-all">{generatedInviteLink}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(generatedInviteLink)}
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            <Button
              className="w-full mt-4"
              onClick={() => {
                setIsInviteModalOpen(false);
                setGeneratedInviteLink(null);
                setInviteEmail("");
              }}
            >
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleInviteSubmit} className="space-y-4">
            <Input
              label="Recipient Email Address"
              type="email"
              placeholder="colleague@organization.com"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              required
            />

            <div className="space-y-1.5">
              <label className="text-sm font-medium">Role</label>
              <select
                value={inviteRole}
                onChange={(e) => setInviteRole(e.target.value)}
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="ADMIN">ADMIN (Full management access)</option>
                <option value="DEVELOPER">DEVELOPER (Policies, API keys, Webhooks)</option>
                <option value="VIEWER">VIEWER (Read-only access)</option>
              </select>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" type="button" onClick={() => setIsInviteModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" loading={isInviting}>
                Issue Invitation
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};
