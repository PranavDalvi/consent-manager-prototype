import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { SkeletonLoader, EmptyState } from "./UI";

export interface Column<T> {
  header: string;
  accessor: (row: T) => ReactNode;
  className?: string;
}

interface PaginationData {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data?: T[];
  isLoading: boolean;
  isError: boolean;
  error?: Error | null;
  emptyTitle?: string;
  emptyDescription?: string;
  pagination?: PaginationData;
  onPageChange?: (newPage: number) => void;
}

export function DataTable<T>({
  columns,
  data = [],
  isLoading,
  isError,
  error,
  emptyTitle,
  emptyDescription,
  pagination,
  onPageChange,
}: DataTableProps<T>) {
  if (isLoading) {
    return <SkeletonLoader rows={5} />;
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center p-8 border border-destructive/20 rounded-xl bg-destructive/5 text-center text-destructive">
        <AlertCircle className="w-12 h-12 mb-3 stroke-[1.5]" />
        <h3 className="font-semibold text-lg">Failed to load data</h3>
        <p className="text-sm opacity-90 max-w-sm mt-1">
          {error?.message || "An error occurred while fetching information from the server."}
        </p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <EmptyState title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-x-auto rounded-xl border bg-card shadow-sm">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-muted text-muted-foreground border-b font-medium">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className={`p-4 font-semibold tracking-wider ${col.className || ""}`}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-accent/40 transition-colors">
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className={`p-4 align-middle ${col.className || ""}`}>
                    {col.accessor(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pagination && onPageChange && pagination.totalPages > 1 && (
        <div className="flex items-center justify-between px-2 py-4">
          <p className="text-xs md:text-sm text-muted-foreground">
            Showing page <span className="font-medium text-foreground">{pagination.page}</span> of{" "}
            <span className="font-medium text-foreground">{pagination.totalPages}</span> (
            <span className="font-medium text-foreground">{pagination.total}</span> total items)
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onPageChange(pagination.page - 1)}
              disabled={pagination.page <= 1}
              className="p-2 border rounded-md hover:bg-accent disabled:opacity-50 disabled:pointer-events-none transition-colors"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onPageChange(pagination.page + 1)}
              disabled={pagination.page >= pagination.totalPages}
              className="p-2 border rounded-md hover:bg-accent disabled:opacity-50 disabled:pointer-events-none transition-colors"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
