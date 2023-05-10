import { createGlobalStyle } from 'styled-components';
import { fonts } from '@core/theme/fonts';

export const GlobalStyles = createGlobalStyle`

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
    ${fonts};
    width: 100%;
    height: 100%;
    --color-stop: ${({ theme }) => theme.colors.magenta};
    --color-bot: ${({ theme }) => theme.colors.primary};
  }

  #__next {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  main {
    flex-grow: 1;
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
    text-decoration: none;
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
