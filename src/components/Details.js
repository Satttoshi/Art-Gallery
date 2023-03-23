import { useRouter } from "next/router";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import StyledImageContainer_Detail from "./StyledImageContainer";

export default function Details({
  year,
  genre,
  image,
  title,
  artist,
  onFavorite,
  slug,
  favorites,
  lastPage,
}) {
  const router = useRouter();

  return (
    <StyledImageContainer_Detail>
      <h2>{title}</h2>
      <FavoriteButton
        onFavorite={onFavorite}
        slug={slug}
        favorites={favorites}
      />
      <Image src={image} alt={title} height={400} width={400} />
      <figcaption>{artist}</figcaption>
      <span>{year} </span>
      <span>{genre} </span>
      <button
        type="button"
        onClick={() => {
          router.push(`${lastPage}`);
        }}
      >
        BACK
      </button>
    </StyledImageContainer_Detail>
  );
}
