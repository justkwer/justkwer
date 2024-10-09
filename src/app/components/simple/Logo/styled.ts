import { hover } from '~styles';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Logo = styled.button`
  ${hover};

  span {
    font-size: 1.6rem;
  }

  ${({
    theme: {
      fonts: { familySecondary },
      flex: { flexRow },
      colors: { grey },
      media: { mediaMobile, mediaSmall, mediaLarge, mediaMedium },
    },
  }) => css`
    ${flexRow};

    span {
      color: ${grey};
      font-family: ${familySecondary};

      @media (${mediaLarge}) {
        font-size: 1.5rem;
      }

      @media (${mediaMedium}) {
        font-size: 1.4rem;
      }

      @media (${mediaSmall}) {
        font-size: 1.3rem;
      }

      @media (${mediaMobile}) {
        font-size: 1.2rem;
      }
    }
  `}
`;
