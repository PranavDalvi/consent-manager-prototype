import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Activity, RefreshCw } from "lucide-react";
import { platformApiClient } from "../../services/platformApiClient";

export const PlatformMetricsView: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["platformMetrics"],
    queryFn: async () => {
      const res = await platformApiClient.get("/metrics");
      return res.data.data;
    },
    refetchInterval: 5000,
  });

  if (isLoading || !data) {
    return <div className="flex items-center justify-center min-h-[400px] text-slate-400 text-sm gap-2"><RefreshCw className="w-4 h-4 animate-spin text-indigo-500" /> Loading Metrics...</div>;
  }

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <Activity className="w-6 h-6 text-indigo-400" /> Granular Metrics
        </h1>
        <p className="text-xs text-slate-400 mt-1">HTTP Request Rates, Response Latency (P95/P99), and HTTP Status Codes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400">Request Throughput</span>
          <div className="text-2xl font-bold text-white mt-2">{data.traffic.requestsPerSec} <span className="text-xs font-normal text-slate-400">req/s</span></div>
          <p className="text-xs text-slate-500 mt-1">{data.traffic.requestsPerMin} requests per minute</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400">Average Latency</span>
          <div className="text-2xl font-bold text-white mt-2">{data.performance.avgResponseTimeMs} <span className="text-xs font-normal text-slate-400">ms</span></div>
          <p className="text-xs text-slate-500 mt-1">P95: {data.performance.p95Ms}ms • P99: {data.performance.p99Ms}ms</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400">HTTP Status Breakdown</span>
          <div className="text-2xl font-bold text-white mt-2">{data.errors.errorRatePercent}% <span className="text-xs font-normal text-slate-400">errors</span></div>
          <p className="text-xs text-slate-500 mt-1">4xx: {data.errors.count4xx} • 5xx: {data.errors.count5xx}</p>
        </div>
      </div>
    </div>
  );
};
