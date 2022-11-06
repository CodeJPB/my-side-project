import { render, screen } from "@testing-library/react";
import { McoLanguageItem } from "./Mco.Language.Item";
import { cvExemple as cv } from "./../../__seed__/cv.exemple";

const languageItem = cv.languages[0];

describe("McoLanguageItem", () => {
  test("Renders title passed in props", () => {
    render(<McoLanguageItem {...languageItem} />);
    const title = screen.getByText(languageItem.title);
    expect(title).toBeInTheDocument();
  });
});
