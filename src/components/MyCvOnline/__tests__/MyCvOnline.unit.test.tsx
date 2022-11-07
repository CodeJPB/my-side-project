import { render } from "@testing-library/react";
import { MyCvOnline } from "../MyCvOnline";
import { cvExemple as cv } from "../__seed__/cv.exemple";

describe("MyCvOnline", () => {
  test("Renders without errors", () => {
    const test = () => render(<MyCvOnline {...cv} />);
    expect(test).not.toThrow();
  });
});
