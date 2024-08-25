import { hover } from '~styles';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Navigation = styled.nav`
  margin-left: auto;

  ul {
    ${({
      theme: {
        flex: { flexRow },
        media: { mediaLarge, mediaMedium },
      },
    }) => css`
      ${flexRow};
      gap: 35px;

      @media (${mediaLarge}) {
        gap: 30px;
      }
      @media (${mediaMedium}) {
        gap: 25px;
      }
    `};
  }
`;

export const NavigationLi = styled.li`
  a {
    ${hover};
    position: relative;
    font-size: 1.2rem;
    border-bottom: 3px solid transparent;

    &:hover::after {
      width: 100%;
    }

    &::after {
      position: absolute;
      background: none repeat scroll 0 0 transparent;
      bottom: -3px;
      left: 0;
      content: '';
      display: block;
      height: 3px;
      transition: width 0.3s ease-out;
      width: 0;
    }

    &.active {
      opacity: 1;
    }
  }

  ${({
    theme: {
      colors: { white },
      fonts: { familySecondary },
      media: { mediaMedium, mediaLarge, mediaSmall, mediaMobile },
    },
  }) => css`
    a {
      font-family: ${familySecondary};

      &::after {
        background: ${white};
      }

      &.active {
        border-color: ${white};
        cursor: default;
      }

      @media (${mediaLarge}) {
        font-size: 1.1rem;
      }

      @media (${mediaMedium}) {
        font-size: 1rem;
      }

      @media (${mediaSmall}) {
        font-size: 0.9rem;
      }

      @media (${mediaMobile}) {
        font-size: 0.8rem;
      }
    }
  `}
`;
