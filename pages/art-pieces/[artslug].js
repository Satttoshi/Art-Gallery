import Details from "../../src/components/Details";
import { useRouter } from "next/router";

export default function DetailsPage({ pieces }) {
  const router = useRouter();
  const { artslug } = router.query;

  console.log(artslug);

  const piece = pieces.find((piece) => piece.slug === artslug);

  console.log(piece);

  return (
    <>
      <Details
        year={piece.year}
        genre={piece.genre}
        image={piece.imageSource}
        title={piece.name}
        artist={piece.artist}
      />
    </>
  );
}
