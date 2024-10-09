import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Footer = styled.footer`
  opacity: 0;

  ${({
    theme: {
      fonts: { familySecondary },
      flex: { flexColumn },
      keyframes: {
        keyframesDuration,
        keyframesDelay,
        animation: { keyframesOpacity },
      },
    },
  }) => css`
    animation: ${keyframesOpacity} ${keyframesDuration[0]} forwards;
    animation-delay: ${keyframesDelay[2]};

    section {
      ${flexColumn};
      gap: 20px;

      span {
        font-family: ${familySecondary};
      }
    }
  `};
`;
