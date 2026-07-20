import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, Archive, History, Eye, Info } from "lucide-react";
import {
  usePolicies,
  useCreatePolicy,
  useArchivePolicy,
  useCreatePolicyVersion,
  usePolicyVersions,
} from "../hooks/useApi";
import { PageHeader, Card, Button, Input, TextArea, StatusBadge, Dialog, ConfirmDialog } from "../components/UI";
import { DataTable } from "../components/DataTable";
import type { Column } from "../components/DataTable";
import type { Policy } from "../types";

export const Policies: React.FC = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isNewVersionOpen, setIsNewVersionOpen] = useState(false);
  
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [archiveTarget, setArchiveTarget] = useState<string | null>(null);

  const { data: policiesData, isLoading, isError, error } = usePolicies();
  const createPolicy = useCreatePolicy();
  const archivePolicy = useArchivePolicy();
  const createPolicyVersion = useCreatePolicyVersion();

  // Custom hook for policy versions history
  const { data: versionsData, isLoading: isVersionsLoading } = usePolicyVersions(
    isHistoryOpen ? selectedPolicy?.id : undefined
  );

  const {
    register: registerPolicy,
    handleSubmit: handleSubmitPolicy,
    reset: resetPolicy,
    formState: { errors: errorsPolicy },
  } = useForm<{ title: string; purpose: string; version: number; content: string }>();

  const {
    register: registerVersion,
    handleSubmit: handleSubmitVersion,
    reset: resetVersion,
    formState: { errors: errorsVersion },
  } = useForm<{ content: string }>();

  const handleCreatePolicy = (data: { title: string; purpose: string; version: number; content: string }) => {
    createPolicy.mutate(
      {
        title: data.title,
        purpose: data.purpose,
        version: Number(data.version),
        content: data.content,
      },
      {
        onSuccess: () => {
          setIsCreateOpen(false);
          resetPolicy();
        },
      }
    );
  };

  const handleCreateVersion = (data: { content: string }) => {
    if (selectedPolicy) {
      createPolicyVersion.mutate(
        {
          policyId: selectedPolicy.id,
          content: data.content,
        },
        {
          onSuccess: () => {
            setIsNewVersionOpen(false);
            resetVersion();
          },
        }
      );
    }
  };

  const handleArchive = () => {
    if (archiveTarget) {
      archivePolicy.mutate(archiveTarget, {
        onSuccess: () => {
          setArchiveTarget(null);
        },
      });
    }
  };

  const columns: Column<Policy>[] = [
    {
      header: "Title",
      accessor: (row) => <div className="font-semibold">{row.title}</div>,
    },
    {
      header: "Purpose / Slug",
      accessor: (row) => <code className="px-1.5 py-0.5 bg-muted rounded font-mono text-xs">{row.purpose}</code>,
    },
    {
      header: "Latest Version",
      accessor: (row) => <span className="font-mono text-sm">v{row.version}</span>,
    },
    {
      header: "Status",
      accessor: (row) => <StatusBadge active={row.isActive} label={row.isActive ? "Active" : "Archived"} />,
    },
    {
      header: "Last Updated",
      accessor: (row) => new Date(row.updatedAt).toLocaleDateString(),
    },
    {
      header: "Actions",
      className: "text-right",
      accessor: (row) => (
        <div className="flex justify-end gap-1.5">
          <Button
            variant="ghost"
            className="p-1 h-8 w-8"
            title="View Details"
            onClick={() => {
              setSelectedPolicy(row);
              setIsViewOpen(true);
            }}
          >
            <Eye className="w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            className="p-1 h-8 w-8"
            title="Version History"
            onClick={() => {
              setSelectedPolicy(row);
              setIsHistoryOpen(true);
            }}
          >
            <History className="w-4 h-4" />
          </Button>

          {row.isActive && (
            <>
              <Button
                variant="outline"
                className="py-1 px-2.5 text-xs h-8"
                onClick={() => {
                  setSelectedPolicy(row);
                  setIsNewVersionOpen(true);
                }}
              >
                New Version
              </Button>
              <Button
                variant="danger"
                className="p-1 h-8 w-8"
                title="Archive Policy"
                onClick={() => setArchiveTarget(row.id)}
              >
                <Archive className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Consent Policies"
        description="Establish data usage terms and manage legal updates under GDPR, CCPA, etc."
      >
        <Button onClick={() => setIsCreateOpen(true)} className="h-10">
          <Plus className="w-4 h-4" />
          Create Policy
        </Button>
      </PageHeader>

      <Card>
        <DataTable
          columns={columns}
          data={policiesData?.data}
          isLoading={isLoading}
          isError={isError}
          error={error}
          emptyTitle="No Policies Established"
          emptyDescription="Create a policy to begin tracking and validating consent for your application features."
        />
      </Card>

      {/* Create Policy Dialog */}
      <Dialog isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create New Policy">
        <form onSubmit={handleSubmitPolicy(handleCreatePolicy)} className="space-y-4">
          <Input
            label="Policy Title"
            placeholder="e.g. Terms of Service"
            error={errorsPolicy.title?.message}
            {...registerPolicy("title", { required: "Title is required" })}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Purpose (Slug)"
              placeholder="e.g. marketing"
              error={errorsPolicy.purpose?.message}
              {...registerPolicy("purpose", { required: "Purpose slug is required" })}
            />
            <Input
              label="Initial Version"
              type="number"
              defaultValue="1"
              error={errorsPolicy.version?.message}
              {...registerPolicy("version", { required: "Version is required" })}
            />
          </div>

          <TextArea
            label="Policy content"
            placeholder="Detailed policy text..."
            rows={5}
            error={errorsPolicy.content?.message}
            {...registerPolicy("content", { required: "Policy text content is required" })}
          />

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => setIsCreateOpen(false)} disabled={createPolicy.isPending}>
              Cancel
            </Button>
            <Button type="submit" loading={createPolicy.isPending}>
              Create Policy
            </Button>
          </div>
        </form>
      </Dialog>

      {/* View Policy Details Dialog */}
      <Dialog isOpen={isViewOpen} onClose={() => setIsViewOpen(false)} title={selectedPolicy?.title || "Policy Details"}>
        {selectedPolicy && (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-muted p-3 rounded-lg text-sm font-mono">
              <div>
                <p className="text-muted-foreground text-xs">Slug</p>
                <p className="font-semibold text-foreground">{selectedPolicy.purpose}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Version</p>
                <p className="font-semibold text-foreground">v{selectedPolicy.version}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Status</p>
                <p className="font-semibold text-foreground">{selectedPolicy.isActive ? "Active" : "Archived"}</p>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted-foreground">Terms Content</label>
              <div className="border rounded-lg p-4 bg-muted/40 text-sm whitespace-pre-wrap max-h-60 overflow-y-auto leading-relaxed">
                {selectedPolicy.content}
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t">
              <Button onClick={() => setIsViewOpen(false)}>Close</Button>
            </div>
          </div>
        )}
      </Dialog>

      {/* New Version Dialog */}
      <Dialog isOpen={isNewVersionOpen} onClose={() => setIsNewVersionOpen(false)} title={`Create New Version for ${selectedPolicy?.title}`}>
        <form onSubmit={handleSubmitVersion(handleCreateVersion)} className="space-y-4">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-lg text-xs leading-relaxed flex gap-2">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <span>This will create a new version (v{(selectedPolicy?.version || 0) + 1}) of the policy. Users accessing features tied to this purpose will need to re-consent.</span>
          </div>

          <TextArea
            label="Policy content (New Version)"
            placeholder="Detailed policy text for the new version..."
            rows={5}
            error={errorsVersion.content?.message}
            {...registerVersion("content", { required: "Policy text is required" })}
          />

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => setIsNewVersionOpen(false)} disabled={createPolicyVersion.isPending}>
              Cancel
            </Button>
            <Button type="submit" loading={createPolicyVersion.isPending}>
              Publish Version
            </Button>
          </div>
        </form>
      </Dialog>

      {/* Version History Dialog */}
      <Dialog isOpen={isHistoryOpen} onClose={() => setIsHistoryOpen(false)} title={`Version History: ${selectedPolicy?.title}`}>
        <div className="space-y-4">
          {isVersionsLoading ? (
            <div className="flex justify-center py-8">
              <Plus className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : !versionsData?.data || versionsData.data.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground py-8">No historical versions found.</p>
          ) : (
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              {versionsData.data.map((ver) => (
                <div key={ver.id} className="border rounded-lg p-4 bg-card space-y-2">
                  <div className="flex justify-between items-center border-b pb-2 mb-2">
                    <span className="font-semibold font-mono text-sm">Version {ver.version}</span>
                    <span className="text-xs text-muted-foreground">{new Date(ver.createdAt).toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap">{ver.content}</p>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-end pt-4 border-t">
            <Button onClick={() => setIsHistoryOpen(false)}>Close</Button>
          </div>
        </div>
      </Dialog>

      {/* Archive Confirm Dialog */}
      <ConfirmDialog
        isOpen={!!archiveTarget}
        onClose={() => setArchiveTarget(null)}
        onConfirm={handleArchive}
        title="Archive Policy"
        description="Are you sure you want to archive this policy? Archiving a policy makes it inactive, and no new consents can be granted under it."
        loading={archivePolicy.isPending}
      />
    </div>
  );
};
