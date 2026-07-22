import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { platformApiClient } from "../../services/platformApiClient";
import { Webhook, RotateCcw, ShieldAlert } from "lucide-react";

export const PlatformWebhooksView: React.FC = () => {
  const queryClient = useQueryClient();

  const { data: webhooksMetrics } = useQuery({
    queryKey: ["platformWebhooksMetrics"],
    queryFn: async () => {
      const res = await platformApiClient.get("/webhooks");
      return res.data.data;
    },
    refetchInterval: 5000,
  });

  const { data: circuitBreakers = [], isLoading: cbLoading } = useQuery({
    queryKey: ["platformCircuitBreakers"],
    queryFn: async () => {
      const res = await platformApiClient.get("/circuit-breakers");
      return res.data.data || [];
    },
    refetchInterval: 5000,
  });

  const { data: failedDeliveries = [], isLoading: failedLoading } = useQuery({
    queryKey: ["platformFailedWebhooks"],
    queryFn: async () => {
      const res = await platformApiClient.get("/webhooks/failed");
      return res.data.data || [];
    },
    refetchInterval: 5000,
  });

  const replayMutation = useMutation({
    mutationFn: async (deliveryId: string) => {
      await platformApiClient.post(`/webhooks/${deliveryId}/replay`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["platformFailedWebhooks"] });
    },
  });

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
          <Webhook className="w-7 h-7 text-indigo-400" />
          Webhook Management & Reliability
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Monitor webhook endpoint health, delivery latencies, circuit breakers, and replay delivery failures.
        </p>
      </div>

      {/* Webhook Overview Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400">Active Webhooks</span>
          <div className="text-2xl font-bold text-white mt-1">{webhooksMetrics?.activeWebhooks ?? 0}</div>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400">Total Deliveries</span>
          <div className="text-2xl font-bold text-white mt-1">{webhooksMetrics?.deliveries ?? 0}</div>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400">Delivery Failures</span>
          <div className="text-2xl font-bold text-amber-400 mt-1">{failedDeliveries.length}</div>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400">Avg Delivery Latency</span>
          <div className="text-2xl font-bold text-emerald-400 mt-1">{webhooksMetrics?.avgDeliveryLatencyMs ?? 0} ms</div>
        </div>
      </div>

      {/* Circuit Breakers Section */}
      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
        <h2 className="text-sm font-bold text-white flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-rose-400" /> Webhook Circuit Breaker Status
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold bg-slate-950/50">
                <th className="p-3">Webhook Endpoint</th>
                <th className="p-3">State</th>
                <th className="p-3">Consecutive Failures</th>
                <th className="p-3">Opened At</th>
                <th className="p-3">Last Tested At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {cbLoading ? (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-slate-500">Loading circuit breakers...</td>
                </tr>
              ) : circuitBreakers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-slate-500">All webhook endpoints operating normally (CLOSED state).</td>
                </tr>
              ) : (
                circuitBreakers.map((cb: any) => (
                  <tr key={cb.id} className="hover:bg-slate-800/40">
                    <td className="p-3">
                      <div className="font-semibold text-slate-200">{cb.webhook?.name || cb.webhookId}</div>
                      <div className="text-[10px] text-slate-500">{cb.webhook?.url}</div>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        cb.state === "OPEN" ? "bg-rose-500/10 text-rose-400 border border-rose-500/20" :
                        cb.state === "HALF_OPEN" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                        "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      }`}>
                        {cb.state}
                      </span>
                    </td>
                    <td className="p-3 text-slate-300">{cb.consecutiveFailures}</td>
                    <td className="p-3 text-slate-400">{cb.openedAt ? new Date(cb.openedAt).toLocaleString() : "-"}</td>
                    <td className="p-3 text-slate-400">{cb.lastTestedAt ? new Date(cb.lastTestedAt).toLocaleString() : "-"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Webhook Delivery Failures & Replay Actions */}
      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
        <h2 className="text-sm font-bold text-white flex items-center gap-2">
          <RotateCcw className="w-4 h-4 text-indigo-400" /> Delivery Failure History & Replay
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold bg-slate-950/50">
                <th className="p-3">Delivery ID</th>
                <th className="p-3">Webhook Name</th>
                <th className="p-3">HTTP Status</th>
                <th className="p-3">Error Message</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {failedLoading ? (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-slate-500">Loading failed webhooks...</td>
                </tr>
              ) : failedDeliveries.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-slate-500">No failed webhook deliveries.</td>
                </tr>
              ) : (
                failedDeliveries.slice(0, 10).map((item: any) => (
                  <tr key={item.id} className="hover:bg-slate-800/40">
                    <td className="p-3 font-mono text-slate-300">{item.id}</td>
                    <td className="p-3 font-semibold text-slate-200">{item.webhook?.name || item.webhookId}</td>
                    <td className="p-3 font-mono text-rose-400">{item.httpStatus || "ERR"}</td>
                    <td className="p-3 text-rose-300 truncate max-w-xs">{item.errorMessage}</td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => replayMutation.mutate(item.id)}
                        disabled={replayMutation.isPending}
                        className="px-2.5 py-1 rounded-lg bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600 hover:text-white transition text-[11px]"
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
