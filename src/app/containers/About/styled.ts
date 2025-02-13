import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Section } from '~styles';

export const About = styled(Section)`
  height: 100%;
  justify-content: space-between;
  gap: var(--10);
  padding-bottom: 0 !important;
  padding-top: 0 !important;

  ${({
    theme: {
      flex: { flexColumn },
      keyframes: {
        animation: { keyframesTitle },
        keyframesDuration,
      },
    },
  }) => css`
    ${flexColumn};

    h1 {
      animation: ${keyframesTitle} ${keyframesDuration[0]} forwards;
    }
  }
  `};
`;
