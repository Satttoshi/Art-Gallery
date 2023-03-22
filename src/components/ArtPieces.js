import ArtPiecePreview from "./ArtPiecesPreview";

export default function ArtPieces({ pieces, onFavorite }) {
  return (
    <ul>
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
            />
          </li>
        );
      })}
    </ul>
  );
}
