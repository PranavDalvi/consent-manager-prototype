import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { platformApiClient } from "../../services/platformApiClient";
import { Activity, RotateCcw, AlertTriangle, Play } from "lucide-react";

export const FailedEventsView: React.FC = () => {
  const queryClient = useQueryClient();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const { data: failedEvents = [], isLoading } = useQuery({
    queryKey: ["platform-failed-events"],
    queryFn: async () => {
      const res = await platformApiClient.get("/events/failed");
      return res.data.data || [];
    },
    refetchInterval: 5000,
  });

  const replayMutation = useMutation({
    mutationFn: async (id: string) => {
      await platformApiClient.post(`/events/${id}/replay`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["platform-failed-events"] });
    },
  });

  const bulkReplayMutation = useMutation({
    mutationFn: async (ids: string[]) => {
      await platformApiClient.post("/events/replay", { ids });
    },
    onSuccess: () => {
      setSelectedIds([]);
      queryClient.invalidateQueries({ queryKey: ["platform-failed-events"] });
    },
  });

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Activity className="w-7 h-7 text-indigo-400" />
            Failed Internal Events
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Trace and manually replay internal domain events that encountered system errors.
          </p>
        </div>
        {selectedIds.length > 0 && (
          <button
            onClick={() => bulkReplayMutation.mutate(selectedIds)}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg transition"
          >
            <RotateCcw className="w-4 h-4" />
            Bulk Replay ({selectedIds.length})
          </button>
        )}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold bg-slate-950/50">
                <th className="p-4 w-10">Select</th>
                <th className="p-4">Event ID</th>
                <th className="p-4">Tenant</th>
                <th className="p-4">Event Type</th>
                <th className="p-4">Status</th>
                <th className="p-4">Created At</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-500">
                    Loading failed events...
                  </td>
                </tr>
              ) : failedEvents.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-500">
                    No failed internal events recorded.
                  </td>
                </tr>
              ) : (
                failedEvents.map((event: any) => (
                  <tr key={event.id} className="hover:bg-slate-800/40 transition">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(event.id)}
                        onChange={() => toggleSelect(event.id)}
                        className="rounded border-slate-700 bg-slate-800 text-indigo-600 cursor-pointer"
                      />
                    </td>
                    <td className="p-4 font-mono text-slate-200">{event.id}</td>
                    <td className="p-4 font-medium text-slate-300">{event.tenantId}</td>
                    <td className="p-4 text-indigo-400 font-semibold">{event.type}</td>
                    <td className="p-4 font-semibold text-rose-400">{event.status}</td>
                    <td className="p-4 text-slate-400">{new Date(event.createdAt).toLocaleString()}</td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => replayMutation.mutate(event.id)}
                        disabled={replayMutation.isPending}
                        className="px-2.5 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600 hover:text-white transition font-medium text-[11px]"
                      >
                        Replay
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
