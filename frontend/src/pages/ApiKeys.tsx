import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Copy, Plus, Check, ShieldAlert } from "lucide-react";
import { useApiKeys, useCreateApiKey, useRevokeApiKey } from "../hooks/useApi";
import { PageHeader, Card, Button, Input, StatusBadge, Dialog, ConfirmDialog } from "../components/UI";
import { DataTable } from "../components/DataTable";
import type { Column } from "../components/DataTable";
import type { ApiKey as ApiKeyType } from "../types";

export const ApiKeys: React.FC = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [createdKey, setCreatedKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [revokeTarget, setRevokeTarget] = useState<string | null>(null);

  const { data: keysData, isLoading, isError, error } = useApiKeys();
  const createApiKey = useCreateApiKey();
  const revokeApiKey = useRevokeApiKey();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ name: string; expiresAt?: string }>();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCreateSubmit = (data: { name: string; expiresAt?: string }) => {
    createApiKey.mutate(
      {
        name: data.name,
        expiresAt: data.expiresAt ? new Date(data.expiresAt).toISOString() : undefined,
      },
      {
        onSuccess: (res) => {
          setCreatedKey(res.data.key || null);
          setIsCreateOpen(false);
          reset();
        },
      }
    );
  };

  const handleRevoke = () => {
    if (revokeTarget) {
      revokeApiKey.mutate(revokeTarget, {
        onSuccess: () => {
          setRevokeTarget(null);
        },
      });
    }
  };

  const columns: Column<ApiKeyType>[] = [
    {
      header: "Name",
      accessor: (row) => <div className="font-semibold">{row.name}</div>,
    },
    {
      header: "Key Prefix",
      accessor: (row) => <code className="px-1.5 py-1 bg-muted rounded font-mono text-xs">{row.keyPrefix}...</code>,
    },
    {
      header: "Status",
      accessor: (row) => <StatusBadge active={row.isActive && (!row.expiresAt || new Date(row.expiresAt) > new Date())} label={row.isActive ? "Active" : "Revoked"} />,
    },
    {
      header: "Last Used",
      accessor: (row) => (row.lastUsedAt ? new Date(row.lastUsedAt).toLocaleString() : "Never"),
    },
    {
      header: "Expires At",
      accessor: (row) => (row.expiresAt ? new Date(row.expiresAt).toLocaleDateString() : "Never"),
    },
    {
      header: "Actions",
      className: "text-right",
      accessor: (row) => (
        <div className="flex justify-end gap-2">
          {row.isActive && (
            <Button
              variant="danger"
              className="py-1 px-2.5 text-xs h-8"
              onClick={() => setRevokeTarget(row.id)}
            >
              Revoke
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="API Keys"
        description="Manage secure API credentials used by external integrations to access consent validation APIs."
      >
        <Button onClick={() => setIsCreateOpen(true)} className="h-10">
          <Plus className="w-4 h-4" />
          Generate New Key
        </Button>
      </PageHeader>

      <Card>
        <DataTable
          columns={columns}
          data={keysData?.data}
          isLoading={isLoading}
          isError={isError}
          error={error}
          emptyTitle="No API Keys Found"
          emptyDescription="Create an API key to allow server-to-server calls to your consent manager system."
        />
      </Card>

      {/* Create API Key Dialog */}
      <Dialog isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Generate New API Key">
        <form onSubmit={handleSubmit(handleCreateSubmit)} className="space-y-4">
          <Input
            label="Key Name"
            placeholder="e.g. Production Service"
            error={errors.name?.message}
            {...register("name", { required: "Name is required" })}
          />

          <Input
            label="Expiration Date (Optional)"
            type="date"
            {...register("expiresAt")}
          />

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => setIsCreateOpen(false)} disabled={createApiKey.isPending}>
              Cancel
            </Button>
            <Button type="submit" loading={createApiKey.isPending}>
              Generate Key
            </Button>
          </div>
        </form>
      </Dialog>

      {/* Display Generated Key Dialog */}
      <Dialog isOpen={!!createdKey} onClose={() => setCreatedKey(null)} title="API Key Generated Successfully">
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 flex items-start gap-3 text-sm">
            <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Copy this API Key now!</p>
              <p className="text-xs mt-1">For security reasons, you cannot view this key again once this dialog is closed.</p>
            </div>
          </div>

          <div className="flex items-center gap-2 border p-3 rounded-lg bg-muted font-mono text-sm break-all">
            <span className="flex-1">{createdKey}</span>
            <Button
              variant="ghost"
              className="shrink-0 p-2 h-9 w-9"
              onClick={() => createdKey && handleCopy(createdKey)}
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>

          <div className="flex justify-end pt-4 border-t">
            <Button onClick={() => setCreatedKey(null)}>
              Done
            </Button>
          </div>
        </div>
      </Dialog>

      {/* Revoke Confirm Dialog */}
      <ConfirmDialog
        isOpen={!!revokeTarget}
        onClose={() => setRevokeTarget(null)}
        onConfirm={handleRevoke}
        title="Revoke API Key"
        description="Are you absolutely sure you want to revoke this API Key? Any application using this key will immediately lose access to all API endpoints."
        loading={revokeApiKey.isPending}
      />
    </div>
  );
};
