import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Section } from '~styles';

export const About = styled(Section)`
  height: 100%;
  justify-content: space-between;

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
      padding-bottom: 16px;
    }
  }
  `};
`;
