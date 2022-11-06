import { render, screen } from "@testing-library/react";
import { McoInterestItem } from "./Mco.Interest.Item";
import { cvExemple as cv } from "../../__seed__/cv.exemple";

const interestTest = cv.interests[0];

describe("McoInterestItem", () => {
  test("Renders title passed in props", () => {
    render(<McoInterestItem {...interestTest} />);
    const title = screen.getByText(interestTest.title);
    expect(title).toBeInTheDocument();
  });
});
