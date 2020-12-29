import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color:#374151;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  .App {
    width: 100%;
    height: 100%;
  }
  h1 {
      text-align: center;
  }
  #red-span {
    border-radius: 1em 0 1em 0;
    background-image: linear-gradient(
      -100deg,
      rgba(255, 72, 72, 0.15),
      rgba(255, 72, 72, 0.8) 100%,
      rgba(255, 72, 72, 0.25)
    );
  }
  #yellow-span {
    border-radius: 1em 0 1em 0;
    background-image: linear-gradient(
      -100deg,
      rgba(218, 207, 0, 0.15),
      rgba(218, 207, 0, 0.8) 100%,
      rgba(218, 207, 0, 0.25)
    );
  }
  #blue-span {
    border-radius: 1em 0 1em 0;
    background-image: linear-gradient(
      -100deg,
      rgba(150, 174, 255, 0.15),
      rgba(150, 174, 255, 0.8) 100%,
      rgba(150, 174, 255, 0.25)
    );
  }
  #green-span {
    border-radius: 1em 0 1em 0;
    background-image: linear-gradient(
      -100deg,
      rgba(20, 175, 20, 0.15),
      rgba(20, 175, 20, 0.8) 100%,
      rgba(20, 175, 20, 0.25)
    );
  }
  .chart-title {
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
