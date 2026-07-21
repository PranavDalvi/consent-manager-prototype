import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Layers, RefreshCw } from "lucide-react";
import { platformApiClient } from "../../services/platformApiClient";

export const PlatformQueuesView: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["platformQueues"],
    queryFn: async () => {
      const res = await platformApiClient.get("/queues");
      return res.data.data;
    },
    refetchInterval: 5000,
  });

  if (isLoading || !data) {
    return <div className="flex items-center justify-center min-h-[400px] text-slate-400 text-sm gap-2"><RefreshCw className="w-4 h-4 animate-spin text-indigo-500" /> Loading Queue Data...</div>;
  }

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <Layers className="w-6 h-6 text-indigo-400" /> Queue Operations
        </h1>
        <p className="text-xs text-slate-400 mt-1">Real-time BullMQ background job queues statistics.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400">Waiting Jobs</span>
          <div className="text-2xl font-bold text-amber-400 mt-2">{data.waiting}</div>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400">Active Jobs</span>
          <div className="text-2xl font-bold text-indigo-400 mt-2">{data.active}</div>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400">Completed Jobs</span>
          <div className="text-2xl font-bold text-emerald-400 mt-2">{data.completed}</div>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400">Failed Jobs</span>
          <div className="text-2xl font-bold text-red-400 mt-2">{data.failed}</div>
        </div>
      </div>
    </div>
  );
};
