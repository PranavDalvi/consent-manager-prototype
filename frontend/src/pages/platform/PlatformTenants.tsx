import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Building2,
  Key,
  ShieldCheck,
  CheckCircle2,
  Webhook,
  RefreshCw,
  AlertTriangle,
  Plus,
  Search,
  Copy,
  Check,
  Ban,
  Trash2,
  Eye,
  X,
} from "lucide-react";
import { platformApiClient } from "../../services/platformApiClient";

export const PlatformTenants: React.FC = () => {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");

  // Create Tenant Modal State
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerFirstName, setOwnerFirstName] = useState("");
  const [ownerLastName, setOwnerLastName] = useState("");

  const [generatedInviteLink, setGeneratedInviteLink] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Selected Tenant Details Drawer State
  const [selectedTenantId, setSelectedTenantId] = useState<string | null>(null);

  const { data: tenants = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["platformTenants"],
    queryFn: async () => {
      const response = await platformApiClient.get("/tenants");
      return response.data.data;
    },
    refetchInterval: 5000,
  });

  const { data: selectedTenantDetails, isLoading: isLoadingDetails } = useQuery({
    queryKey: ["platformTenantDetails", selectedTenantId],
    queryFn: async () => {
      if (!selectedTenantId) return null;
      const res = await platformApiClient.get(`/tenants/${selectedTenantId}`);
      return res.data.data;
    },
    enabled: !!selectedTenantId,
  });

  const createTenantMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await platformApiClient.post("/tenants", data);
      return res.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["platformTenants"] });
      if (data.data?.ownerInviteLink) {
        setGeneratedInviteLink(data.data.ownerInviteLink);
      } else {
        setIsCreateOpen(false);
        resetCreateForm();
      }
    },
    onError: (err: any) => {
      alert(err.response?.data?.message || "Failed to create tenant");
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ tenantId, status }: { tenantId: string; status: string }) => {
      const res = await platformApiClient.patch(`/tenants/${tenantId}/status`, { status });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["platformTenants"] });
    },
    onError: (err: any) => {
      alert(err.response?.data?.message || "Failed to update tenant status");
    },
  });

  const softDeleteMutation = useMutation({
    mutationFn: async (tenantId: string) => {
      const res = await platformApiClient.delete(`/tenants/${tenantId}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["platformTenants"] });
    },
    onError: (err: any) => {
      alert(err.response?.data?.message || "Failed to delete tenant");
    },
  });

  const resetCreateForm = () => {
    setName("");
    setSlug("");
    setOwnerEmail("");
    setOwnerFirstName("");
    setOwnerLastName("");
    setGeneratedInviteLink(null);
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createTenantMutation.mutate({
      name,
      slug,
      ownerEmail,
      ownerFirstName,
      ownerLastName,
    });
  };

  const copyLink = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredTenants = tenants.filter((t: any) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.slug.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || t.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[500px] text-slate-400 text-sm gap-3">
        <RefreshCw className="w-5 h-5 animate-spin text-indigo-500" />
        Fetching Tenants...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 bg-red-950/40 border border-red-800 text-red-300 rounded-2xl">
        <h3 className="font-bold text-sm flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" /> Failed to load tenant list.
        </h3>
        <button onClick={() => refetch()} className="mt-3 px-3 py-1.5 bg-red-900 text-xs font-medium rounded-xl">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <Building2 className="w-6 h-6 text-indigo-400" /> Super Admin Tenant Management
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Provision tenants, issue owner invitations, and manage tenant status lifecycles.
          </p>
        </div>
        <button
          onClick={() => {
            resetCreateForm();
            setIsCreateOpen(true);
          }}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs rounded-xl shadow-lg flex items-center gap-2 transition"
        >
          <Plus className="w-4 h-4" /> Create Tenant
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/80 p-4 border border-slate-800 rounded-2xl">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search name or slug..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400">Status:</span>
          {["ALL", "ACTIVE", "SUSPENDED", "ARCHIVED", "DELETED"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-lg font-medium transition ${
                statusFilter === s
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Tenant Table */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950/80 text-slate-400 font-semibold uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-6 py-4">Tenant Name</th>
                <th className="px-6 py-4">Users</th>
                <th className="px-6 py-4">API Keys</th>
                <th className="px-6 py-4">Policies</th>
                <th className="px-6 py-4">Consents</th>
                <th className="px-6 py-4">Webhooks</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredTenants.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-8 text-center text-slate-500">
                    No tenants matching filter criteria.
                  </td>
                </tr>
              ) : (
                filteredTenants.map((tenant: any) => (
                  <tr key={tenant.id} className="hover:bg-slate-800/40 transition">
                    <td className="px-6 py-4 font-medium text-white">
                      <div>{tenant.name}</div>
                      <div className="text-[11px] text-slate-500 font-mono mt-0.5">{tenant.slug}</div>
                    </td>
                    <td className="px-6 py-4 font-mono text-slate-200">{tenant.usersCount || tenant._count?.users || 0}</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1 text-amber-400">
                        <Key className="w-3.5 h-3.5" /> {tenant.apiKeysCount || tenant._count?.apiKeys || 0}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1 text-emerald-400">
                        <ShieldCheck className="w-3.5 h-3.5" /> {tenant.policiesCount || tenant._count?.policies || 0}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1 text-purple-400">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {tenant.consentsCount || tenant._count?.consents || 0}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1 text-cyan-400">
                        <Webhook className="w-3.5 h-3.5" /> {tenant.webhookCount || tenant._count?.webhooks || 0}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          tenant.status === "ACTIVE"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : tenant.status === "SUSPENDED"
                            ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                            : tenant.status === "ARCHIVED"
                            ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            : "bg-red-500/10 text-red-400 border border-red-500/20"
                        }`}
                      >
                        {tenant.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => setSelectedTenantId(tenant.id)}
                        className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition"
                        title="View Details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      {tenant.status === "ACTIVE" ? (
                        <button
                          onClick={() => updateStatusMutation.mutate({ tenantId: tenant.id, status: "SUSPENDED" })}
                          className="p-1.5 bg-amber-950/60 hover:bg-amber-900 text-amber-300 rounded-lg transition"
                          title="Suspend Tenant"
                        >
                          <Ban className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => updateStatusMutation.mutate({ tenantId: tenant.id, status: "ACTIVE" })}
                          className="p-1.5 bg-emerald-950/60 hover:bg-emerald-900 text-emerald-300 rounded-lg transition"
                          title="Activate Tenant"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {tenant.status !== "DELETED" && (
                        <button
                          onClick={() => softDeleteMutation.mutate(tenant.id)}
                          className="p-1.5 bg-red-950/60 hover:bg-red-900 text-red-300 rounded-lg transition"
                          title="Soft Delete Tenant"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Tenant Modal */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg p-6 space-y-4 shadow-2xl text-white">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold">Create New Tenant</h2>
              <button onClick={() => setIsCreateOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {generatedInviteLink ? (
              <div className="space-y-4">
                <div className="p-4 bg-emerald-950/40 border border-emerald-800 text-emerald-300 rounded-xl text-xs">
                  <p className="font-bold mb-1">Tenant Created & Owner Invitation Generated!</p>
                  <p>Send this invitation link to the owner to set their password and activate the workspace:</p>
                </div>

                <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-indigo-300 break-all">
                  <span className="flex-1 select-all">{generatedInviteLink}</span>
                  <button
                    onClick={() => copyLink(generatedInviteLink)}
                    className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <button
                  onClick={() => setIsCreateOpen(false)}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs rounded-xl"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleCreateSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 mb-1">Tenant Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Corporation"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (!slug) setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, "-"));
                    }}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Workspace Slug</label>
                  <input
                    type="text"
                    required
                    placeholder="acme-corp"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Owner Email</label>
                  <input
                    type="email"
                    required
                    placeholder="owner@acme.com"
                    value={ownerEmail}
                    onChange={(e) => setOwnerEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1">Owner First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      value={ownerFirstName}
                      onChange={(e) => setOwnerFirstName(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">Owner Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      value={ownerLastName}
                      onChange={(e) => setOwnerLastName(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsCreateOpen(false)}
                    className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={createTenantMutation.isPending}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl"
                  >
                    {createTenantMutation.isPending ? "Creating..." : "Create & Issue Invitation"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Tenant Details Drawer / Modal */}
      {selectedTenantId && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl p-6 space-y-4 text-white max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold">Tenant Details</h2>
              <button onClick={() => setSelectedTenantId(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {isLoadingDetails || !selectedTenantDetails ? (
              <div className="py-8 text-center text-slate-400">Loading details...</div>
            ) : (
              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-4 p-4 bg-slate-950 rounded-xl border border-slate-800">
                  <div>
                    <span className="text-slate-500 block">Tenant ID:</span>
                    <span className="font-mono text-indigo-300">{selectedTenantDetails.id}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Name / Slug:</span>
                    <span>{selectedTenantDetails.name} ({selectedTenantDetails.slug})</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Status:</span>
                    <span className="font-bold text-emerald-400">{selectedTenantDetails.status}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Created At:</span>
                    <span>{new Date(selectedTenantDetails.createdAt).toLocaleString()}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-slate-300 mb-2">Users ({selectedTenantDetails.users?.length || 0})</h3>
                  <div className="space-y-1">
                    {selectedTenantDetails.users?.map((u: any) => (
                      <div key={u.id} className="p-2.5 bg-slate-950 border border-slate-800/80 rounded-xl flex items-center justify-between">
                        <div>
                          <span className="font-medium text-white">{u.email}</span>
                          <span className="ml-2 text-slate-500">({u.role})</span>
                        </div>
                        <span className={`text-[10px] font-bold ${u.isActive ? "text-emerald-400" : "text-red-400"}`}>
                          {u.isActive ? "ACTIVE" : "DISABLED"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
