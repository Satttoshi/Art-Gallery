import ArtPieces from "../src/components/ArtPieces";

export default function Gallery({ pieces, onFavorite, favorites }) {
  return (
    <ArtPieces pieces={pieces} onFavorite={onFavorite} favorites={favorites} />
  );
}
