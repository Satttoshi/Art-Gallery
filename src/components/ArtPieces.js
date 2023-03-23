import ArtPiecePreview from "./ArtPiecesPreview";
import StyledList from "./StyledList";

export default function ArtPieces({
  pieces,
  onFavorite,
  favorites,
  lastPage,
  setLastPage,
}) {
  return (
    <StyledList>
      {pieces.map((piece) => {
        // title, artist, bild
        return (
          <li key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              artslug={piece.slug}
              onFavorite={onFavorite}
              favorites={favorites}
              lastPage={lastPage}
              setLastPage={setLastPage}
            />
          </li>
        );
      })}
    </StyledList>
  );
}
