import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.blue5};

  section {
    ${({ theme }) => theme.flex.row};
    gap: 50px;
  }
`;
