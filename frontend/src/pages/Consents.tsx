import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, Ban, User, Calendar } from "lucide-react";
import { useConsents, useGrantConsent, useRevokeConsent, usePolicies } from "../hooks/useApi";
import { PageHeader, Card, Button, Input, StatusBadge, Dialog, ConfirmDialog } from "../components/UI";
import { DataTable } from "../components/DataTable";
import type { Column } from "../components/DataTable";
import { SearchBar } from "../components/SearchBar";
import type { Consent } from "../types";

export const Consents: React.FC = () => {
  const [isGrantOpen, setIsGrantOpen] = useState(false);
  const [revokeTarget, setRevokeTarget] = useState<string | null>(null);

  // Filters state
  const [userIdFilter, setUserIdFilter] = useState("");
  const [purposeFilter, setPurposeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);

  // Fetch Consents
  const {
    data: consentsData,
    isLoading,
    isError,
    error,
  } = useConsents({
    userId: userIdFilter || undefined,
    purpose: purposeFilter || undefined,
    status: statusFilter || undefined,
    page,
    limit: 10,
  });

  // Fetch Policies for the Grant Consent form
  const { data: policiesData } = usePolicies();
  const activePolicies = policiesData?.data?.filter((p) => p.isActive) ?? [];

  const grantConsent = useGrantConsent();
  const revokeConsent = useRevokeConsent();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ userId: string; policyId: string }>();

  const handleGrantSubmit = (data: { userId: string; policyId: string }) => {
    grantConsent.mutate(data, {
      onSuccess: () => {
        setIsGrantOpen(false);
        reset();
      },
    });
  };

  const handleRevoke = () => {
    if (revokeTarget) {
      revokeConsent.mutate(revokeTarget, {
        onSuccess: () => {
          setRevokeTarget(null);
        },
      });
    }
  };

  const columns: Column<Consent>[] = [
    {
      header: "User ID",
      accessor: (row) => (
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-muted-foreground" />
          <span className="font-semibold">{row.userId}</span>
        </div>
      ),
    },
    {
      header: "Purpose",
      accessor: (row) => <code className="px-1.5 py-0.5 bg-muted rounded font-mono text-xs">{row.purpose}</code>,
    },
    {
      header: "Policy Version",
      accessor: (row) => <span className="font-mono text-sm">v{row.policyVersion}</span>,
    },
    {
      header: "Status",
      accessor: (row) => <StatusBadge active={row.status === "GRANTED"} label={row.status} />,
    },
    {
      header: "Granted Date",
      accessor: (row) => (
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="w-3.5 h-3.5" />
          {new Date(row.createdAt).toLocaleString()}
        </div>
      ),
    },
    {
      header: "Actions",
      className: "text-right",
      accessor: (row) => (
        <div className="flex justify-end">
          {row.status === "GRANTED" && (
            <Button
              variant="danger"
              className="py-1 px-2.5 text-xs h-8"
              onClick={() => setRevokeTarget(row.id)}
            >
              <Ban className="w-3.5 h-3.5" />
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
        title="User Consents"
        description="Verify, search, and grant or revoke individual user consent settings."
      >
        <Button onClick={() => setIsGrantOpen(true)} className="h-10">
          <Plus className="w-4 h-4" />
          Grant Consent
        </Button>
      </PageHeader>

      {/* Filter Toolbar */}
      <Card className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex-1 w-full">
          <SearchBar
            placeholder="Search by User ID..."
            value={userIdFilter}
            onChange={(val) => {
              setUserIdFilter(val);
              setPage(1);
            }}
          />
        </div>
        <div className="flex w-full md:w-auto items-center gap-3 shrink-0">
          {/* Purpose Filter */}
          <div className="flex-1 md:w-44">
            <select
              value={purposeFilter}
              onChange={(e) => {
                setPurposeFilter(e.target.value);
                setPage(1);
              }}
              className="w-full h-10 px-3 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">All Purposes</option>
              {activePolicies.map((p) => (
                <option key={p.id} value={p.purpose}>
                  {p.title} ({p.purpose})
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex-1 md:w-36">
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              className="w-full h-10 px-3 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">All Statuses</option>
              <option value="GRANTED">Granted</option>
              <option value="REVOKED">Revoked</option>
            </select>
          </div>
        </div>
      </Card>

      <Card>
        <DataTable
          columns={columns}
          data={consentsData?.data}
          isLoading={isLoading}
          isError={isError}
          error={error}
          pagination={consentsData?.pagination}
          onPageChange={setPage}
          emptyTitle="No Consents Registered"
          emptyDescription="User consents will show up here once granted or recorded by your client integrations."
        />
      </Card>

      {/* Grant Consent Dialog */}
      <Dialog isOpen={isGrantOpen} onClose={() => setIsGrantOpen(false)} title="Grant User Consent">
        <form onSubmit={handleSubmit(handleGrantSubmit)} className="space-y-4">
          <Input
            label="User Identifier (User ID)"
            placeholder="e.g. user-123"
            error={errors.userId?.message}
            {...register("userId", { required: "User ID is required" })}
          />

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-muted-foreground">Select Consent Policy</label>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...register("policyId", { required: "Policy selection is required" })}
            >
              <option value="">-- Choose Active Policy --</option>
              {activePolicies.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title} (v{p.version})
                </option>
              ))}
            </select>
            {errors.policyId && (
              <span className="text-xs text-destructive font-medium">{errors.policyId.message}</span>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => setIsGrantOpen(false)} disabled={grantConsent.isPending}>
              Cancel
            </Button>
            <Button type="submit" loading={grantConsent.isPending}>
              Grant Consent
            </Button>
          </div>
        </form>
      </Dialog>

      {/* Revoke Confirm Dialog */}
      <ConfirmDialog
        isOpen={!!revokeTarget}
        onClose={() => setRevokeTarget(null)}
        onConfirm={handleRevoke}
        title="Revoke Consent"
        description="Are you sure you want to revoke this user's consent? External applications validating this consent will immediately receive a denied response."
        loading={revokeConsent.isPending}
      />
    </div>
  );
};
