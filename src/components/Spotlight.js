import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import { useEffect, useState } from "react";
import StyledImageContainer from "./StyledImageContainer";
import styled from "styled-components";

const SpotLightImage = styled(Image)`
  border-radius: 20px;
  margin: 0;
  padding: 0;
`;

export default function Spotlight({
  pieces,
  onFavorite,
  favorites,
  setLastPage,
}) {
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    setRandomIndex(randomIndex);
  }, [pieces]);

  return (
    <>
      <StyledImageContainer>
        <FavoriteButton
          onFavorite={onFavorite}
          slug={pieces[randomIndex].slug}
          favorites={favorites}
        />
        <Link
          onClick={() => {
            setLastPage("/");
          }}
          href={`/art-pieces/${pieces[randomIndex].slug}`}
        >
          <SpotLightImage
            src={pieces[randomIndex].imageSource}
            alt={pieces[randomIndex].name}
            height={500}
            width={300}
          />
        </Link>
      </StyledImageContainer>
      <figcaption>{pieces[randomIndex].artist}</figcaption>
    </>
  );
}
