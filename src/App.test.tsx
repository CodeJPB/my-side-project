import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders a button", () => {
  render(<App />);
  const linkElement = screen.getByText(/Click/i);
  expect(linkElement).toBeInTheDocument();
});
