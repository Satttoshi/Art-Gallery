import React from "react";
import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";
import Image from "next/image";

const data = [
  {
    name: "testValue",
    artist: "testVal",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
];

test("are the artpieces rendered in a list?", () => {
  render(<ArtPieces pieces={data} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});

test("is image of artpieces rendered?", () => {
  render(<ArtPieces pieces={data} />);
  const img = screen.getByRole("img");
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", data.imageSource);
});

test("is title of artpieces rendered?", () => {
  render(<ArtPieces pieces={data} />);
  const heading = screen.getByRole("heading", { name: /testvalue/i });
  expect(heading).toBeInTheDocument();
});

test("is artist of artpieces rendered?", () => {
  render(<ArtPieces pieces={data} />);
  const figcaption = screen.getByText("testVal");
  expect(figcaption).toBeInTheDocument();
});
