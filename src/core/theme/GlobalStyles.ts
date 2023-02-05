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

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  a {
    text-decoration: ${({ theme }) => theme.buttons.decoration};
  }

  ul {
    list-style-type: none;
  }
  
  ::-webkit-scrollbar {
    width: 0;
  }
`;
