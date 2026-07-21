import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, Filter, RefreshCw, FileText } from "lucide-react";
import { platformApiClient } from "../../services/platformApiClient";

export const PlatformLogViewer: React.FC = () => {
  const [requestId, setRequestId] = useState("");
  const [correlationId, setCorrelationId] = useState("");
  const [tenantId, setTenantId] = useState("");
  const [level, setLevel] = useState("");
  const [method, setMethod] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [statusCode, setStatusCode] = useState("");
  const [search, setSearch] = useState("");

  const { data: logs, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ["platformLogs", { requestId, correlationId, tenantId, level, method, endpoint, statusCode, search }],
    queryFn: async () => {
      const response = await platformApiClient.get("/logs", {
        params: { requestId, correlationId, tenantId, level, method, endpoint, statusCode, search },
      });
      return response.data.data;
    },
    refetchInterval: 5000,
  });

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <FileText className="w-6 h-6 text-indigo-400" /> Platform Log Viewer
          </h1>
          <p className="text-xs text-slate-400 mt-1">Structured logs with Request ID & Correlation ID correlation.</p>
        </div>

        <button
          onClick={() => refetch()}
          disabled={isRefetching}
          className="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl text-xs font-medium hover:bg-slate-800 transition"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefetching ? "animate-spin text-indigo-400" : ""}`} />
          Refresh Logs
        </button>
      </div>

      {/* Filter Inputs Grid */}
      <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 mb-2">
          <Filter className="w-4 h-4 text-indigo-400" /> Search & Filter Controls
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div>
            <label className="block text-[10px] text-slate-400 uppercase font-semibold mb-1">Search Text</label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Query message..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-950/70 border border-slate-800 rounded-xl py-1.5 pl-8 pr-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] text-slate-400 uppercase font-semibold mb-1">Request ID</label>
            <input
              type="text"
              placeholder="Filter request ID..."
              value={requestId}
              onChange={(e) => setRequestId(e.target.value)}
              className="w-full bg-slate-950/70 border border-slate-800 rounded-xl py-1.5 px-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-[10px] text-slate-400 uppercase font-semibold mb-1">Correlation ID</label>
            <input
              type="text"
              placeholder="Filter correlation ID..."
              value={correlationId}
              onChange={(e) => setCorrelationId(e.target.value)}
              className="w-full bg-slate-950/70 border border-slate-800 rounded-xl py-1.5 px-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-[10px] text-slate-400 uppercase font-semibold mb-1">Tenant ID</label>
            <input
              type="text"
              placeholder="Filter tenant..."
              value={tenantId}
              onChange={(e) => setTenantId(e.target.value)}
              className="w-full bg-slate-950/70 border border-slate-800 rounded-xl py-1.5 px-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-[10px] text-slate-400 uppercase font-semibold mb-1">Log Level</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full bg-slate-950/70 border border-slate-800 rounded-xl py-1.5 px-3 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="">All Levels</option>
              <option value="info">INFO</option>
              <option value="warn">WARN</option>
              <option value="error">ERROR</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] text-slate-400 uppercase font-semibold mb-1">HTTP Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full bg-slate-950/70 border border-slate-800 rounded-xl py-1.5 px-3 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="">All Methods</option>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] text-slate-400 uppercase font-semibold mb-1">Endpoint</label>
            <input
              type="text"
              placeholder="/api/..."
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              className="w-full bg-slate-950/70 border border-slate-800 rounded-xl py-1.5 px-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-[10px] text-slate-400 uppercase font-semibold mb-1">Status Code</label>
            <input
              type="text"
              placeholder="200, 401, 500..."
              value={statusCode}
              onChange={(e) => setStatusCode(e.target.value)}
              className="w-full bg-slate-950/70 border border-slate-800 rounded-xl py-1.5 px-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono text-slate-300">
            <thead className="bg-slate-950/80 text-slate-400 font-sans font-semibold uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-4 py-3">Timestamp</th>
                <th className="px-4 py-3">Level</th>
                <th className="px-4 py-3">Method</th>
                <th className="px-4 py-3">Endpoint</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Latency</th>
                <th className="px-4 py-3">Request / Correlation ID</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-[11px]">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-slate-500 font-sans">
                    Loading log entries...
                  </td>
                </tr>
              ) : !logs || logs.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-slate-500 font-sans">
                    No log entries match the specified filters.
                  </td>
                </tr>
              ) : (
                logs.map((log: any) => (
                  <tr key={log.id} className="hover:bg-slate-800/40 transition">
                    <td className="px-4 py-3 text-slate-400 whitespace-nowrap">{new Date(log.timestamp).toLocaleTimeString()}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex px-2 py-0.5 rounded text-[9px] font-bold ${
                          log.level === "error"
                            ? "bg-red-500/10 text-red-400 border border-red-500/20"
                            : log.level === "warn"
                            ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                            : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                        }`}
                      >
                        {log.level.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold text-white">{log.method}</td>
                    <td className="px-4 py-3 text-slate-200">{log.endpoint}</td>
                    <td className="px-4 py-3 font-bold">
                      <span className={log.statusCode >= 400 ? "text-red-400" : "text-emerald-400"}>
                        {log.statusCode}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-400">{log.responseTimeMs}ms</td>
                    <td className="px-4 py-3 text-[10px] text-slate-500">
                      <div>Req: {log.requestId.slice(0, 13)}...</div>
                      <div>Corr: {log.correlationId.slice(0, 13)}...</div>
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
