import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { DataTable } from "../components/DataTable";
import type { Column } from "../components/DataTable";

describe("DataTable", () => {
  interface TestData {
    name: string;
    age: number;
  }

  const columns: Column<TestData>[] = [
    { header: "Name", accessor: (row) => row.name },
    { header: "Age", accessor: (row) => row.age.toString() },
  ];

  test("renders loading state", () => {
    render(<DataTable columns={columns} data={[]} isLoading={true} isError={false} />);
    // Check if pulse animation is present or if row placeholder is rendered
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });

  test("renders empty state", () => {
    render(
      <DataTable
        columns={columns}
        data={[]}
        isLoading={false}
        isError={false}
        emptyTitle="No Entries"
        emptyDescription="Please add some data."
      />
    );
    expect(screen.getByText("No Entries")).toBeInTheDocument();
    expect(screen.getByText("Please add some data.")).toBeInTheDocument();
  });

  test("renders data rows", () => {
    const data = [
      { name: "John Doe", age: 30 },
      { name: "Jane Smith", age: 25 },
    ];
    render(<DataTable columns={columns} data={data} isLoading={false} isError={false} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
  });
});
