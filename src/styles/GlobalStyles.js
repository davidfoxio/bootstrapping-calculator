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
  @media only screen and (max-width: 755px) {
    h2 {
      text-align: center;
    }
    h1 {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

export default GlobalStyles;
