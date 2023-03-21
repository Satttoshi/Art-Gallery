import ArtPieces from "../src/components/ArtPieces";
import ArtPiecePreview from "../src/components/ArtPiecesPreview";

export default function SpotlightPage({ pieces }) {
  const randomIndex = Math.floor(Math.random() * pieces.length);

  return (
    <div>
      <ArtPiecePreview
        image={pieces[randomIndex].imageSource}
        title={pieces[randomIndex].name}
        artist={pieces[randomIndex].artist}
      />
    </div>
  );
}
