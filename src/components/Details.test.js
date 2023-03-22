import React from "react";
import { render, screen } from "@testing-library/react";
import Details from "./Details";

// mock the useRouter() function
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      asPath: "/",
    };
  },
}));

const data = {
  year: 1996,
  genre: "mature content",
  image: "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  title: "cool picture",
  artist: "cool artist",
};

test("is image of Details rendered?", () => {
  render(
    <Details
      year={data.year}
      genre={data.genre}
      image={data.image}
      title={data.title}
      artist={data.artist}
    />
  );
  const img = screen.getByRole("img");
  expect(img).toBeInTheDocument();
});

test("is title of Details rendered?", () => {
  render(
    <Details
      year={data.year}
      genre={data.genre}
      image={data.image}
      title={data.title}
      artist={data.artist}
    />
  );
  const heading = screen.getByRole("heading", { name: /cool picture/i });
  expect(heading).toBeInTheDocument();
});

test("is artist of Details rendered?", () => {
  render(
    <Details
      year={data.year}
      genre={data.genre}
      image={data.image}
      title={data.title}
      artist={data.artist}
    />
  );
  const figcaption = screen.getByText(/cool artist/i);
  expect(figcaption).toBeInTheDocument();
});

test("is year & genre of Details rendered?", () => {
  render(
    <Details
      year={data.year}
      genre={data.genre}
      image={data.image}
      title={data.title}
      artist={data.artist}
    />
  );
  const year = screen.getByText(/1996/i);
  const genre = screen.getByText(/mature content/i);
  expect(year).toBeInTheDocument();
  expect(genre).toBeInTheDocument();
});

test("is button of Details rendered?", () => {
  render(
    <Details
      year={data.year}
      genre={data.genre}
      image={data.image}
      title={data.title}
      artist={data.artist}
    />
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
