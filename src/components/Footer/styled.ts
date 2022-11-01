import styled from 'styled-components';

export const FooterStyled = styled.footer`
  section {
    ${({ theme }) => theme.flex.column};
    gap: 10px;

    div {
      ${({ theme }) => theme.flex.row};
      gap: 8px;
    }
  }
`;
