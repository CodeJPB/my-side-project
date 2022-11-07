import { render, screen } from "@testing-library/react";
import { cvExemple as cv } from "../../__seed__/cv.exemple";
import { McoHeader } from "./Mco.Header";

describe("McoHeader", () => {
  test("Renders main informations", () => {
    render(<McoHeader {...cv.main} />);
    const headings = screen.getAllByRole("heading");
    const firstName = screen.getByText(cv.main.firstName, { exact: false });
    const lastName = screen.getByText(cv.main.lastName, { exact: false });
    const email = screen.getByText(cv.main.email, { exact: false });
    expect(headings).toHaveLength(2);
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
