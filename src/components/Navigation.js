import Link from "next/link";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";

const StyledNav = styled.nav`
  color: turquoise;
  width: 100%;
  font-size: 2rem;
  background-color: hotpink;
  position: fixed;
  bottom: 0px;
  padding-left: 25px;
  left: 0px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 10px;
  margin-left: 10px;
`;

export default function Navigation({ setLastPage }) {
  const router = useRouter();
  const currentPage = router.asPath;

  return (
    <StyledNav>
      <StyledLink
        onClick={() => {
          setLastPage(`${currentPage}`);
        }}
        href="/"
      >
        Spotlight
      </StyledLink>
      <StyledLink
        onClick={() => {
          setLastPage(`${currentPage}`);
        }}
        href="/art-pieces"
      >
        Pieces
      </StyledLink>
      <StyledLink
        onClick={() => {
          setLastPage(`${currentPage}`);
        }}
        href="/favorites"
      >
        Favorites
      </StyledLink>
    </StyledNav>
  );
}
