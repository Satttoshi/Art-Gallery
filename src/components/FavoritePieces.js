import ArtPiecePreview from "./ArtPiecesPreview";
import StyledList from "./StyledList";

export default function FavoritePieces({ pieces, onFavorite, favorites }) {
  const slugsOfFavoritePieces = favorites
    .filter((favorite) => favorite.isFavorite)
    .map((favoritePiece) => favoritePiece.slug);

  const favoritePieces = pieces.filter((piece) =>
    slugsOfFavoritePieces.includes(piece.slug)
  );

  return (
    <StyledList>
      {favoritePieces.map((piece) => {
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
            />
          </li>
        );
      })}
    </StyledList>
  );
}
