import ArtPieceDetails from "../../src/components/ArtPieceDetails";
import { useRouter } from "next/router";
import ArtPiecePreview from "../../src/components/ArtPiecesPreview";

export default function DetailsPage({ pieces }) {
  const router = useRouter();
  const { artslug } = router.query;

  console.log(artslug);

  const piece = pieces.find((piece) => piece.slug === artslug);

  console.log(piece);

  return (
    <>
      <ArtPiecePreview
        image={piece.imageSource}
        title={piece.name}
        artist={piece.artist}
        artslug={piece.slug}
      />
      <ArtPieceDetails year={piece.year} genre={piece.genre} />
    </>
  );
}
