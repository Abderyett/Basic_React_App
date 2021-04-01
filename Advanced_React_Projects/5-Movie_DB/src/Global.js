import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @font-face {
     font-family: 'Sans Regular';
     src: url('./Fonts/SourceSansPro-Regular.otf');
  }
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  border: 0;
}
html {
  font-size: 62.5%;
  /* font-family:'Sans Regular',Arial, Helvetica, sans-serif; */
}


`;
