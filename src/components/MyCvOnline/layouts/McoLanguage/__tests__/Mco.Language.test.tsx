import { render, screen } from "@testing-library/react";
import { McoLanguage } from "./../..";
import { McoSectionName } from "./../../../MyCvOnline.constant";
import { cvExemple as cv } from "./../../../__seed__/cv.exemple";

/**
 * Mock Language component
 */
const mockMcoSection = jest.fn();
const MOCK_LANGUAGE_TXT = "Mock experiment";
jest.mock("./../Mco.Language.Item.tsx", () => ({
  __esModule: true,
  McoLanguageItem: (props: unknown) => {
    mockMcoSection(props);
    return <p>{MOCK_LANGUAGE_TXT}</p>;
  },
}));

describe("McoLanguage", () => {
  test("Renders a section with correct title", () => {
    render(<McoLanguage data={cv.languages} />);
    const title = screen.getByText(McoSectionName.LANGUAGES);
    expect(title).toBeInTheDocument();
  });
  test("Renders a list of Language Items", () => {
    render(<McoLanguage data={cv.languages} />);
    const title = screen.getAllByText(MOCK_LANGUAGE_TXT);
    expect(title[0]).toBeInTheDocument();
    expect(mockMcoSection).toHaveBeenCalledWith(cv.languages[0]);
    expect(mockMcoSection).toHaveBeenCalledTimes(cv.languages.length);
  });
});
