import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Activity,
  Zap,
  AlertTriangle,
  Layers,
  Database,
  Building2,
  Key,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Server,
  RefreshCw,
} from "lucide-react";
import { platformApiClient } from "../../services/platformApiClient";

export const PlatformDashboard: React.FC = () => {
  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ["platformOverview"],
    queryFn: async () => {
      const response = await platformApiClient.get("/overview");
      return response.data.data;
    },
    refetchInterval: 5000,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <div className="flex items-center gap-3 text-slate-400 text-sm">
          <RefreshCw className="w-5 h-5 animate-spin text-indigo-500" />
          Loading Platform Observability Dashboard...
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="bg-red-950/40 border border-red-800 p-6 rounded-2xl text-red-300">
        <h3 className="font-bold text-base flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" /> Failed to load platform metrics
        </h3>
        <p className="text-xs text-red-400 mt-1">Please ensure the backend platform service is accessible.</p>
        <button
          onClick={() => refetch()}
          className="mt-4 px-4 py-2 bg-red-900 hover:bg-red-800 text-white rounded-xl text-xs font-medium transition"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  const { traffic, performance, errors, queues, infrastructure, platform } = data;

  return (
    <div className="space-y-8 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
            Platform Observability
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping mr-1.5"></span>
              Live (5s auto-refresh)
            </span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time monitoring of traffic, queues, infrastructure health, and platform state.
          </p>
        </div>

        <button
          onClick={() => refetch()}
          disabled={isRefetching}
          className="flex items-center gap-2 px-3.5 py-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-medium transition"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefetching ? "animate-spin text-indigo-400" : ""}`} />
          Refresh Now
        </button>
      </div>

      {/* High-Level Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Traffic */}
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-medium">Traffic Rate</span>
            <Activity className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl font-bold text-white">{traffic.requestsPerSec} <span className="text-xs font-normal text-slate-400">req/sec</span></div>
          <p className="text-[11px] text-slate-400 mt-1">{traffic.requestsPerMin} req/min • {traffic.totalRequests} total requests</p>
        </div>

        {/* Response Latency */}
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-medium">Avg Response Time</span>
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-white">{performance.avgResponseTimeMs} <span className="text-xs font-normal text-slate-400">ms</span></div>
          <p className="text-[11px] text-slate-400 mt-1">P95: {performance.p95Ms}ms • P99: {performance.p99Ms}ms</p>
        </div>

        {/* Error Rate */}
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-medium">Error Rate</span>
            <AlertTriangle className="w-4 h-4 text-red-400" />
          </div>
          <div className="text-2xl font-bold text-white">{errors.errorRatePercent}%</div>
          <p className="text-[11px] text-slate-400 mt-1">4xx: {errors.count4xx} • 5xx: {errors.count5xx}</p>
        </div>

        {/* Infrastructure Status */}
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-medium">System State</span>
            <Server className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl font-bold text-emerald-400 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            Healthy
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Uptime: {infrastructure.systemUptimeSeconds}s • RAM: {infrastructure.memoryUsageMb}MB</p>
        </div>
      </div>

      {/* Grid Section: Queues & Infrastructure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Queues Breakdown */}
        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-400" /> BullMQ Queues Status
          </h2>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Waiting</span>
              <p className="text-lg font-bold text-amber-400 mt-0.5">{queues.waiting}</p>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Active</span>
              <p className="text-lg font-bold text-indigo-400 mt-0.5">{queues.active}</p>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Completed</span>
              <p className="text-lg font-bold text-emerald-400 mt-0.5">{queues.completed}</p>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Failed</span>
              <p className="text-lg font-bold text-red-400 mt-0.5">{queues.failed}</p>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Delayed</span>
              <p className="text-lg font-bold text-purple-400 mt-0.5">{queues.delayed}</p>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Paused</span>
              <p className="text-lg font-bold text-slate-400 mt-0.5">{queues.paused}</p>
            </div>
          </div>
        </div>

        {/* Infrastructure Status Details */}
        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <Database className="w-4 h-4 text-emerald-400" /> Infrastructure Components
          </h2>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-xs">
              <span className="text-slate-300 font-medium">PostgreSQL Database</span>
              <div className="flex items-center gap-3">
                <span className="text-slate-400 text-[11px]">{infrastructure.databaseLatencyMs}ms latency</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {infrastructure.database}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-xs">
              <span className="text-slate-300 font-medium">Redis In-Memory Cache</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {infrastructure.redis}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-xs">
              <span className="text-slate-300 font-medium">BullMQ Worker Process</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {infrastructure.queue}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-xs">
              <span className="text-slate-300 font-medium">Express API Gateway</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {infrastructure.api}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Totals Grid */}
      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
        <h2 className="text-sm font-bold text-white flex items-center gap-2">
          <Building2 className="w-4 h-4 text-purple-400" /> Platform Entity Totals
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl text-center">
            <Building2 className="w-5 h-5 text-indigo-400 mx-auto mb-1.5" />
            <div className="text-xl font-bold text-white">{platform.totalTenants}</div>
            <span className="text-[11px] text-slate-400">Total Tenants</span>
          </div>

          <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl text-center">
            <Key className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
            <div className="text-xl font-bold text-white">{platform.activeApiKeys}</div>
            <span className="text-[11px] text-slate-400">Active API Keys</span>
          </div>

          <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl text-center">
            <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
            <div className="text-xl font-bold text-white">{platform.totalPolicies}</div>
            <span className="text-[11px] text-slate-400">Policies Created</span>
          </div>

          <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl text-center">
            <CheckCircle2 className="w-5 h-5 text-purple-400 mx-auto mb-1.5" />
            <div className="text-xl font-bold text-white">{platform.totalConsents}</div>
            <span className="text-[11px] text-slate-400">Consent Grants</span>
          </div>

          <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl text-center">
            <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-1.5" />
            <div className="text-xl font-bold text-white">{platform.totalAuditLogs}</div>
            <span className="text-[11px] text-slate-400">Audit Logs</span>
          </div>
        </div>
      </div>
    </div>
  );
};
