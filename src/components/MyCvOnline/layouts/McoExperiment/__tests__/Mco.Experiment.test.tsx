import { render, screen } from "@testing-library/react";
import { McoExperiment } from "../..";
import { McoSectionName } from "../../../MyCvOnline.constant";
import { cvExemple as cv } from "../../../__seed__/cv.exemple";

/**
 * Mock Experiment component
 */
const mockMcoSection = jest.fn();
const MOCK_SECTION_TXT = "Mock experiment";
jest.mock("./../Mco.Experiment.Item.tsx", () => ({
  __esModule: true,
  McoExperimentItem: (props: unknown) => {
    mockMcoSection(props);
    return <p>{MOCK_SECTION_TXT}</p>;
  },
}));

describe("McoExperiment", () => {
  test("Renders a section with correct title", () => {
    render(<McoExperiment data={cv.experiments} />);
    const title = screen.getByText(McoSectionName.EXPERIMENTS);
    expect(title).toBeInTheDocument();
  });
  test("Renders a list of Experiment Items", () => {
    render(<McoExperiment data={cv.experiments} />);
    const title = screen.getAllByText(MOCK_SECTION_TXT);
    expect(title[0]).toBeInTheDocument();
    expect(mockMcoSection).toHaveBeenCalledWith(cv.experiments[0]);
    expect(mockMcoSection).toHaveBeenCalledTimes(cv.experiments.length);
  });
});
