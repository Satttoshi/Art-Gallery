import ArtPiecePreview from "./ArtPiecesPreview";
import Link from "next/link";
import { uid } from "uid";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        // title, artist, bild
        return (
          <li key={uid()}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              artslug={piece.slug}
            />
          </li>
        );
      })}
    </ul>
  );
}
