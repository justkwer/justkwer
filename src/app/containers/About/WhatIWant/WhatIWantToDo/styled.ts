import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const WhatIWantToDo = styled.figure`
  max-width: 300px;
  text-align: center;

  svg {
    min-width: 48px;
    min-height: 48px;
  }

  &,
  figcaption {
    gap: 10px;
  }

  ${({
    theme: {
      colors: { dark },
      flex: { flexColumn },
      media: { mediaSmall },
    },
  }) => css`
    &,
    figcaption {
      ${flexColumn};
    }

    svg {
      filter: drop-shadow(0 0 5px ${dark});
    }

    @media (${mediaSmall}) {
      flex-direction: row;

      h3,
      p {
        text-align: start;
      }

      figcaption {
        align-items: start;
      }
    }
  `};
`;
