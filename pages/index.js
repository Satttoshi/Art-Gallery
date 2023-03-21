import ArtPieces from "../src/components/ArtPieces";
import ArtPiecePreview from "../src/components/ArtPiecesPreview";

export default function HomePage({ pieces }) {
  const randomIndex = Math.floor(Math.random() * (pieces.length + 1));

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
