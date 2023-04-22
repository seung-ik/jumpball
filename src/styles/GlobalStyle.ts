import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #f8f8f8;
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    box-shadow: none;
    cursor: pointer;
  }

`;

export default GlobalStyle;
