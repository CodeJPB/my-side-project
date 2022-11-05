import React from "react";
import { render, screen } from "@testing-library/react";
import { FormationItem } from "./FormationItem";
import { cv } from "../../../data/cv";

const formationTest = cv.formations[0];

describe("FormationItem", () => {
  test("Renders main informations", () => {
    render(<FormationItem {...formationTest} />);
    const title = screen.getByText(formationTest.title, { exact: false });
    expect(title).toBeInTheDocument();
    const school = screen.getByText(formationTest.school, { exact: false });
    expect(school).toBeInTheDocument();
    const graduation = screen.getByText(formationTest.graduation, {
      exact: false,
    });
    expect(graduation).toBeInTheDocument();
  });
  test("Renders dates in correct format", () => {
    render(<FormationItem {...formationTest} />);
    const dateToStr = screen.getAllByText(formationTest.to.toDateString(), {
      exact: true,
    })[0];
    expect(dateToStr).toBeInTheDocument();
    const dateFromStr = screen.getAllByText(formationTest.from.toDateString(), {
      exact: true,
    })[0];
    expect(dateFromStr).toBeInTheDocument();
  });
});
