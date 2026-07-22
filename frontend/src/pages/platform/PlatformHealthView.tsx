import React from "react";
import { useQuery } from "@tanstack/react-query";
import { platformApiClient } from "../../services/platformApiClient";
import { HeartPulse, Database, Server, Cpu, Activity } from "lucide-react";

export const PlatformHealthView: React.FC = () => {
  const { data: health } = useQuery({
    queryKey: ["platformHealth"],
    queryFn: async () => {
      const res = await platformApiClient.get("/health");
      return res.data.data;
    },
    refetchInterval: 5000,
  });

  const { data: system } = useQuery({
    queryKey: ["platformSystem"],
    queryFn: async () => {
      const res = await platformApiClient.get("/system");
      return res.data.data;
    },
    refetchInterval: 5000,
  });

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
          <HeartPulse className="w-7 h-7 text-emerald-400" />
          System & Infrastructure Health
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Real-time status of underlying infrastructure, database connection latency, Redis health, and CPU/Memory usage.
        </p>
      </div>

      {/* Resource Utilization */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Uptime</span>
            <Activity className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white">{system?.uptime ?? 0} <span className="text-xs font-normal text-slate-400">sec</span></div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Memory Usage</span>
            <Cpu className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl font-bold text-white">{system?.memoryUsageMb ?? 0} <span className="text-xs font-normal text-slate-400">MB</span></div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Estimated CPU Load</span>
            <Server className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white">{system?.cpuUsagePercent ?? 0}%</div>
        </div>
      </div>

      {/* Component Status */}
      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
        <h2 className="text-sm font-bold text-white flex items-center gap-2">
          <Database className="w-4 h-4 text-emerald-400" /> Infrastructure Dependency Status
        </h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-slate-950/60 border border-slate-800 rounded-xl text-xs">
            <div>
              <div className="text-slate-200 font-semibold">PostgreSQL Relational Database</div>
              <div className="text-slate-500 text-[11px] mt-0.5">Primary datastore for policy, consent, audit log, and tenant records.</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400 text-[11px]">{health?.databaseLatencyMs ?? 0}ms latency</span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {health?.database ?? "Healthy"}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-950/60 border border-slate-800 rounded-xl text-xs">
            <div>
              <div className="text-slate-200 font-semibold">Redis Cache & Message Broker</div>
              <div className="text-slate-500 text-[11px] mt-0.5">Backed for BullMQ queues, event pub/sub, rate-limiting counters.</div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {health?.redis ?? "Healthy"}
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-950/60 border border-slate-800 rounded-xl text-xs">
            <div>
              <div className="text-slate-200 font-semibold">BullMQ Background Queue System</div>
              <div className="text-slate-500 text-[11px] mt-0.5">Handles asynchronous event distribution, webhook delivery retries, and scheduled cleanup.</div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {health?.queue ?? "Healthy"}
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-950/60 border border-slate-800 rounded-xl text-xs">
            <div>
              <div className="text-slate-200 font-semibold">API Gateway & Router Engine</div>
              <div className="text-slate-500 text-[11px] mt-0.5">Express HTTP engine routing tenant and platform requests.</div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {health?.api ?? "Healthy"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
