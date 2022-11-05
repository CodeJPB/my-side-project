import React from "react";
import { render, screen } from "@testing-library/react";
import SectionItem from "./SectionItem";

describe("MyCvOnline", () => {
  const titleTest = "section title test";
  const contentTest = "section content test";
  test("Renders title passed in props", () => {
    render(
      <SectionItem title={titleTest}>
        <p>{contentTest}</p>
      </SectionItem>
    );
    const title = screen.getByText(titleTest);
    expect(title).toBeInTheDocument();
  });
  test("Renders children", () => {
    render(
      <SectionItem title={titleTest}>
        <p>{contentTest}</p>
      </SectionItem>
    );
    const content = screen.getByText(contentTest);
    expect(content).toBeInTheDocument();
  });
});
