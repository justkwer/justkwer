import { SvgLink } from '~styles';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Theme = styled.button`
  & > svg {
    ${SvgLink};
  }

  margin-left: 35px;

  ${({
    theme: {
      media: { mediaMedium, mediaLarge, mediaMobile },
    },
  }) => css`
    @media (${mediaLarge}) {
      margin-left: 30px;
    }
    @media (${mediaMedium}) {
      margin-left: 25px;
    }

    @media (${mediaMobile}) {
      margin-left: auto;
    }
  `};
`;
