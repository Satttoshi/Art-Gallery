import Spotlight from "../src/components/Spotlight";

export default function Home({ pieces, onFavorite }) {
  return <Spotlight pieces={pieces} onFavorite={onFavorite} />;
}
