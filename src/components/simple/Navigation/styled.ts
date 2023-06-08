import styled from 'styled-components';
import { hover } from '@core/theme';

export const NavigationStyled = styled.nav`
  margin-left: auto;

  ul {
    ${({ theme }) => theme.flex.row};
    gap: 35px;

    @media (${({ theme }) => theme.media.large}) {
      gap: 30px;
    }
    @media (${({ theme }) => theme.media.medium}) {
      gap: 25px;
    }
  }
`;

export const NavigationLiStyled = styled.li`
  a {
    ${hover};
    position: relative;
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.fonts.familyS};

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
      background: ${({ theme }) => theme.colors.white};
      transition: width 0.3s ease-out;
      width: 0;
    }

    &.active {
      border-bottom: 3px solid ${({ theme }) => theme.colors.white};
      cursor: ${({ theme }) => theme.buttons.cursorD};
      opacity: 1;
    }
  }

  @media (${({ theme }) => theme.media.large}) {
    a {
      font-size: 1.1rem;
    }
  }

  @media (${({ theme }) => theme.media.medium}) {
    a {
      font-size: 1rem;
    }
  }

  @media (${({ theme }) => theme.media.small}) {
    a {
      font-size: 0.9rem;
    }
  }

  @media (${({ theme }) => theme.media.mobile}) {
    a {
      font-size: 0.8rem;
    }
  }
`;
