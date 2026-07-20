import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Key, Webhook, UserCheck, FileSpreadsheet, ArrowRight, Loader2 } from "lucide-react";
import { usePolicies, useApiKeys, useWebhooks, useConsents, useAuditLogs } from "../hooks/useApi";
import { Card, PageHeader } from "../components/UI";

export const Dashboard: React.FC = () => {
  const policiesQuery = usePolicies();
  const apiKeysQuery = useApiKeys();
  const webhooksQuery = useWebhooks();
  const consentsQuery = useConsents({ limit: 5 });
  const auditLogsQuery = useAuditLogs({ limit: 5 });

  const stats = [
    {
      name: "Policies",
      value: policiesQuery.data?.data?.length ?? 0,
      icon: ShieldCheck,
      color: "text-blue-500 bg-blue-500/10",
      path: "/policies",
      loading: policiesQuery.isLoading,
    },
    {
      name: "API Keys",
      value: apiKeysQuery.data?.data?.length ?? 0,
      icon: Key,
      color: "text-amber-500 bg-amber-500/10",
      path: "/api-keys",
      loading: apiKeysQuery.isLoading,
    },
    {
      name: "Webhooks",
      value: webhooksQuery.data?.data?.length ?? 0,
      icon: Webhook,
      color: "text-purple-500 bg-purple-500/10",
      path: "/webhooks",
      loading: webhooksQuery.isLoading,
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Consent Manager Console"
        description="Monitor system status, manage data use policies, and audit data consents."
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Link key={idx} to={stat.path}>
              <Card className="hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                    {stat.loading ? (
                      <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                    ) : (
                      <h4 className="text-3xl font-bold tracking-tight">{stat.value}</h4>
                    )}
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Consents */}
        <Card className="space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-green-500" />
              <h3 className="font-bold text-lg">Recent Consents</h3>
            </div>
            <Link to="/consents" className="text-sm text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {consentsQuery.isLoading ? (
            <div className="flex justify-center p-4">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : consentsQuery.isError ? (
            <p className="text-sm text-destructive text-center p-4">Failed to load recent consents.</p>
          ) : !consentsQuery.data?.data || consentsQuery.data.data.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center p-4">No consents recorded yet.</p>
          ) : (
            <div className="divide-y divide-border">
              {consentsQuery.data.data.slice(0, 5).map((consent) => (
                <div key={consent.id} className="py-3 flex justify-between items-center text-sm">
                  <div>
                    <p className="font-semibold">{consent.userId}</p>
                    <p className="text-xs text-muted-foreground">Purpose: {consent.purpose} (v{consent.policyVersion})</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    consent.status === "GRANTED" 
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                  }`}>
                    {consent.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Recent Audit Logs */}
        <Card className="space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-blue-500" />
              <h3 className="font-bold text-lg">Recent Audits</h3>
            </div>
            <Link to="/audit-logs" className="text-sm text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {auditLogsQuery.isLoading ? (
            <div className="flex justify-center p-4">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : auditLogsQuery.isError ? (
            <p className="text-sm text-destructive text-center p-4">Failed to load recent audit events.</p>
          ) : !auditLogsQuery.data?.data || auditLogsQuery.data.data.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center p-4">No audit logs recorded yet.</p>
          ) : (
            <div className="divide-y divide-border">
              {auditLogsQuery.data.data.slice(0, 5).map((log) => (
                <div key={log.id} className="py-3 text-sm space-y-1">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{log.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(log.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    User: {log.userId} {log.purpose && `| Purpose: ${log.purpose}`}
                  </p>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};
