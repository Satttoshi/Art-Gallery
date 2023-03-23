import styled from "styled-components";

const StyledImageContainer = styled.div`
  background-color: ghostwhite;
  border-radius: 20px;
  margin-bottom: 20px;
  position: relative;
  margin-top: 50px;
  border: 0px solid orange;
  filter: drop-shadow(0px 0px 3px white);
`;

const StyledImageContainer_Detail = styled(StyledImageContainer)`
  width: fit-content;
`;

export default StyledImageContainer;
