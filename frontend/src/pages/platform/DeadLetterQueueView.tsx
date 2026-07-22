import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { platformApiClient } from "../../services/platformApiClient";
import { AlertOctagon, RotateCcw, Trash2, CheckCircle2, XCircle, Search, Filter } from "lucide-react";

export const DeadLetterQueueView: React.FC = () => {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQueue, setSelectedQueue] = useState("ALL");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const { data: dlqJobs = [], isLoading, refetch } = useQuery({
    queryKey: ["platform-dlq"],
    queryFn: async () => {
      const res = await platformApiClient.get("/dlq");
      return res.data.data || [];
    },
    refetchInterval: 5000,
  });

  const replayMutation = useMutation({
    mutationFn: async (jobId: string) => {
      await platformApiClient.post(`/dlq/${jobId}/replay`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["platform-dlq"] });
      queryClient.invalidateQueries({ queryKey: ["platform-overview"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (jobId: string) => {
      await platformApiClient.delete(`/dlq/${jobId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["platform-dlq"] });
    },
  });

  const bulkReplayMutation = useMutation({
    mutationFn: async (ids: string[]) => {
      await platformApiClient.post("/dlq/replay", { ids });
    },
    onSuccess: () => {
      setSelectedIds([]);
      queryClient.invalidateQueries({ queryKey: ["platform-dlq"] });
    },
  });

  const filteredJobs = dlqJobs.filter((job: any) => {
    const matchesQueue = selectedQueue === "ALL" || job.queue === selectedQueue;
    const matchesSearch =
      !searchTerm ||
      job.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (job.data?.tenantId && job.data.tenantId.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (job.failedReason && job.failedReason.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesQueue && matchesSearch;
  });

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredJobs.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredJobs.map((j: any) => j.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <AlertOctagon className="w-7 h-7 text-rose-500" />
            Dead Letter Queue (DLQ)
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Jobs that failed maximum retries are isolated here for audit and manual recovery.
          </p>
        </div>
        {selectedIds.length > 0 && (
          <button
            onClick={() => bulkReplayMutation.mutate(selectedIds)}
            disabled={bulkReplayMutation.isPending}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-indigo-600/30 transition disabled:opacity-50"
          >
            <RotateCcw className="w-4 h-4" />
            Bulk Replay ({selectedIds.length})
          </button>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search Job ID, Tenant, or Error..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-indigo-500 transition"
          />
        </div>
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5">
          <Filter className="w-4 h-4 text-slate-500" />
          <select
            value={selectedQueue}
            onChange={(e) => setSelectedQueue(e.target.value)}
            className="bg-transparent text-xs text-slate-300 focus:outline-none cursor-pointer"
          >
            <option value="ALL">All Queues</option>
            <option value="webhook-deliveries">Webhook Queue</option>
            <option value="internal-events">Internal Events Queue</option>
          </select>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold bg-slate-950/50">
                <th className="p-4 w-10">
                  <input
                    type="checkbox"
                    checked={filteredJobs.length > 0 && selectedIds.length === filteredJobs.length}
                    onChange={toggleSelectAll}
                    className="rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-0 cursor-pointer"
                  />
                </th>
                <th className="p-4">Job ID / Queue</th>
                <th className="p-4">Tenant / Event</th>
                <th className="p-4">Failure Reason</th>
                <th className="p-4">Attempts</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-500">
                    Loading DLQ jobs...
                  </td>
                </tr>
              ) : filteredJobs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-500">
                    No failed jobs in Dead Letter Queue.
                  </td>
                </tr>
              ) : (
                filteredJobs.map((job: any) => (
                  <tr key={job.id} className="hover:bg-slate-800/40 transition">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(job.id)}
                        onChange={() => toggleSelect(job.id)}
                        className="rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-0 cursor-pointer"
                      />
                    </td>
                    <td className="p-4">
                      <div className="font-mono text-slate-200">{job.id}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{job.queue}</div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-slate-300">{job.data?.tenantId || "N/A"}</div>
                      <div className="text-[10px] text-indigo-400 mt-0.5">{job.data?.eventType || job.name}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-rose-400 max-w-xs truncate" title={job.failedReason}>
                        {job.failedReason || "Exhausted retries"}
                      </div>
                    </td>
                    <td className="p-4 text-slate-400">{job.data?.attempts || job.data?.retryCount || 5}</td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => replayMutation.mutate(job.id)}
                        disabled={replayMutation.isPending}
                        className="px-2.5 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600 hover:text-white transition font-medium text-[11px]"
                      >
                        Replay
                      </button>
                      <button
                        onClick={() => deleteMutation.mutate(job.id)}
                        disabled={deleteMutation.isPending}
                        className="px-2.5 py-1.5 rounded-lg bg-rose-950/40 text-rose-400 hover:bg-rose-600 hover:text-white transition font-medium text-[11px]"
                      >
                        Delete
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
