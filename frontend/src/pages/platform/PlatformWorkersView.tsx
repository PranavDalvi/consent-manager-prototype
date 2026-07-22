import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Cpu, RefreshCw, Activity, Server } from "lucide-react";
import { platformApiClient } from "../../services/platformApiClient";

export const PlatformWorkersView: React.FC = () => {
  const queryClient = useQueryClient();

  const { data: workers = [], isLoading, refetch } = useQuery({
    queryKey: ["platformWorkers"],
    queryFn: async () => {
      const res = await platformApiClient.get("/workers/status");
      return res.data.data || [];
    },
    refetchInterval: 5000,
  });

  const workerActionMutation = useMutation({
    mutationFn: async ({ workerId, action }: { workerId: string; action: string }) => {
      await platformApiClient.post(`/workers/${workerId}/action`, { action });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["platformWorkers"] });
    },
  });

  const runningCount = workers.filter((w: any) => w.status === "RUNNING").length;
  const totalJobsProcessed = workers.reduce((acc: number, w: any) => acc + (w.jobsProcessed || 0), 0);
  const totalFailedHandled = workers.reduce((acc: number, w: any) => acc + (w.failedJobsHandled || 0), 0);

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <Cpu className="w-7 h-7 text-indigo-400" /> Background Worker Processes
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time process state, assigned queue workers, memory/CPU footprints, processing throughput, and worker control.
          </p>
        </div>

        <button
          onClick={() => refetch()}
          className="flex items-center gap-2 px-3.5 py-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-medium transition"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Refresh Workers
        </button>
      </div>

      {/* Aggregate Worker Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400">Worker Status</span>
          <div className="text-2xl font-bold text-emerald-400 mt-1 flex items-center gap-2">
            <Server className="w-5 h-5 text-emerald-400" /> {runningCount} / {workers.length} Running
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400">Total Processed</span>
          <div className="text-2xl font-bold text-white mt-1">{totalJobsProcessed} jobs</div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400">Failed Jobs Handled</span>
          <div className="text-2xl font-bold text-rose-400 mt-1">{totalFailedHandled}</div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400">Worker Process Memory</span>
          <div className="text-2xl font-bold text-indigo-400 mt-1">
            {workers[0]?.memoryUsageMb ?? 0} MB
          </div>
        </div>
      </div>

      {/* Worker Processes Table */}
      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
        <h2 className="text-sm font-bold text-white flex items-center gap-2">
          <Activity className="w-4 h-4 text-indigo-400" /> Active Worker Processes
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold bg-slate-950/50">
                <th className="p-3">Worker ID & Name</th>
                <th className="p-3">Assigned Queue</th>
                <th className="p-3">Status</th>
                <th className="p-3">Current Job</th>
                <th className="p-3">Processed</th>
                <th className="p-3">Failed</th>
                <th className="p-3">Uptime</th>
                <th className="p-3">Last Heartbeat</th>
                <th className="p-3 text-right">Worker Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {isLoading ? (
                <tr>
                  <td colSpan={9} className="p-4 text-center text-slate-500">Loading worker status...</td>
                </tr>
              ) : (
                workers.map((wrk: any) => (
                  <tr key={wrk.id} className="hover:bg-slate-800/40">
                    <td className="p-3">
                      <div className="font-semibold text-slate-200">{wrk.name}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{wrk.id}</div>
                    </td>
                    <td className="p-3 font-semibold text-indigo-400">{wrk.queue}</td>
                    <td className="p-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {wrk.status}
                      </span>
                    </td>
                    <td className="p-3 font-mono text-slate-300 truncate max-w-xs">{wrk.currentJob}</td>
                    <td className="p-3 text-emerald-400 font-semibold">{wrk.jobsProcessed}</td>
                    <td className="p-3 text-rose-400 font-semibold">{wrk.failedJobsHandled}</td>
                    <td className="p-3 text-slate-400 font-mono">{wrk.uptimeSeconds}s</td>
                    <td className="p-3 text-slate-400">{new Date(wrk.lastHeartbeat).toLocaleTimeString()}</td>
                    <td className="p-3 text-right space-x-1.5">
                      <button
                        onClick={() => workerActionMutation.mutate({ workerId: wrk.id, action: "restart" })}
                        className="px-2.5 py-1 rounded-lg bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600 hover:text-white transition text-[11px]"
                      >
                        Restart
                      </button>
                      <button
                        onClick={() => workerActionMutation.mutate({ workerId: wrk.id, action: "pause" })}
                        className="px-2 py-1 rounded-lg bg-amber-950/40 text-amber-300 hover:bg-amber-600 hover:text-white transition text-[11px]"
                      >
                        Pause
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
