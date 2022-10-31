import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
  }

  img, svg {
    display: block;
  }
`;

export const Section = styled.section`
  max-width: ${({ theme }) => theme.sizes.container.width[0]}px;
  padding: ${({ theme }) => theme.sizes.container.padding[0]};

  * {
    font-family: ${({ theme }) => theme.fonts.familyP};
    font-style: ${({ theme }) => theme.fonts.style};
    font-weight: ${({ theme }) => theme.fonts.weight};
    font-size: ${({ theme }) => theme.fonts.size};
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: ${({ theme }) => theme.fonts.spacing.primary};
    line-height: ${({ theme }) => theme.fonts.height.primary};
  }

  button {
    text-decoration: ${({ theme }) => theme.buttons.decoration};
    cursor: ${({ theme }) => theme.buttons.cursor};
    border: ${({ theme }) => theme.buttons.border};
    outline: ${({ theme }) => theme.buttons.outline};

    &:disabled {
      cursor: ${({ theme }) => theme.buttons.cursorD};
    }
  }

  a {
    text-decoration: ${({ theme }) => theme.buttons.decoration};
  }

  @media ${({ theme }) => theme.media.large} {
    max-width: ${({ theme }) => theme.sizes.container.width[1]}px;
    padding: ${({ theme }) => theme.sizes.container.padding[1]};
  }
  @media ${({ theme }) => theme.media.medium} {
    max-width: ${({ theme }) => theme.sizes.container.width[2]}px;
    padding: ${({ theme }) => theme.sizes.container.padding[2]};
  }
  @media ${({ theme }) => theme.media.small} {
    max-width: ${({ theme }) => theme.sizes.container.width[3]}px;
    padding: ${({ theme }) => theme.sizes.container.padding[3]};
  }
  @media ${({ theme }) => theme.media.mobile} {
    max-width: ${({ theme }) => theme.sizes.container.width[4]}px;
    padding: ${({ theme }) => theme.sizes.container.padding[4]};
  }
`;
