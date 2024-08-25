import styled from '@emotion/styled';
import { Section } from '~styles';
import { css } from '@emotion/react';

export const ChangeLife = styled(Section)`
  height: 100%;
  justify-content: space-between;

  h1 {
    z-index: -1;
    text-align: center;
  }

  ${({
    theme: {
      flex: { flexColumn },
      fonts: { familySecondary },
      keyframes: {
        keyframesDuration,
        animation: { keyframesTitle },
      },
      media: { mediaLarge, mediaMedium, mediaMobile, mediaSmall },
    },
  }) => css`
    ${flexColumn};

    h1 {
      animation: ${keyframesTitle} ${keyframesDuration[0]} forwards;
      font-family: ${familySecondary};
      font-size: 6rem;

      @media (${mediaLarge}) {
        font-size: 5.5rem;
      }

      @media (${mediaMedium}) {
        font-size: 4.5rem;
      }

      @media (${mediaSmall}) {
        font-size: 3.2rem;
      }

      @media (${mediaMobile}) {
        font-size: 2.8rem;
      }

      @media (max-width: 474px) {
        font-size: 1.8rem;
      }
    }
  `};
`;
