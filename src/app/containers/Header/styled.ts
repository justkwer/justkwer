import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Header = styled.header`
  opacity: 0;

  ${({
    theme: {
      media: { mediaSmall },
      flex: { flexRow },
      keyframes: {
        animation: { keyframesOpacity },
        keyframesDuration,
        keyframesDelay,
      },
    },
  }) => css`
    animation: ${keyframesOpacity} ${keyframesDuration[0]} forwards;
    animation-delay: ${keyframesDelay[2]};

    section {
      ${flexRow};
      justify-content: space-between;

      @media (${mediaSmall}) {
        & > nav {
          display: none;
        }
      }
    }
  `};
`;
