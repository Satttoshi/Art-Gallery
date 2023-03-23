import { createGlobalStyle, css } from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
console.log("robot:", roboto);

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    display: grid;
    grid-template-columns:fitcontent;
    grid: center;
    color: hotpink;
    text-align: center;
    background-color: ashgray;
    justify-content: center;
    font-family: roboto, sans-serif;
    font-weight: 300;
  }
`;
