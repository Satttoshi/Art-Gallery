import Spotlight from "../src/components/Spotlight";

export default function Home({ pieces, onFavorite, favorites }) {
  return (
    <Spotlight pieces={pieces} onFavorite={onFavorite} favorites={favorites} />
  );
}
