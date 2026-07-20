import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, Webhook, Trash2, Edit2, Link as LinkIcon } from "lucide-react";
import { useWebhooks, useCreateWebhook, useUpdateWebhook, useToggleWebhook, useDeleteWebhook } from "../hooks/useApi";
import { PageHeader, Card, Button, Input, StatusBadge, Dialog, ConfirmDialog } from "../components/UI";
import { DataTable } from "../components/DataTable";
import type { Column } from "../components/DataTable";
import type { Webhook as WebhookType } from "../types";

export const Webhooks: React.FC = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedWebhook, setSelectedWebhook] = useState<WebhookType | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  const { data: webhooksData, isLoading, isError, error } = useWebhooks();
  const createWebhook = useCreateWebhook();
  const updateWebhook = useUpdateWebhook();
  const toggleWebhook = useToggleWebhook();
  const deleteWebhook = useDeleteWebhook();

  const {
    register: registerCreate,
    handleSubmit: handleSubmitCreate,
    reset: resetCreate,
    formState: { errors: errorsCreate },
  } = useForm<{ name: string; url: string; events: string[] }>();

  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    setValue: setEditValue,
    formState: { errors: errorsEdit },
  } = useForm<{ name: string; url: string; events: string[] }>();

  const handleCreate = (data: { name: string; url: string; events: string[] }) => {
    createWebhook.mutate(
      {
        name: data.name,
        url: data.url,
        events: typeof data.events === "string" ? [data.events] : data.events,
      },
      {
        onSuccess: () => {
          setIsCreateOpen(false);
          resetCreate();
        },
      }
    );
  };

  const handleEdit = (data: { name: string; url: string; events: string[] }) => {
    if (selectedWebhook) {
      updateWebhook.mutate(
        {
          id: selectedWebhook.id,
          name: data.name,
          url: data.url,
          events: typeof data.events === "string" ? [data.events] : data.events,
        },
        {
          onSuccess: () => {
            setIsEditOpen(false);
            setSelectedWebhook(null);
          },
        }
      );
    }
  };

  const handleToggle = (id: string, active: boolean) => {
    toggleWebhook.mutate({ id, active });
  };

  const handleDelete = () => {
    if (deleteTarget) {
      deleteWebhook.mutate(deleteTarget, {
        onSuccess: () => {
          setDeleteTarget(null);
        },
      });
    }
  };

  const columns: Column<WebhookType>[] = [
    {
      header: "Webhook Name",
      accessor: (row) => (
        <div className="flex items-center gap-2">
          <Webhook className="w-4 h-4 text-muted-foreground" />
          <span className="font-semibold">{row.name}</span>
        </div>
      ),
    },
    {
      header: "Endpoint URL",
      accessor: (row) => (
        <div className="flex items-center gap-1 text-xs text-muted-foreground max-w-xs truncate font-mono">
          <LinkIcon className="w-3.5 h-3.5" />
          {row.url}
        </div>
      ),
    },
    {
      header: "Events Subscribed",
      accessor: (row) => (
        <div className="flex flex-wrap gap-1">
          {row.events.map((ev, idx) => (
            <span key={idx} className="px-1.5 py-0.5 bg-muted border rounded font-mono text-[10px]">
              {ev}
            </span>
          ))}
        </div>
      ),
    },
    {
      header: "Status",
      accessor: (row) => <StatusBadge active={row.isActive} label={row.isActive ? "Active" : "Disabled"} />,
    },
    {
      header: "Actions",
      className: "text-right",
      accessor: (row) => (
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            className="py-1 px-2.5 text-xs h-8"
            onClick={() => {
              handleToggle(row.id, !row.isActive);
            }}
          >
            {row.isActive ? "Disable" : "Enable"}
          </Button>

          <Button
            variant="ghost"
            className="p-1 h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={() => {
              setSelectedWebhook(row);
              setEditValue("name", row.name);
              setEditValue("url", row.url);
              setEditValue("events", row.events);
              setIsEditOpen(true);
            }}
          >
            <Edit2 className="w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            className="p-1 h-8 w-8 text-destructive hover:text-destructive/80"
            onClick={() => setDeleteTarget(row.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Webhooks"
        description="Configure HTTP callbacks to notify your services in real-time when consent events are published."
      >
        <Button onClick={() => setIsCreateOpen(true)} className="h-10">
          <Plus className="w-4 h-4" />
          Register Webhook
        </Button>
      </PageHeader>

      <Card>
        <DataTable
          columns={columns}
          data={webhooksData?.data}
          isLoading={isLoading}
          isError={isError}
          error={error}
          emptyTitle="No Webhooks Configured"
          emptyDescription="Add a webhook subscriber to stream consent events (CONSENT_GRANTED, CONSENT_REVOKED) directly to your server API."
        />
      </Card>

      {/* Register Webhook Dialog */}
      <Dialog isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Register Webhook">
        <form onSubmit={handleSubmitCreate(handleCreate)} className="space-y-4">
          <Input
            label="Name / Identifier"
            placeholder="e.g. Analytics Webhook"
            error={errorsCreate.name?.message}
            {...registerCreate("name", { required: "Name is required" })}
          />

          <Input
            label="Target URL"
            type="url"
            placeholder="https://yourdomain.com/webhooks/consent"
            error={errorsCreate.url?.message}
            {...registerCreate("url", { required: "URL is required" })}
          />

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Subscribe to Events</label>
            <div className="space-y-2 border rounded-lg p-3 bg-muted/20">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  value="CONSENT_GRANTED"
                  defaultChecked
                  className="rounded border-input text-primary focus:ring-ring"
                  {...registerCreate("events", { required: "Select at least one event" })}
                />
                <span>CONSENT_GRANTED</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  value="CONSENT_REVOKED"
                  defaultChecked
                  className="rounded border-input text-primary focus:ring-ring"
                  {...registerCreate("events", { required: "Select at least one event" })}
                />
                <span>CONSENT_REVOKED</span>
              </label>
            </div>
            {errorsCreate.events && (
              <span className="text-xs text-destructive font-medium">{errorsCreate.events.message}</span>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => setIsCreateOpen(false)} disabled={createWebhook.isPending}>
              Cancel
            </Button>
            <Button type="submit" loading={createWebhook.isPending}>
              Register Webhook
            </Button>
          </div>
        </form>
      </Dialog>

      {/* Edit Webhook Dialog */}
      <Dialog isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Update Webhook Registration">
        <form onSubmit={handleSubmitEdit(handleEdit)} className="space-y-4">
          <Input
            label="Name / Identifier"
            placeholder="e.g. Analytics Webhook"
            error={errorsEdit.name?.message}
            {...registerEdit("name", { required: "Name is required" })}
          />

          <Input
            label="Target URL"
            type="url"
            placeholder="https://yourdomain.com/webhooks/consent"
            error={errorsEdit.url?.message}
            {...registerEdit("url", { required: "URL is required" })}
          />

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Subscribe to Events</label>
            <div className="space-y-2 border rounded-lg p-3 bg-muted/20">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  value="CONSENT_GRANTED"
                  className="rounded border-input text-primary focus:ring-ring"
                  {...registerEdit("events", { required: "Select at least one event" })}
                />
                <span>CONSENT_GRANTED</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  value="CONSENT_REVOKED"
                  className="rounded border-input text-primary focus:ring-ring"
                  {...registerEdit("events", { required: "Select at least one event" })}
                />
                <span>CONSENT_REVOKED</span>
              </label>
            </div>
            {errorsEdit.events && (
              <span className="text-xs text-destructive font-medium">{errorsEdit.events.message}</span>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => setIsEditOpen(false)} disabled={updateWebhook.isPending}>
              Cancel
            </Button>
            <Button type="submit" loading={updateWebhook.isPending}>
              Save Changes
            </Button>
          </div>
        </form>
      </Dialog>

      {/* Delete Confirm Dialog */}
      <ConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Webhook"
        description="Are you sure you want to permanently delete this webhook? It will no longer receive any real-time event updates."
        loading={deleteWebhook.isPending}
      />
    </div>
  );
};
