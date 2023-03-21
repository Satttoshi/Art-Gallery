import React from "react";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";

test("should render three navigation links", () => {
  const { getByText } = render(<Navigation />);
  expect(getByText("Home")).toBeInTheDocument();
  expect(getByText("Pieces")).toBeInTheDocument();
  expect(getByText("Favorites")).toBeInTheDocument();
});
