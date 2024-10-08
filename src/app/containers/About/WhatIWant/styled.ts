import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const WhatIWant = styled.div`
  gap: 20px;
  height: 100%;

  ${({
    theme: {
      colors: { white },
      flex: { flexColumn },
      keyframes: {
        keyframesDelay,
        keyframesDuration,
        animation: { keyframesOpacity, keyframesSubtitleRotate, keyframesShine },
      },
    },
  }) => css`
    ${flexColumn};

    span {
      width: 120px;
      border-bottom: solid ${white};
    }

    h2 {
      opacity: 0;
      animation:
        ${keyframesSubtitleRotate} ${keyframesDuration[0]} forwards,
        ${keyframesShine} ${keyframesDuration[0]} forwards;
      animation-delay: ${keyframesDelay[0]};
    }

    span {
      opacity: 0;
      animation: ${keyframesOpacity} ${keyframesDuration[0]} forwards;
      animation-delay: ${keyframesDelay[1]};
    }
  `};
`;

export const WhatIWantToDoWrapper = styled.div`
  gap: 50px;
  opacity: 0;

  ${({
    theme: {
      flex: { flexRow },
      keyframes: {
        keyframesDelay,
        keyframesDuration,
        animation: { keyframesOpacity },
      },
      media: { mediaSmall },
    },
  }) => css`
    ${flexRow};
    align-items: start;
    animation: ${keyframesOpacity} ${keyframesDuration[0]} forwards;
    animation-delay: ${keyframesDelay[1]};

    @media (${mediaSmall}) {
      flex-wrap: wrap;
      gap: 10px;
      flex-grow: 1;
      figure {
        max-width: 100%;
      }
    }
  `};
`;
