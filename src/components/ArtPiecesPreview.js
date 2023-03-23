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
`;

const StyledImage = styled(Image)`
  position: relative;
  width: 300px;
`;

const StyledH2 = styled.h2`
  color: pink;
  max-width: 300px;
`;
export default function ArtPiecePreview({
  image,
  title,
  artist,
  artslug,
  onFavorite,
  favorites,
  setLastPage,
  currentPage,
}) {
  return (
    <StyledImageContainer>
      <StyledH2>{title}</StyledH2>
      <FavoriteButton
        onFavorite={onFavorite}
        slug={artslug}
        favorites={favorites}
      />
      <StyledLink href={`/art-pieces/${artslug}`}>
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
