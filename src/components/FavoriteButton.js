import styled, { css } from "styled-components";
import Heart from "../../public/heart.svg";

const StyledButton = styled.button`
  position: absolute;
  right: 0px;
  top: 10px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 100;

  svg {
    fill: ${({ fill }) => fill};
    width: 36px;
    height: 36px;
  }

  svg:hover {
    stroke: hotpink;
  }
`;

export default function FavoriteButton({ favorites, onFavorite, slug }) {
  // Compare current slug and check isFavorite boolean value
  const { isFavorite } = favorites.find((piece) => piece.slug === slug) ?? {
    isFavorite: false,
  };

  return (
    <StyledButton
      fill={isFavorite ? "hotpink" : "black"}
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onFavorite(slug);
      }}
    >
      <Heart />
    </StyledButton>
  );
}
