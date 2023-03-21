import React from "react";
import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";

const data = [
  {
    title: "testValue",
    artist: "testVal",
    image:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
];

test("are these artpieces rendered in that list?", () => {
  render(<ArtPieces pieces={data} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});
