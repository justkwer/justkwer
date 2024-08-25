import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { H2, P } from '~styles';

export const Picture = styled.figure`
  height: 100%;
  width: 100%;
  gap: 100px;

  svg {
    height: 100%;
    width: 100%;
    max-width: 500px;
    max-height: 100%;
    z-index: -1;
    opacity: 0;
  }

  ${({
    theme: {
      flex: { flexRow },
      keyframes: {
        keyframesDelay,
        keyframesDuration,
        animation: { keyframesOpacity },
      },
      media: { mediaMobile, mediaMedium },
    },
  }) => css`
    ${flexRow};

    svg {
      animation: ${keyframesOpacity} ${keyframesDuration[0]} forwards;
      animation-delay: ${keyframesDelay[0]};
    }

    @media (${mediaMedium}) {
      gap: 50px;
    }

    @media (${mediaMobile}) {
      flex-direction: column;
      gap: 20px;
      text-align: center;

      svg {
        height: 40vh;
      }
    }
  `};
}`;

export const Title = styled(H2)`
  font-size: 6rem;
  opacity: 0;
  -webkit-text-fill-color: initial;
  text-wrap: nowrap;

  ${({
    theme: {
      fonts: { familySecondary },
      keyframes: {
        keyframesDelay,
        keyframesDuration,
        animation: { keyframesSubtitle, keyframesShine },
      },
      media: { mediaMobile, mediaSmall, mediaLarge, mediaMedium },
    },
  }) => css`
    font-family: ${familySecondary};
    animation:
      ${keyframesSubtitle} ${keyframesDuration[0]} forwards,
      ${keyframesShine} ${keyframesDuration[0]} forwards;
    animation-delay: ${keyframesDelay[0]};

    @media (${mediaLarge}) {
      font-size: 5.6rem;
    }

    @media (${mediaMedium}) {
      font-size: 4.5rem;
    }

    @media (${mediaSmall}) {
      font-size: 4rem;
    }

    @media (${mediaMobile}) {
      font-size: 3rem;
    }
  `}
`;

export const Subtitle = styled(P)`
  opacity: 0;

  ${({
    theme: {
      colors: { yellow },
      keyframes: {
        keyframesDelay,
        keyframesDuration,
        animation: { keyframesSubtitle },
      },
      media: { mediaMobile },
    },
  }) => css`
    animation: ${keyframesSubtitle} ${keyframesDuration[0]} forwards;
    animation-delay: ${keyframesDelay[2]};

    strong,
    a {
      color: ${yellow};

      &:hover {
        text-shadow: 0 0 10px ${yellow};
      }
    }

    @media (${mediaMobile}) {
      &,
      a {
        font-size: 0.75rem;
      }
    }
  `}
`;
