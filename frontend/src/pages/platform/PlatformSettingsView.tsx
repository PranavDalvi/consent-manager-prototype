import React, { useState } from "react";
import { Settings, RefreshCw, Database, Sliders } from "lucide-react";

export const PlatformSettingsView: React.FC = () => {
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 font-sans max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
          <Settings className="w-7 h-7 text-indigo-400" />
          Platform Settings & Reliability Configuration
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Configure global system parameters, retry policy backoffs, circuit breaker thresholds, and retention policies.
        </p>
      </div>

      {saved && (
        <div className="p-4 bg-emerald-950/40 border border-emerald-800 text-emerald-300 rounded-xl text-xs font-semibold">
          Platform configurations updated successfully.
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Retry Policy Configuration */}
        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-indigo-400" /> Retry Policy Settings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Max Retry Attempts (RETRY_MAX_RETRIES)</label>
              <input
                type="number"
                defaultValue={5}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Initial Delay MS (RETRY_INITIAL_DELAY_MS)</label>
              <input
                type="number"
                defaultValue={1000}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Max Delay MS (RETRY_MAX_DELAY_MS)</label>
              <input
                type="number"
                defaultValue={60000}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Backoff Multiplier (RETRY_BACKOFF_MULTIPLIER)</label>
              <input
                type="number"
                defaultValue={2}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Circuit Breaker Configuration */}
        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <Sliders className="w-4 h-4 text-rose-400" /> Circuit Breaker Settings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Failure Threshold</label>
              <input
                type="number"
                defaultValue={5}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Open Timeout MS</label>
              <input
                type="number"
                defaultValue={30000}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Half-Open Max Requests</label>
              <input
                type="number"
                defaultValue={1}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Cleanup Retention Configuration */}
        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <Database className="w-4 h-4 text-amber-400" /> Cleanup Retention Periods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Webhook History (WEBHOOK_RETENTION_DAYS)</label>
              <input
                type="number"
                defaultValue={30}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">DLQ Job Retention (DLQ_RETENTION_DAYS)</label>
              <input
                type="number"
                defaultValue={14}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Log Retention (LOG_RETENTION_DAYS)</label>
              <input
                type="number"
                defaultValue={30}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Replay Audit Retention (REPLAY_RETENTION_DAYS)</label>
              <input
                type="number"
                defaultValue={30}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-indigo-600/30 transition"
        >
          Save Platform Settings
        </button>
      </form>
    </div>
  );
};
