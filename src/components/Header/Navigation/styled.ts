import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  ul {
    display: flex;
    gap: 35px;

    li {
      list-style-type: none;

      a {
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.8;

        &:hover {
          color: ${({ theme }) => theme.colors.white};
          opacity: 1;
        }

        &.active {
          color: ${({ theme }) => theme.colors.white};
          border-bottom: 2px solid ${({ theme }) => theme.colors.white};
          cursor: ${({ theme }) => theme.buttons.cursorD};
          opacity: 1;
        }
      }
    }
  }
`;
