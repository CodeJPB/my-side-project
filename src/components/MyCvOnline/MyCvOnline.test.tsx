import React from "react";
import { render, screen } from "@testing-library/react";
import { MyCvOnline } from "./MyCvOnline";
import { cv } from "../../data/cv";

/**
 * We use mock component to emulate a shallow rendering of MyCvOnline component
 */

/**
 * Mock Experiment component
 */
// const mockSectionItem = jest.fn();
// const MOCK_SECTION_ITEM_TXT = "Mock section";
// jest.mock("./SectionItem/SectionItem.tsx", () => ({
//   __esModule: true,
//   SectionItem: (props: unknown) => {
//     mockSectionItem(props);
//     return <p>{MOCK_SECTION_ITEM_TXT}</p>;
//   },
// }));

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
  test("Renders a list of formations", () => {
    render(<MyCvOnline cv={cv} />);
    expect(mockFormationItem).toHaveBeenCalledTimes(cv.formations.length);
    const formationItems = screen.getAllByText(MOCK_FORMATION_ITEM_TXT);
    expect(formationItems.length).toEqual(cv.formations.length);
  });
  test("Renders a list of experiments", () => {
    render(<MyCvOnline cv={cv} />);
    expect(mockExperimentItem).toHaveBeenCalledTimes(cv.experiments.length);
    const experimentItems = screen.getAllByText(MOCK_FORMATION_ITEM_TXT);
    expect(experimentItems.length).toEqual(cv.experiments.length);
  });
});
