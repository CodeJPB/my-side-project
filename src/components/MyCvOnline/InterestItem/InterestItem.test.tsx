import { render, screen } from "@testing-library/react";
import { InterestItem } from "./InterestItem";
import { cv } from "../../../data/cv";

const interestTest = cv.interests[0];

describe("InterestItem", () => {
  test("Renders title passed in props", () => {
    render(<InterestItem {...interestTest} />);
    const title = screen.getByText(interestTest.title);
    expect(title).toBeInTheDocument();
  });
});
