import { hover } from '~styles';
import { type IsActiveType } from '~types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Burger = styled.div`
  position: relative;
  display: none;
  margin-left: auto;
  width: 32px;
  height: 32px;
  min-width: 24px;
  min-height: 24px;

  & > button {
    ${hover};
    width: 100%;
    height: 100%;
    position: relative;
    padding: 5px;
    border-radius: 50%;
  }

  ${({
    theme: {
      colors: { magenta, primary },
      media: { mediaMobile, mediaSmall },
    },
  }) => css`
    & > button {
      background: linear-gradient(90deg, ${magenta}, ${primary});
    }

    @media (${mediaMobile}) {
      width: 24px;
      height: 24px;
    }

    @media (${mediaSmall}) {
      display: block;
    }
  `};
`;

export const BurgerBtn = styled.span<IsActiveType>`
  &,
  &:before,
  &:after {
    display: block;
    position: absolute;
    width: 21px;
    height: 2px;
    border-radius: 1px;
    transition-duration: 0.2s;
  }

  &:before {
    content: '';
    top: -7px;
  }

  &:after {
    content: '';
    top: 7px;
  }

  ${({
    theme: {
      colors: { white },
      media: { mediaMobile },
    },
    isActive,
  }) => css`
    transform: ${isActive && 'rotate(45deg);'};

    &,
    &:before,
    &:after {
      background: ${white};
    }

    @media (${mediaMobile}) {
      &,
      &:before,
      &:after {
        width: 13px;
      }

      &:before {
        top: -5px;
      }

      &:after {
        top: 5px;
      }
    }

    &:before {
      ${isActive && 'top: 0; transform: rotate(0);'}
    }

    &:after {
      ${isActive && 'top: 0; transform: rotate(90deg);'}
    }
  `};
`;
