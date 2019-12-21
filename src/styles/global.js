/*
 * Global base style
 */

/* Dependencies */
import { createGlobalStyle } from 'styled-components';

/* base styles */
const GlobalStyle = createGlobalStyle`
  * {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  html, body {
    max-width: 600px;
    height: 100%;
    min-height: 320px;
    margin: 0 auto;
    padding: 0;
    font-family: "PingFang TC","Lantinghei TC","Heiti TC","Apple LiGothic",微軟正黑體,"Microsoft JhengHei","Microsoft JhengHei UI","Microsoft YaHei","Microsoft YaHei UI","PMingLiU",Arial,sans-serif;
    font-size: 16px;
    line-height: 1.5em;
    text-align: left;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    transition: background 0.5s ease;
  }

  ::selection {
    background: ${(props) => props.theme.highlightColor}; /* WebKit/Blink Browsers */
  }

  ::-moz-selection {
    background: ${(props) => props.theme.highlightColor}; /* Gecko Browsers */
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;

    &:first-child {
      margin-top: 0;
    }
  }

  h1 {
    font-size: 1.75rem;
    line-height: 1.2em;
    margin: 1.516rem 0 0.75rem 0;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.3em;
    margin: 1.7rem 0 0.85rem 0;
  }

  h3 {
    font-size: 1.375rem;
    line-height: 1.3em;
    margin: 1.8rem 0 0.9rem 0;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.4em;
    margin: 2rem 0 1rem 0;
  }

  h5 {
    font-size: 1.125rem;
    line-height: 1.5em;
    margin: 2.2rem 0 1.1rem 0;
  }

  h6 {
    font-size: 1rem;
    line-height: 1.5em;
    margin: 2.5rem 0 1.25rem 0;
  }

  img {
    border: 0;
  }

  p {
    margin: 1rem 0;
  }

  a {
    color: ${(props) => props.theme.linkColor};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.linkHoverColor};
    }

    &:active, &:focus {
      outline: none;
    }
  }

  p a {
    border-bottom: 2px solid ${(props) => props.theme.linkColor};

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.linkHoverColor};
    }
  }

  #root, #app {
    height: 100%;
    position: relative;
  }
`;

export default GlobalStyle;
