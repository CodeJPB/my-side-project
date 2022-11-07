import { render, screen } from "@testing-library/react";
import { McoFormation } from "../..";
import { McoSectionName } from "../../../MyCvOnline.constant";
import { cvExemple as cv } from "../../../__seed__/cv.exemple";

/**
 * Mock Formation component
 */
const mockMcoSection = jest.fn();
const MOCK_SECTION_TXT = "Mock experiment";
jest.mock("./../Mco.Formation.Item.tsx", () => ({
  __esModule: true,
  McoFormationItem: (props: unknown) => {
    mockMcoSection(props);
    return <p>{MOCK_SECTION_TXT}</p>;
  },
}));

describe("McoFormation", () => {
  test("Renders a section with correct title", () => {
    render(<McoFormation data={cv.formations} />);
    const title = screen.getByText(McoSectionName.FORMATIONS);
    expect(title).toBeInTheDocument();
  });
  test("Renders a list of Formation Items", () => {
    render(<McoFormation data={cv.formations} />);
    const title = screen.getAllByText(MOCK_SECTION_TXT);
    expect(title[0]).toBeInTheDocument();
    expect(mockMcoSection).toHaveBeenCalledWith(cv.formations[0]);
    expect(mockMcoSection).toHaveBeenCalledTimes(cv.formations.length);
  });
});
