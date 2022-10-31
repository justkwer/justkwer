import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  ul {
    display: flex;
    gap: 35px;

    li {
      list-style-type: none;

      a {
        color: ${({ theme }) => theme.colors.black};

        &:hover {
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active {
        color: ${({ theme }) => theme.colors.black};
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
        cursor: ${({ theme }) => theme.buttons.cursorD};
      }
    }
  }
`;
