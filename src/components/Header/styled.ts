import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  section {
    ${({ theme }) => theme.flex.row};
    justify-content: space-between;
  }
`;

export const NavStyled = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 50px;
`;
