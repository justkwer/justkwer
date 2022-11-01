import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoStyled = styled(Link)`
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
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
