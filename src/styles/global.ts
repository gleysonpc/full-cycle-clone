import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0 ;
      box-sizing: border-box;
    }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #191C20;
    /* font-size: 62.5%; */
  }
`;

export const colors = {
  bgPrimary: "#242A33",
  bgSecondary: "#212429",
  Primary: "#FCBA11",
  Secondary: "#FFB74E",
  White: "#FFF",
  Gray: "#909090",
};

export const radius = 7;
