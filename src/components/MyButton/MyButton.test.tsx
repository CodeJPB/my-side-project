import React from "react";
import { render, screen } from "@testing-library/react";
import MyButton from "./MyButton";

test("Renders main informations", () => {
  const testText = "ClicK me !";
  render(<MyButton text={testText} />);
  const testBtn = screen.getByText(testText);
  expect(testBtn).toBeInTheDocument();
});
