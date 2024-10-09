import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const YouTube = styled.iframe`
  border: none;
  opacity: 0;

  ${({
    theme: {
      keyframes: {
        keyframesDelay,
        keyframesDuration,
        animation: { keyframesOpacity },
      },
      media: { mediaMedium },
    },
  }) => css`
    animation: ${keyframesOpacity} ${keyframesDuration[0]} forwards;
    animation-delay: ${keyframesDelay[1]};

    @media (${mediaMedium}) {
      max-width: 100%;
      max-height: 190px;
    }
  `};
`;
