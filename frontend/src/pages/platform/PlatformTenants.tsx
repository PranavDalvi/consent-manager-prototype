import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Building2, Key, ShieldCheck, CheckCircle2, Webhook, RefreshCw, AlertTriangle } from "lucide-react";
import { platformApiClient } from "../../services/platformApiClient";

export const PlatformTenants: React.FC = () => {
  const { data: tenants, isLoading, isError, refetch } = useQuery({
    queryKey: ["platformTenants"],
    queryFn: async () => {
      const response = await platformApiClient.get("/tenants");
      return response.data.data;
    },
    refetchInterval: 5000,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[500px] text-slate-400 text-sm gap-3">
        <RefreshCw className="w-5 h-5 animate-spin text-indigo-500" />
        Fetching Tenants...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 bg-red-950/40 border border-red-800 text-red-300 rounded-2xl">
        <h3 className="font-bold text-sm flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" /> Failed to load tenant list.
        </h3>
        <button onClick={() => refetch()} className="mt-3 px-3 py-1.5 bg-red-900 text-xs font-medium rounded-xl">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <Building2 className="w-6 h-6 text-indigo-400" /> Tenants Overview
        </h1>
        <p className="text-xs text-slate-400 mt-1">Platform tenant isolation, rate limit activity, and usage stats.</p>
      </div>

      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950/80 text-slate-400 font-semibold uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-6 py-4">Tenant Name</th>
                <th className="px-6 py-4">Requests</th>
                <th className="px-6 py-4">API Keys</th>
                <th className="px-6 py-4">Policies</th>
                <th className="px-6 py-4">Consents</th>
                <th className="px-6 py-4">Rate Limit Hits</th>
                <th className="px-6 py-4">Webhooks</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {tenants.map((tenant: any) => (
                <tr key={tenant.id} className="hover:bg-slate-800/40 transition">
                  <td className="px-6 py-4 font-medium text-white">
                    <div>{tenant.name}</div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">{tenant.slug}</div>
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-200">{tenant.requests}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1 text-amber-400">
                      <Key className="w-3.5 h-3.5" /> {tenant.apiKeysCount}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" /> {tenant.policiesCount}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1 text-purple-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {tenant.consentsCount}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-red-400">{tenant.rateLimitHits}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1 text-cyan-400">
                      <Webhook className="w-3.5 h-3.5" /> {tenant.webhookCount}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        tenant.isActive
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                    >
                      {tenant.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
