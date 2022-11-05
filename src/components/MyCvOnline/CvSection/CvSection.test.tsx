import React from "react";
import { render, screen } from "@testing-library/react";
import { CvSection } from "./CvSection";

describe("MyCvOnline", () => {
  const testContent = "test section";
  test("Renders title passed in props", () => {
    render(<CvSection title="test">{testContent}</CvSection>);
    const content = screen.getByText(testContent);
    expect(content).toBeInTheDocument();
  });
});
