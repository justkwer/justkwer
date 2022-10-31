import styled from 'styled-components';

export const LogoStyled = styled.div`
  ${({ theme }) => theme.flex.row};
  align-items: center;
  gap: 5px;

  figure {
    img {
      max-width: 40px;
      max-height: 40px;
    }
  }

  figcaption {
    h2 {
      text-align: center;
      cursor: default;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
