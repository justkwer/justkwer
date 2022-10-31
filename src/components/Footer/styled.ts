import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.blue5};

  section {
    margin: auto;
    padding: 20px 40px;
    ${({ theme }) => theme.flex.colum}
    align-items: center;
    justify-content: center;
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
