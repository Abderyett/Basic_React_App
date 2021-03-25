import { createGlobalStyle } from 'styled-components';
import { color } from './utilities';

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  border: 0;
}
html {
  font-size: 62.5%;
}

body{
background:${(toggle) => (toggle.toggle ? `${color.blue_900}` : `${color.white}`)}
}


`;
