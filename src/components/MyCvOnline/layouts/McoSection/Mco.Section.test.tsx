import { render, screen } from "@testing-library/react";
import { McoSection } from "./Mco.Section";

describe("MyCvOnline", () => {
  const testContent = "test section";
  test("Renders title passed in props", () => {
    render(<McoSection title="test">{testContent}</McoSection>);
    const content = screen.getByText(testContent);
    expect(content).toBeInTheDocument();
  });
});
