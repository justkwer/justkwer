import styled from 'styled-components';

export const MainStyled = styled.main`
  section {
    ${({ theme }) => theme.flex.row};
    gap: 100px;
  }
`;
