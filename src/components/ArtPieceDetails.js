import ArtPiecePreview from "./ArtPiecesPreview";

export default function ArtPieceDetails({
  pieces,
  artslug,
  image,
  title,
  artist,
  genre,
  year,
}) {
  const { image, title, artist, genre, year } = pieces;
  return <ArtPiecePreview />;
}
