import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
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
