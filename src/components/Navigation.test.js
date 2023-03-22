import React from "react";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";

test("renders three links", () => {
  const { getByText } = render(<Navigation />);
  const spotlightLink = getByText("Spotlight");
  const piecesLink = getByText("Pieces");
  const favoritesLink = getByText("Favorites");

  expect(spotlightLink.getAttribute("href")).toBe("/");
  expect(piecesLink.getAttribute("href")).toBe("/art-pieces");
  expect(favoritesLink.getAttribute("href")).toBe("/favorites");

  // expect(spotlightLink.closest("Link")).toBeInTheDocument();
  // expect(piecesLink.closest("Link")).toBeInTheDocument();
  // expect(favoritesLink.closest("Link")).toBeInTheDocument();
});
