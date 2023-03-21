import React from "react";
import { render } from "@testing-library/react";
import Navigation from "../Navigation";

test("checks if the links are rendered correctly", () => {
  const { getByText } = render(<Navigation />);
  const spotlightLink = getByText("Spotlight");
  const piecesLink = getByText("Pieces");
  const favoritesLink = getByText("Favorites");

  expect(spotlightLink.getAttribute("href")).toBe("/");
  expect(piecesLink.getAttribute("href")).toBe("/art-pieces");
  expect(favoritesLink.getAttribute("href")).toBe("/favorites");
});
