import ArtPiecePreview from "./ArtPiecesPreview";

export default function Spotlight({ pieces }) {
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
