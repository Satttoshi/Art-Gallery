import FavoritePieces from "../src/components/FavoritePieces";
export default function Favorites({
  pieces,
  onFavorite,
  favorites,
  setLastPage,
}) {
  return (
    <FavoritePieces
      pieces={pieces}
      onFavorite={onFavorite}
      favorites={favorites}
      setLastPage={setLastPage}
    />
  );
}
