import { createGlobalStyle } from 'styled-components';
import { fonts } from './fonts';

export const GlobalStyles = createGlobalStyle`
  ${fonts};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.familyP};
    font-style: ${({ theme }) => theme.fonts.style};
    font-weight: ${({ theme }) => theme.fonts.weight};
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.primary};
    line-height: ${({ theme }) => theme.fonts.height.primary};
    font-size: ${({ theme }) => theme.fonts.size};
  }

  html, body {
    width: 100%;
    height: 100%;
  }
  
  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  
  main {
    height: 100%;
  }
  
  section {
    margin: auto;
  }

  img, svg {
    display: block;
  }

  svg, button {
    border: none;
    transition: .3s;
    background: none;
  }
  
  button {
    cursor: pointer;
  }

  a {
    text-decoration: ${({ theme }) => theme.buttons.decoration};
  }

  ul {
    list-style-type: none;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
  
  figure {
    margin-block: 0;
    margin-inline: 0;
  }
`;
