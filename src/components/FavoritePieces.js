import ArtPiecePreview from "./ArtPiecesPreview";
import StyledList from "./StyledList";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function FavoritePieces({
  pieces,
  onFavorite,
  favorites,
  setLastPage,
}) {
  const slugsOfFavoritePieces = favorites
    .filter((favorite) => favorite.isFavorite)
    .map((favoritePiece) => favoritePiece.slug);

  const router = useRouter();
  const currentPage = router.asPath;
  console.log("currentpage:", currentPage);

  useEffect(() => {
    setLastPage(currentPage);
  }, [pieces]);

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
              currentPage={currentPage}
            />
          </li>
        );
      })}
    </StyledList>
  );
}
