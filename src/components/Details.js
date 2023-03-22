import { useRouter } from "next/router";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function Details({
  year,
  genre,
  image,
  title,
  artist,
  onFavorite,
}) {
  const router = useRouter();

  return (
    <>
      <h2>{title}</h2>
      <FavoriteButton onFavorite={onFavorite} />
      <Image src={image} alt={title} height={400} width={400} />
      <figcaption>{artist}</figcaption>
      <span>{year}</span>
      <span>{genre}</span>
      <button
        type="button"
        onClick={() => {
          router.push("/art-pieces");
        }}
      >
        BACK
      </button>
    </>
  );
}
