import { render, screen } from "@testing-library/react";
import { MyCvOnline } from "./MyCvOnline";
import { cv } from "../../data/cv";

/**
 * We use mock component to emulate a shallow rendering of MyCvOnline component
 */

/**
 * Mock Formation component
 */
const mockFormationItem = jest.fn();
const MOCK_FORMATION_ITEM_TXT = "Mock formation";
jest.mock("./FormationItem/FormationItem.tsx", () => ({
  __esModule: true,
  FormationItem: (props: unknown) => {
    mockFormationItem(props);
    return <p>{MOCK_FORMATION_ITEM_TXT}</p>;
  },
}));

/**
 * Mock Experiment component
 */
const mockExperimentItem = jest.fn();
const MOCK_EXPERIMENT_ITEM_TXT = "Mock experiment";
jest.mock("./ExperimentItem/ExperimentItem.tsx", () => ({
  __esModule: true,
  ExperimentItem: (props: unknown) => {
    mockExperimentItem(props);
    return <p>{MOCK_EXPERIMENT_ITEM_TXT}</p>;
  },
}));

/**
 * Mock Language component
 */
const mockLanguageItem = jest.fn();
const MOCK_LANGUAGE_ITEM_TXT = "Mock language";
jest.mock("./LanguageItem/LanguageItem.tsx", () => ({
  __esModule: true,
  LanguageItem: (props: unknown) => {
    mockLanguageItem(props);
    return <p>{MOCK_LANGUAGE_ITEM_TXT}</p>;
  },
}));

describe("MyCvOnline", () => {
  test("Renders main informations", () => {
    render(<MyCvOnline cv={cv} />);
    const firstName = screen.getByText(cv.firstName, { exact: false });
    expect(firstName).toBeInTheDocument();
    const lastName = screen.getByText(cv.lastName, { exact: false });
    expect(lastName).toBeInTheDocument();
  });
  test("Renders cv main section titles", () => {
    render(<MyCvOnline cv={cv} />);
    const title1 = screen.getByText("Experiments", { exact: false });
    const title2 = screen.getByText("Formations", { exact: false });
    const title3 = screen.getByText("Languages", { exact: false });
    const title4 = screen.getByText("Interests", { exact: false });
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(title3).toBeInTheDocument();
    expect(title4).toBeInTheDocument();
  });
  test("Renders a list of sections", () => {
    render(<MyCvOnline cv={cv} />);
    const sectionGroups = screen.getAllByRole("group");
    expect(sectionGroups.length).toEqual(4);
  });
});
