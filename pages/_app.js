import GlobalStyle from "../styles";
import Layout from "../src/components/Layout";
import Navigation from "../src/components/Navigation";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { useImmer } from "use-immer";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPieceInfo, updateArtPieceInfo] = useImmer([]);
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (isLoading) {
    console.log("isLoading");
    return null;
  }

  if (error) {
    console.error("API ERROR");
    return <span>API ERROR, trying to refetch ...</span>;
  }

  const newArray = data.map(() => {
    return { ...data, isActive: false };
  });

  /*  [{ data, isActive: false }]; */
  console.log("newArray:", newArray);

  /*   useEffect(() => {
    updateArtPieceInfo(data);
  }, []);
 */
  console.log(artPieceInfo);

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
      <Navigation />
    </Layout>
  );
}
