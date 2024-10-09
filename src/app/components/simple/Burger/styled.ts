import { hover } from '~styles';
import { type IsActiveType } from '~types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Burger = styled.div`
  position: relative;
  display: none;
  margin-left: 15px;
  width: 38px;
  height: 38px;

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
      width: 35px;
      height: 35px;
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
    width: 26px;
    height: 2px;
    border-radius: 1px;
    transition-duration: 0.2s;
  }

  &:before {
    content: '';
    top: -8px;
  }

  &:after {
    content: '';
    top: 8px;
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

      @media (${mediaMobile}) {
        width: 23px;
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
