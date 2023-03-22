import GlobalStyle from "../styles";
import Layout from "../src/components/Layout";
import Navigation from "../src/components/Navigation";
import useSWR from "swr";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });

  if (isLoading) {
    console.log("isLoading");
    return null;
  }

  if (error) {
    console.error("API ERROR");
    return <span>API ERROR, trying to refetch ...</span>;
  }

  const handleToggle = (slug) => {
    setFavorites((favorites) => {
      const info = favorites.find((piece) => piece.slug === slug);
      if (info) {
        return favorites.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      // If slug (element) doesn't exist in array do this:
      return [...favorites, { slug, isFavorite: true }];
    });
  };

  console.log(favorites);

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        onFavorite={handleToggle}
        pieces={data}
        favorites={favorites}
      />
      <Navigation />
    </Layout>
  );
}
