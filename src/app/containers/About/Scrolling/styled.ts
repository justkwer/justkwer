import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { ScrollingType } from './models';

export const Scrolling = styled.button<ScrollingType>`
  opacity: 0;

  #arrow {
    width: 12px;
    height: 12px;
  }

  #mouse {
    width: 32px;
    height: 32px;
  }

  ${({
    isHidden,
    isScrollUp,
    theme: {
      colors: { white },
      flex: { flexColumn },
      keyframes: {
        animation: { keyframesButton },
        keyframesDuration,
        keyframesDelay,
      },
      media: { mediaMobile },
    },
  }) => css`
    animation: ${keyframesButton} ${keyframesDuration[0]} forwards;
    animation-delay: ${keyframesDelay[2]};
    ${flexColumn};

    visibility: ${isHidden ? 'hidden' : 'visible'};

    #arrow {
      transform: ${isScrollUp ? 'rotate(-90deg)' : 'rotate(90deg)'};
    }

    svg {
      fill: ${white};
    }

    @media (${mediaMobile}) {
      gap: 0;

      #arrow {
        width: 10px;
        height: 10px;
      }

      #mouse {
        width: 24px;
        height: 24px;
      }
    }
  `};
`;
