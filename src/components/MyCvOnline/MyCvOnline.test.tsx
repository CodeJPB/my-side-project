import React from "react";
import { render, screen } from "@testing-library/react";
import MyCvOnline from "./MyCvOnline";
import { cv } from "../../data/cv";

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
    const title1 = screen.getByText("Experiment", { exact: false });
    const title2 = screen.getByText("Formation", { exact: false });
    const title3 = screen.getByText("Language", { exact: false });
    const title4 = screen.getByText("Interest", { exact: false });
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(title3).toBeInTheDocument();
    expect(title4).toBeInTheDocument();
  });
  test("Renders 4 lists", () => {
    render(<MyCvOnline cv={cv} />);
    const title = screen.getByText("Experiment", { exact: false });
    expect(title).toBeInTheDocument();
    const lists = screen.getAllByRole("list");
    expect(lists.length).toEqual(4);
  });
  test("Renders the correct number of list items", () => {
    render(<MyCvOnline cv={cv} />);
    const title = screen.getByText("Formation", { exact: false });
    expect(title).toBeInTheDocument();
    const listItems = screen.getAllByRole("listitem");
    const correctNumber = [
      ...cv.experiments,
      ...cv.formations,
      ...cv.interests,
      ...cv.languages,
    ].length;
    expect(listItems.length).toEqual(correctNumber);
  });
});
