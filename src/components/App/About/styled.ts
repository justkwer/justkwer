import styled from 'styled-components';

export const AboutStyled = styled.main`
  section {
    ${({ theme }) => theme.flex.column}
    gap: 50px;
  }
`;
