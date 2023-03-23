import Spotlight from "../src/components/Spotlight";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Home({ pieces, onFavorite, favorites, setLastPage }) {
  const router = useRouter();
  const currentPage = router.asPath;
  console.log("currentpage:", currentPage);

  useEffect(() => {
    setLastPage(currentPage);
  }, [pieces]);

  return (
    <Spotlight
      setLastPage={setLastPage}
      pieces={pieces}
      onFavorite={onFavorite}
      favorites={favorites}
    />
  );
}
