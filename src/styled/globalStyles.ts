import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.familyP};
    font-style: ${theme.fonts.style};
    font-weight: ${theme.fonts.weight};
    font-size: ${theme.fonts.size};
    color: ${theme.colors.black};
  }

  button {
    text-decoration: ${theme.buttons.decoration};
    cursor: ${theme.buttons.cursor};
    border: ${theme.buttons.border};
    outline: ${theme.buttons.outline};

    &:disabled {
      cursor: ${theme.buttons.cursorD};
    }
  }

  a {
    text-decoration: ${theme.buttons.decoration};
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
  }

  section {
    margin: auto;
    max-width: ${theme.sizes.main};
  }

  img, svg {
    display: block;
  }
`;
