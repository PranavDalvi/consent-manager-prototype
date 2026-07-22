import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { platformApiClient } from "../../services/platformApiClient";
import { Webhook, RotateCcw } from "lucide-react";

export const FailedWebhooksView: React.FC = () => {
  const queryClient = useQueryClient();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedDelivery, setSelectedDelivery] = useState<any | null>(null);

  const { data: failedWebhooks = [], isLoading } = useQuery({
    queryKey: ["platform-failed-webhooks"],
    queryFn: async () => {
      const res = await platformApiClient.get("/webhooks/failed");
      return res.data.data || [];
    },
    refetchInterval: 5000,
  });

  const replayMutation = useMutation({
    mutationFn: async (id: string) => {
      await platformApiClient.post(`/webhooks/${id}/replay`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["platform-failed-webhooks"] });
    },
  });

  const bulkReplayMutation = useMutation({
    mutationFn: async (ids: string[]) => {
      await platformApiClient.post("/webhooks/replay", { ids });
    },
    onSuccess: () => {
      setSelectedIds([]);
      queryClient.invalidateQueries({ queryKey: ["platform-failed-webhooks"] });
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
            <Webhook className="w-7 h-7 text-amber-500" />
            Failed Webhooks History
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Complete record of webhook delivery failures with retry history and replay capability.
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
                <th className="p-4">Delivery ID</th>
                <th className="p-4">Webhook Target</th>
                <th className="p-4">HTTP Status</th>
                <th className="p-4">Error Message</th>
                <th className="p-4">Attempt</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-500">
                    Loading failed webhooks...
                  </td>
                </tr>
              ) : failedWebhooks.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-500">
                    No failed webhook deliveries found.
                  </td>
                </tr>
              ) : (
                failedWebhooks.map((item: any) => (
                  <tr key={item.id} className="hover:bg-slate-800/40 transition">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(item.id)}
                        onChange={() => toggleSelect(item.id)}
                        className="rounded border-slate-700 bg-slate-800 text-indigo-600 cursor-pointer"
                      />
                    </td>
                    <td className="p-4">
                      <div className="font-mono text-slate-200">{item.id}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{new Date(item.createdAt).toLocaleString()}</div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-slate-300">{item.webhook?.name || item.webhookId}</div>
                      <div className="text-[10px] text-slate-500 truncate max-w-xs">{item.webhook?.url}</div>
                    </td>
                    <td className="p-4 font-mono text-rose-400">{item.httpStatus || "ERR"}</td>
                    <td className="p-4 text-rose-300 max-w-xs truncate" title={item.errorMessage}>
                      {item.errorMessage || "Delivery error"}
                    </td>
                    <td className="p-4 text-slate-400">{item.attempt}</td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => setSelectedDelivery(item)}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition text-[11px]"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => replayMutation.mutate(item.id)}
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

      {selectedDelivery && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Webhook Delivery Details</h3>
              <button onClick={() => setSelectedDelivery(null)} className="text-slate-400 hover:text-white">
                ✕
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 font-semibold">Delivery ID: </span>
                <span className="font-mono text-slate-200">{selectedDelivery.id}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold">Error Message: </span>
                <p className="p-2.5 bg-rose-950/40 text-rose-300 rounded-xl font-mono mt-1">{selectedDelivery.errorMessage}</p>
              </div>
              <div>
                <span className="text-slate-400 font-semibold">Response Body: </span>
                <pre className="p-2.5 bg-slate-950 text-slate-300 rounded-xl overflow-x-auto mt-1 font-mono">
                  {selectedDelivery.responseBody || "No response body recorded."}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
