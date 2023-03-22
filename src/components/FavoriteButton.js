import styled, { css } from "styled-components";
import Heart from "../../public/heart.svg";

const StyledButton = styled.button`
  position: absolute;

  background: none;
  border: none;
  cursor: pointer;
  svg:hover {
    fill: hotpink;
  }
`;

export default function FavoriteButton({ isFavorite, onFavorite, slug }) {
  /* const bookmarkButton = isBookmarked ? bookMarkFilled : bookMarkEmpty; */

  return (
    <StyledButton type="button" onClick={() => onFavorite(slug)}>
      <Heart />
    </StyledButton>
  );
}
