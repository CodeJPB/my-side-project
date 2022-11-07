import { render, screen } from "@testing-library/react";
import { McoFormationItem } from "../Mco.Formation.Item";
import { cvExemple as cv } from "../../../__seed__/cv.exemple";

const formationTest = cv.formations[0];

describe("McoFormationItem", () => {
  test("Renders main informations", () => {
    render(<McoFormationItem {...formationTest} />);
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
    render(<McoFormationItem {...formationTest} />);
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
