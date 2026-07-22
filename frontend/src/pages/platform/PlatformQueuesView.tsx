import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Layers, Activity } from "lucide-react";
import { platformApiClient } from "../../services/platformApiClient";

export const PlatformQueuesView: React.FC = () => {
  const queryClient = useQueryClient();

  const { data: overallStats } = useQuery({
    queryKey: ["platformQueuesOverview"],
    queryFn: async () => {
      const res = await platformApiClient.get("/queues");
      return res.data.data;
    },
    refetchInterval: 5000,
  });

  const { data: perQueueStats = [], isLoading } = useQuery({
    queryKey: ["platformQueuesDetailed"],
    queryFn: async () => {
      const res = await platformApiClient.get("/queues/detailed");
      return res.data.data || [];
    },
    refetchInterval: 5000,
  });

  const queueActionMutation = useMutation({
    mutationFn: async ({ queueName, action }: { queueName: string; action: string }) => {
      await platformApiClient.post(`/queues/${queueName}/action`, { action });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["platformQueuesDetailed"] });
      queryClient.invalidateQueries({ queryKey: ["platformQueuesOverview"] });
    },
  });

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <Layers className="w-7 h-7 text-indigo-400" /> Queue Operations & Monitoring
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Detailed metrics, job states, throughput rates, and administrative actions for all BullMQ background queues.
        </p>
      </div>

      {/* Aggregate Queue Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
          <span className="text-[10px] uppercase font-semibold text-slate-400">Waiting</span>
          <div className="text-xl font-bold text-amber-400 mt-1">{overallStats?.waiting ?? 0}</div>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
          <span className="text-[10px] uppercase font-semibold text-slate-400">Active</span>
          <div className="text-xl font-bold text-indigo-400 mt-1">{overallStats?.active ?? 0}</div>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
          <span className="text-[10px] uppercase font-semibold text-slate-400">Completed</span>
          <div className="text-xl font-bold text-emerald-400 mt-1">{overallStats?.completed ?? 0}</div>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
          <span className="text-[10px] uppercase font-semibold text-slate-400">Failed</span>
          <div className="text-xl font-bold text-rose-400 mt-1">{overallStats?.failed ?? 0}</div>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
          <span className="text-[10px] uppercase font-semibold text-slate-400">Delayed</span>
          <div className="text-xl font-bold text-purple-400 mt-1">{overallStats?.delayed ?? 0}</div>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
          <span className="text-[10px] uppercase font-semibold text-slate-400">Paused</span>
          <div className="text-xl font-bold text-slate-400 mt-1">{overallStats?.paused ?? 0}</div>
        </div>
      </div>

      {/* Individual BullMQ Queue Breakdown Table */}
      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
        <h2 className="text-sm font-bold text-white flex items-center gap-2">
          <Activity className="w-4 h-4 text-indigo-400" /> Individual Queue Status & Controls
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold bg-slate-950/50">
                <th className="p-3">Queue Name</th>
                <th className="p-3">Status</th>
                <th className="p-3">Waiting / Active</th>
                <th className="p-3">Completed / Failed</th>
                <th className="p-3">Throughput</th>
                <th className="p-3">Avg Latency</th>
                <th className="p-3 text-right">Queue Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="p-4 text-center text-slate-500">Loading queues...</td>
                </tr>
              ) : perQueueStats.map((q: any) => (
                <tr key={q.name} className="hover:bg-slate-800/40">
                  <td className="p-3 font-semibold text-slate-200">{q.name}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      q.status === "PAUSED" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    }`}>
                      {q.status}
                    </span>
                  </td>
                  <td className="p-3 text-slate-300">
                    <span className="text-amber-400 font-semibold">{q.counts.waiting}</span> / <span className="text-indigo-400 font-semibold">{q.counts.active}</span>
                  </td>
                  <td className="p-3 text-slate-300">
                    <span className="text-emerald-400 font-semibold">{q.counts.completed}</span> / <span className="text-rose-400 font-semibold">{q.counts.failed}</span>
                  </td>
                  <td className="p-3 font-mono text-slate-300">{q.throughputPerSec} jobs/sec</td>
                  <td className="p-3 font-mono text-slate-300">{q.avgProcessingTimeMs} ms</td>
                  <td className="p-3 text-right space-x-1.5">
                    {q.status === "PAUSED" ? (
                      <button
                        onClick={() => queueActionMutation.mutate({ queueName: q.name, action: "resume" })}
                        className="px-2 py-1 rounded-lg bg-emerald-950/40 text-emerald-300 hover:bg-emerald-600 hover:text-white transition text-[11px]"
                      >
                        Resume
                      </button>
                    ) : (
                      <button
                        onClick={() => queueActionMutation.mutate({ queueName: q.name, action: "pause" })}
                        className="px-2 py-1 rounded-lg bg-amber-950/40 text-amber-300 hover:bg-amber-600 hover:text-white transition text-[11px]"
                      >
                        Pause
                      </button>
                    )}
                    <button
                      onClick={() => queueActionMutation.mutate({ queueName: q.name, action: "retry-failed" })}
                      className="px-2 py-1 rounded-lg bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600 hover:text-white transition text-[11px]"
                    >
                      Retry Failed
                    </button>
                    <button
                      onClick={() => queueActionMutation.mutate({ queueName: q.name, action: "clean" })}
                      className="px-2 py-1 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition text-[11px]"
                    >
                      Clean
                    </button>
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
