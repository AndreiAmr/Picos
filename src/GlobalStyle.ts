import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,body, #root {
    height: 100%;
    width: 100%;
    background: #0B87CD
  }
`;

export { GlobalStyles };
