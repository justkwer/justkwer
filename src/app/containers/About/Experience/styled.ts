import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ExperienceList = styled.ul`
  padding: var(--6);
`;

export const ExperienceItem = styled.li`
  font-size: 1.1rem;
  max-width: 460px;

  ${({
    theme: {
      media: { mediaMedium, mediaMobile, mediaSmall },
    },
  }) => css`
    @media (${mediaMedium}) {
      font-size: 1rem;
    }

    @media (${mediaSmall}) {
      font-size: 0.9rem;
    }

    @media (${mediaMobile}) {
      font-size: 0.8rem;
    }
  `}
`;
