import Details from "../../src/components/Details";
import { useRouter } from "next/router";

export default function DetailsPage({
  pieces,
  onFavorite,
  favorites,
  lastPage,
  setLastPage,
}) {
  const router = useRouter();
  const { artslug } = router.query;

  console.log(artslug);

  const piece = pieces.find((piece) => piece.slug === artslug);

  console.log(piece);

  return (
    <>
      <Details
        onFavorite={onFavorite}
        year={piece.year}
        genre={piece.genre}
        image={piece.imageSource}
        title={piece.name}
        artist={piece.artist}
        slug={piece.slug}
        favorites={favorites}
        lastPage={lastPage}
        setLastPage={setLastPage}
      />
    </>
  );
}
