import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";
import FavoriteButton from "./FavoriteButton";
import StyledImageContainer from "./StyledImageContainer";

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  color: gray;
`;

const StyledImage = styled(Image)`
  position: relative;
  width: 100%;
`;

export default function ArtPiecePreview({
  image,
  title,
  artist,
  artslug,
  onFavorite,
  favorites,
}) {
  return (
    <StyledImageContainer>
      <h2>{title}</h2>

      <StyledLink href={`/art-pieces/${artslug}`}>
        <FavoriteButton
          onFavorite={onFavorite}
          slug={artslug}
          favorites={favorites}
        />
        <div>
          <StyledImage
            src={image}
            alt={title}
            height={243}
            width={192}
          ></StyledImage>
        </div>

        <figcaption>{artist}</figcaption>
      </StyledLink>
    </StyledImageContainer>
  );
}
