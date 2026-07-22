import React from "react";
import { useQuery } from "@tanstack/react-query";
import { platformApiClient } from "../../services/platformApiClient";
import { Calendar, CheckCircle2, XCircle, Clock } from "lucide-react";

export const ScheduledJobsView: React.FC = () => {
  const { data: jobs = [], isLoading } = useQuery({
    queryKey: ["platform-scheduled-jobs"],
    queryFn: async () => {
      const res = await platformApiClient.get("/scheduled-jobs");
      return res.data.data || [];
    },
    refetchInterval: 5000,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <Calendar className="w-7 h-7 text-indigo-400" />
          Scheduled Cleanup Jobs
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Execution logs and performance metrics for background maintenance and data retention tasks.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold bg-slate-950/50">
                <th className="p-4">Execution ID</th>
                <th className="p-4">Job Name</th>
                <th className="p-4">Status</th>
                <th className="p-4">Processed / Deleted</th>
                <th className="p-4">Duration</th>
                <th className="p-4">Started At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-500">
                    Loading scheduled jobs execution history...
                  </td>
                </tr>
              ) : jobs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-500">
                    No cleanup execution history recorded yet.
                  </td>
                </tr>
              ) : (
                jobs.map((job: any) => (
                  <tr key={job.id} className="hover:bg-slate-800/40 transition">
                    <td className="p-4 font-mono text-slate-300">{job.id}</td>
                    <td className="p-4 font-semibold text-slate-200">{job.jobName}</td>
                    <td className="p-4">
                      {job.status === "SUCCESS" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/40 text-emerald-400 text-[11px] font-semibold border border-emerald-900/50">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          SUCCESS
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-950/40 text-rose-400 text-[11px] font-semibold border border-rose-900/50">
                          <XCircle className="w-3.5 h-3.5" />
                          FAILED
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-slate-300">
                      {job.itemsProcessed} processed / {job.itemsDeleted} deleted
                    </td>
                    <td className="p-4 font-mono text-slate-400">{job.durationMs ?? 0} ms</td>
                    <td className="p-4 text-slate-400">{new Date(job.startedAt).toLocaleString()}</td>
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
