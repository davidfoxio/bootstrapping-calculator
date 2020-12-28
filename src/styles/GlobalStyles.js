import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color:#374151;
  }
  h1 {
      text-align: center;
  }
  .about-text {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default GlobalStyles;
