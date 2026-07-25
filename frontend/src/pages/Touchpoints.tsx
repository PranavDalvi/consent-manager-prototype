import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, Compass, Trash2, Edit3, Shield, CheckCircle2, AlertCircle } from "lucide-react";
import {
  useTouchpoints,
  usePolicies,
  useCreateTouchpoint,
  useUpdateTouchpoint,
  useDeleteTouchpoint,
} from "../hooks/useApi";
import { PageHeader, Card, Button, Input, TextArea, StatusBadge, Dialog, ConfirmDialog } from "../components/UI";
import { DataTable } from "../components/DataTable";
import type { Column } from "../components/DataTable";
import type { Touchpoint, Policy } from "../types";

export const Touchpoints: React.FC = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingTouchpoint, setEditingTouchpoint] = useState<Touchpoint | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  const { data: touchpointsData, isLoading } = useTouchpoints();
  const { data: policiesData } = usePolicies();

  const createTouchpoint = useCreateTouchpoint();
  const updateTouchpoint = useUpdateTouchpoint();
  const deleteTouchpoint = useDeleteTouchpoint();

  const [selectedPolicies, setSelectedPolicies] = useState<
    { policyId: string; isRequired: boolean; customLabel?: string }[]
  >([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<{ name: string; slug: string; description: string }>();

  const openCreateModal = () => {
    reset({ name: "", slug: "", description: "" });
    setSelectedPolicies([]);
    setEditingTouchpoint(null);
    setIsCreateOpen(true);
  };

  const openEditModal = (tp: Touchpoint) => {
    setEditingTouchpoint(tp);
    setValue("name", tp.name);
    setValue("slug", tp.slug);
    setValue("description", tp.description || "");
    setSelectedPolicies(
      tp.policies?.map((p) => ({
        policyId: p.policyId,
        isRequired: p.isRequired,
        customLabel: p.customLabel || "",
      })) || []
    );
    setIsCreateOpen(true);
  };

  const handleTogglePolicy = (policyId: string) => {
    if (selectedPolicies.some((p) => p.policyId === policyId)) {
      setSelectedPolicies(selectedPolicies.filter((p) => p.policyId === policyId));
    } else {
      setSelectedPolicies([
        ...selectedPolicies,
        { policyId, isRequired: true, customLabel: "" },
      ]);
    }
  };

  const handleRequirementChange = (policyId: string, isRequired: boolean) => {
    setSelectedPolicies(
      selectedPolicies.map((p) => (p.policyId === policyId ? { ...p, isRequired } : p))
    );
  };

  const handleSave = (data: { name: string; slug: string; description: string }) => {
    const formattedPolicies = selectedPolicies.map((p, idx) => ({
      policyId: p.policyId,
      isRequired: p.isRequired,
      displayOrder: idx,
      customLabel: p.customLabel || undefined,
    }));

    if (editingTouchpoint) {
      updateTouchpoint.mutate(
        {
          id: editingTouchpoint.id,
          name: data.name,
          description: data.description,
          policies: formattedPolicies,
        },
        {
          onSuccess: () => {
            setIsCreateOpen(false);
            setEditingTouchpoint(null);
          },
        }
      );
    } else {
      createTouchpoint.mutate(
        {
          name: data.name,
          slug: data.slug,
          description: data.description,
          policies: formattedPolicies,
        },
        {
          onSuccess: () => {
            setIsCreateOpen(false);
          },
        }
      );
    }
  };

  const handleDelete = () => {
    if (!deleteTarget) return;
    deleteTouchpoint.mutate(deleteTarget, {
      onSuccess: () => setDeleteTarget(null),
    });
  };

  const columns: Column<Touchpoint>[] = [
    {
      header: "Touchpoint Name",
      accessor: (row) => (
        <div>
          <div className="font-semibold text-foreground flex items-center gap-2">
            <Compass className="w-4 h-4 text-primary" />
            {row.name}
          </div>
          <div className="text-xs text-muted-foreground font-mono mt-0.5">{row.slug}</div>
        </div>
      ),
    },
    {
      header: "Mapped Policies / Purposes",
      accessor: (row) => {
        const count = row.policies?.length || 0;
        return (
          <div className="flex flex-wrap gap-1.5 items-center">
            {count === 0 ? (
              <span className="text-xs text-muted-foreground italic">No policies attached</span>
            ) : (
              row.policies?.map((tp) => (
                <span
                  key={tp.policyId}
                  className={`text-xs px-2 py-0.5 rounded border flex items-center gap-1 font-medium ${
                    tp.isRequired
                      ? "bg-primary/10 border-primary/20 text-primary"
                      : "bg-secondary/20 border-border text-muted-foreground"
                  }`}
                >
                  <Shield className="w-3 h-3" />
                  {tp.policy?.title || tp.policyId} ({tp.policy?.purpose})
                  <span className="text-[10px] opacity-75">{tp.isRequired ? "Required" : "Optional"}</span>
                </span>
              ))
            )}
          </div>
        );
      },
    },
    {
      header: "Status",
      accessor: (row) => (
        <StatusBadge status={row.isActive ? "ACTIVE" : "INACTIVE"} variant={row.isActive ? "success" : "neutral"} />
      ),
    },
    {
      header: "Actions",
      accessor: (row) => (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => openEditModal(row)}>
            <Edit3 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setDeleteTarget(row.id)}>
            <Trash2 className="w-4 h-4 text-destructive" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="App Touchpoints & Journeys"
        description="Configure application screens (e.g. Login, Onboarding, Checkout) and assign required or optional consent policies for each step."
        action={
          <Button onClick={openCreateModal} className="flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Touchpoint
          </Button>
        }
      />

      <Card padding="none">
        <DataTable
          columns={columns}
          data={touchpointsData?.data || []}
          isLoading={isLoading}
          emptyMessage="No touchpoints configured yet. Click 'Add Touchpoint' to configure your first app journey step."
        />
      </Card>

      {/* Create / Edit Touchpoint Modal */}
      <Dialog
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        title={editingTouchpoint ? "Edit Touchpoint" : "Create New App Touchpoint"}
      >
        <form onSubmit={handleSubmit(handleSave)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Display Name</label>
            <Input
              placeholder="e.g. Onboarding Journey"
              {...register("name", { required: "Name is required" })}
              error={errors.name?.message}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Slug Identifier (API Key query)</label>
            <Input
              placeholder="e.g. onboarding_journey"
              disabled={!!editingTouchpoint}
              {...register("slug", {
                required: "Slug is required",
                pattern: {
                  value: /^[a-z0-9_-]+$/,
                  message: "Slug must contain lowercase letters, numbers, hyphens, and underscores only",
                },
              })}
              error={errors.slug?.message}
            />
            <p className="text-xs text-muted-foreground mt-1">
              Used in API calls: <code className="font-mono text-primary">GET /api/touchpoints/config/:slug</code>
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Description</label>
            <TextArea placeholder="Where in the application is this requested?" {...register("description")} />
          </div>

          {/* Policies Selection */}
          <div className="border-t border-border pt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" /> Assign Policies to this Touchpoint
            </h4>
            <p className="text-xs text-muted-foreground mb-3">
              Select which policies should be presented when users reach this journey step.
            </p>

            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {policiesData?.data?.map((policy: Policy) => {
                const isSelected = selectedPolicies.some((p) => p.policyId === policy.id);
                const selectedConfig = selectedPolicies.find((p) => p.policyId === policy.id);

                return (
                  <div
                    key={policy.id}
                    className={`p-3 rounded-lg border text-sm transition-colors ${
                      isSelected ? "border-primary/50 bg-primary/5" : "border-border bg-card"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 font-medium text-foreground cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleTogglePolicy(policy.id)}
                          className="rounded border-border text-primary focus:ring-primary"
                        />
                        {policy.title}
                        <span className="text-xs font-mono text-muted-foreground">({policy.purpose})</span>
                      </label>

                      {isSelected && (
                        <select
                          value={selectedConfig?.isRequired ? "required" : "optional"}
                          onChange={(e) => handleRequirementChange(policy.id, e.target.value === "required")}
                          className="text-xs bg-background border border-border rounded px-2 py-1"
                        >
                          <option value="required">Mandatory (Required)</option>
                          <option value="optional">Optional Opt-In</option>
                        </select>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-border">
            <Button type="button" variant="ghost" onClick={() => setIsCreateOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" isLoading={createTouchpoint.isPending || updateTouchpoint.isPending}>
              {editingTouchpoint ? "Save Changes" : "Create Touchpoint"}
            </Button>
          </div>
        </form>
      </Dialog>

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title="Delete Touchpoint"
        description="Are you sure you want to remove this touchpoint configuration? External client apps querying this slug will no longer receive mapped policies."
        confirmText="Delete"
        variant="danger"
        isLoading={deleteTouchpoint.isPending}
      />
    </div>
  );
};
