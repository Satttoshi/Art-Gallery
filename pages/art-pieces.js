import ArtPieces from "../src/components/ArtPieces";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Gallery({
  pieces,
  onFavorite,
  favorites,
  lastPage,
  setLastPage,
}) {
  const router = useRouter();
  const currentPage = router.asPath;
  console.log("currentpage:", currentPage);

  useEffect(() => {
    setLastPage(currentPage);
  }, [pieces]);

  return (
    <ArtPieces
      lastPage={lastPage}
      setLastPage={setLastPage}
      pieces={pieces}
      onFavorite={onFavorite}
      favorites={favorites}
    />
  );
}
