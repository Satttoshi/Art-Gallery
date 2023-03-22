import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";
import FavoriteButton from "./FavoriteButton";

const StyledLink = styled(Link)`
  background-color: darkblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  color: white;
`;

export default function ArtPiecePreview({ image, title, artist, artslug }) {
  return (
    <>
      <h2>{title}</h2>
      <FavoriteButton />
      <StyledLink href={`/art-pieces/${artslug}`}>
        <Image src={image} alt={title} height={243} width={192} />
        <figcaption>{artist}</figcaption>
      </StyledLink>
    </>
  );
}
