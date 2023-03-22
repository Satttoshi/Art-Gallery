import GlobalStyle from "../styles";
import Layout from "../src/components/Layout";
import Navigation from "../src/components/Navigation";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const newArray = data.map((piece) => {
    return { ...piece, isActive: false };
  });

  if (isLoading) {
    console.log("isLoading");
    return null;
  }

  if (error) {
    console.error("API ERROR");
    return <span>API ERROR, trying to refetch ...</span>;
  }

  const handleToggle = (value2) => {
    console.log("favButton clicked", value2);
    const updatedData = data.map((piece) => {
      if (piece.slug === value2) {
        return { ...piece, isFavorite: !isFavorite };
      }
      return piece;
    });
  };

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} onFavorite={handleToggle} pieces={data} />
      <Navigation />
    </Layout>
  );
}
