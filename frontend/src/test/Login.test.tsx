import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import { Login } from "../pages/Login";

describe("Login Component", () => {
  test("renders login form correctly", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/api key/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /authenticate/i })).toBeInTheDocument();
  });

  test("validation triggers when form is submitted empty", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const submitBtn = screen.getByRole("button", { name: /authenticate/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/api key is required/i)).toBeInTheDocument();
    });
  });
});
