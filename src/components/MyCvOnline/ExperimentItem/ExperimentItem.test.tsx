import React from "react";
import { render, screen } from "@testing-library/react";
import { ExperimentItem } from "./ExperimentItem";
import { cv } from "../../../data/cv";

const experimentTest = cv.experiments[0];

describe("ExperimentItem", () => {
  test("Renders main inexperiments", () => {
    render(<ExperimentItem {...experimentTest} />);
    const title = screen.getByText(experimentTest.title, { exact: false });
    expect(title).toBeInTheDocument();
    const employer = screen.getByText(experimentTest.employer);
    expect(employer).toBeInTheDocument();
  });
  test("Renders dates in correct format", () => {
    render(<ExperimentItem {...experimentTest} />);
    const dateToStr = screen.getAllByText(experimentTest.to.toDateString(), {
      exact: true,
    })[0];
    expect(dateToStr).toBeInTheDocument();
    const dateFromStr = screen.getAllByText(
      experimentTest.from.toDateString(),
      {
        exact: true,
      }
    )[0];
    expect(dateFromStr).toBeInTheDocument();
  });
});
