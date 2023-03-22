import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import { useEffect, useState } from "react";

export default function Spotlight({ pieces, onFavorite, favorites }) {
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    setRandomIndex(randomIndex);
  }, [pieces]);

  return (
    <>
      <FavoriteButton
        onFavorite={onFavorite}
        slug={pieces[randomIndex].slug}
        favorites={favorites}
      />
      <Link href={`/art-pieces/${pieces[randomIndex].slug}`}>
        <Image
          src={pieces[randomIndex].imageSource}
          alt={pieces[randomIndex].name}
          height={700}
          width={500}
        />
        <figcaption>{pieces[randomIndex].artist}</figcaption>
      </Link>
    </>
  );
}
