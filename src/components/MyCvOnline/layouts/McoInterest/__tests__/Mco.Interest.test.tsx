import { render, screen } from "@testing-library/react";
import { McoInterest } from "../..";
import { McoSectionName } from "./../../../MyCvOnline.constant";
import { cvExemple as cv } from "./../../../__seed__/cv.exemple";

/**
 * Mock Interest component
 */
const mockMcoSection = jest.fn();
const MOCK_EXPERIMENT_TXT = "Mock experiment";
jest.mock("./../Mco.Interest.Item.tsx", () => ({
  __esModule: true,
  McoInterestItem: (props: unknown) => {
    mockMcoSection(props);
    return <p>{MOCK_EXPERIMENT_TXT}</p>;
  },
}));

describe("McoInterest", () => {
  test("Renders a section with correct title", () => {
    render(<McoInterest data={cv.interests} />);
    const title = screen.getByText(McoSectionName.INTERESTS);
    expect(title).toBeInTheDocument();
  });
  test("Renders a list of Interest Items", () => {
    render(<McoInterest data={cv.interests} />);
    const title = screen.getAllByText(MOCK_EXPERIMENT_TXT);
    expect(title[0]).toBeInTheDocument();
    expect(mockMcoSection).toHaveBeenCalledWith(cv.interests[0]);
    expect(mockMcoSection).toHaveBeenCalledTimes(cv.interests.length);
  });
});
