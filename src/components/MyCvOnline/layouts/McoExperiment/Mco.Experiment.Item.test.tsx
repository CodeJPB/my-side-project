import { render, screen } from "@testing-library/react";
import { McoExperimentItem } from "./..";
import { cvExemple as cv } from "./../../__seed__/cv.exemple";

const experimentTest = cv.experiments[0];

describe("McoExperimentItem", () => {
  test("Renders main inexperiments", () => {
    render(<McoExperimentItem {...experimentTest} />);
    const title = screen.getByText(experimentTest.title, { exact: false });
    expect(title).toBeInTheDocument();
    const employer = screen.getByText(experimentTest.employer);
    expect(employer).toBeInTheDocument();
  });
  test("Renders dates in correct format", () => {
    render(<McoExperimentItem {...experimentTest} />);
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
