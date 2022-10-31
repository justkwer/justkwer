import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.blue5};

  section {
    padding: 10px 40px;
    ${({ theme }) => theme.flex.row};
    gap: 50px;
    align-items: center;
    justify-content: center;
  }
`;
