import styled from 'styled-components';
import { hover } from '@core/theme';
import { ActiveType } from '@core/types';

export const BurgerStyled = styled.div`
  position: relative;
  display: none;
  margin-left: 15px;
  width: 38px;
  height: 38px;

  @media (${({ theme }) => theme.media.mobile}) {
    width: 35px;
    height: 35px;
  }

  & > button {
    ${hover};
    width: 100%;
    height: 100%;
    position: relative;
    padding: 5.5px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.magenta},
      ${({ theme }) => theme.colors.primary}
    );
    border-radius: 50%;
  }

  @media (${({ theme }) => theme.media.small}) {
    display: block;
  }
`;

export const BurgerBtnStyled = styled.span<ActiveType>`
  &,
  &:before,
  &:after {
    display: block;
    position: absolute;
    width: 26px;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 1px;
    transition-duration: 0.2s;

    @media (${({ theme }) => theme.media.mobile}) {
      width: 23px;
    }
  }

  transform: ${({ active }) => active && 'rotate(45deg);'};

  &:before {
    content: '';
    top: -8px;
    ${({ active }) => active && 'top: 0; transform: rotate(0);'}
  }

  &:after {
    content: '';
    top: 8px;
    ${({ active }) => active && 'top: 0; transform: rotate(90deg);'}
  }
`;

export const BurgerWrapStyled = styled.div<ActiveType>`
  position: absolute;
  width: max-content;
  top: 50px;
  right: 0;
  transform: ${({ active }) =>
    active ? 'translateX(0);' : 'translateX(150%);'};
  display: block;
  padding: ${({ theme }) => theme.sizes.container.padding[4]};
  transition: transform 0.3s ease-in-out;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 10px;

  & > nav {
    ul {
      ${({ theme }) => theme.flex.column};
      align-items: end;
    }
  }
`;
