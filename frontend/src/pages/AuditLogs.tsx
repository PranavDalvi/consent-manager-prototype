import React, { useState } from "react";
import { User, Calendar, Eye } from "lucide-react";
import { useAuditLogs } from "../hooks/useApi";
import { PageHeader, Card, Button, Dialog } from "../components/UI";
import { DataTable } from "../components/DataTable";
import type { Column } from "../components/DataTable";
import { SearchBar } from "../components/SearchBar";
import type { AuditLog } from "../types";

export const AuditLogs: React.FC = () => {
  const [selectedLog, setSelectedLog] = useState<AuditLog | null>(null);

  // Filters state
  const [userIdFilter, setUserIdFilter] = useState("");
  const [actionFilter, setActionFilter] = useState("");
  const [page, setPage] = useState(1);

  // Fetch Audit Logs
  const {
    data: auditData,
    isLoading,
    isError,
    error,
  } = useAuditLogs({
    userId: userIdFilter || undefined,
    action: actionFilter || undefined,
    page,
    limit: 10,
  });

  const columns: Column<AuditLog>[] = [
    {
      header: "Action",
      accessor: (row) => <span className="font-semibold">{row.action}</span>,
    },
    {
      header: "User ID",
      accessor: (row) => (
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-muted-foreground" />
          <span>{row.userId}</span>
        </div>
      ),
    },
    {
      header: "Purpose",
      accessor: (row) =>
        row.purpose ? (
          <code className="px-1.5 py-0.5 bg-muted rounded font-mono text-xs">{row.purpose}</code>
        ) : (
          <span className="text-muted-foreground text-xs">—</span>
        ),
    },
    {
      header: "Timestamp",
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
          <Button
            variant="ghost"
            className="p-1 h-8 w-8"
            title="View Metadata"
            onClick={() => setSelectedLog(row)}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Audit Logs"
        description="Review chronological, immutable records of all consent transactions and administrator actions."
      />

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
          <div className="flex-1 md:w-52">
            <select
              value={actionFilter}
              onChange={(e) => {
                setActionFilter(e.target.value);
                setPage(1);
              }}
              className="w-full h-10 px-3 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">All Actions</option>
              <option value="CONSENT_GRANTED">Consent Granted</option>
              <option value="CONSENT_REVOKED">Consent Revoked</option>
              <option value="API_KEY_CREATED">API Key Created</option>
              <option value="API_KEY_REVOKED">API Key Revoked</option>
              <option value="POLICY_CREATED">Policy Created</option>
              <option value="POLICY_ARCHIVED">Policy Archived</option>
            </select>
          </div>
        </div>
      </Card>

      <Card>
        <DataTable
          columns={columns}
          data={auditData?.data}
          isLoading={isLoading}
          isError={isError}
          error={error}
          pagination={auditData?.pagination}
          onPageChange={setPage}
          emptyTitle="No Audit Logs Found"
          emptyDescription="Audit records will appear here as soon as consent is granted, revoked, or when configuration changes occur."
        />
      </Card>

      {/* Audit Log Details Dialog */}
      <Dialog isOpen={!!selectedLog} onClose={() => setSelectedLog(null)} title="Audit Event Metadata">
        {selectedLog && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 bg-muted p-4 rounded-lg text-sm">
              <div>
                <p className="text-muted-foreground text-xs">Action Type</p>
                <p className="font-semibold">{selectedLog.action}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">User ID</p>
                <p className="font-semibold">{selectedLog.userId}</p>
              </div>
              <div className="col-span-2 border-t pt-2 mt-2">
                <p className="text-muted-foreground text-xs">Date / Time</p>
                <p className="font-semibold">{new Date(selectedLog.createdAt).toLocaleString()}</p>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted-foreground">Event Metadata (JSON)</label>
              <pre className="border rounded-lg p-4 bg-muted/40 text-xs font-mono max-h-60 overflow-y-auto leading-relaxed">
                {JSON.stringify(selectedLog.metadata || { message: "No extra metadata captured." }, null, 2)}
              </pre>
            </div>

            <div className="flex justify-end pt-4 border-t">
              <Button onClick={() => setSelectedLog(null)}>Close</Button>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
};
