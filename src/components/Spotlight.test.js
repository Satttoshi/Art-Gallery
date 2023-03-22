import React from "react";
import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

const data = [
  {
    name: "testValue",
    artist: "testVal",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
];

test("is image of Spotlight rendered?", () => {
  render(<Spotlight pieces={data} />);
  const img = screen.getByRole("img");
  expect(img).toBeInTheDocument();
});

test("is artist of artpieces rendered?", () => {
  render(<Spotlight pieces={data} />);
  const figcaption = screen.getByText("testVal");
  expect(figcaption).toBeInTheDocument();
});
