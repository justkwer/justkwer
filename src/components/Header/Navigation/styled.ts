import styled from 'styled-components';

export const NavigationUl = styled.ul`
  display: flex;
  gap: 35px;
`;

export const NavigationLi = styled.li`
  list-style-type: none;

  a {
    opacity: 0.7;
    font-size: 1.2em;
    position: relative;

    &:hover,
    &:hover::after {
      width: 100%;
      opacity: 1;
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
`;
