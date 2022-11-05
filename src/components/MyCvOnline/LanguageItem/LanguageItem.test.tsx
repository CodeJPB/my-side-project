import React from "react";
import { render, screen } from "@testing-library/react";
import { LanguageItem } from "./LanguageItem";
import { cv } from "../../../data/cv";

const languageItem = cv.languages[0];

describe("languageItem", () => {
  test("Renders title passed in props", () => {
    render(<LanguageItem {...languageItem} />);
    const title = screen.getByText(languageItem.title);
    expect(title).toBeInTheDocument();
  });
});
