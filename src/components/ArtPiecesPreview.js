import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

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
    <StyledLink href={`/art-pieces/${artslug}`}>
      <h2>{title}</h2>
      <Image src={image} alt={title} height={243} width={192} />
      <figcaption>{artist}</figcaption>
    </StyledLink>
  );
}
