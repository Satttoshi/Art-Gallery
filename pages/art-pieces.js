import ArtPieces from "../src/components/ArtPieces";

export default function Gallery({ pieces, onFavorite }) {
  return <ArtPieces pieces={pieces} onFavorite={onFavorite} />;
}
