import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.blue5};

  section {
    ${({ theme }) => theme.flex.column}
    gap: 10px;

    div {
      ${({ theme }) => theme.flex.row}
      gap: 8px;
    }

    p {
      font-size: 0.8em;
    }
  }
`;
