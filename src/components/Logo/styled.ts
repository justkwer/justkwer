import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoStyled = styled(Link)`
  ${({ theme }) => theme.flex.row};
  align-items: center;
  gap: 5px;

  figure {
    img {
      max-width: 50px;
      max-height: 50px;
    }
  }

  figcaption {
    span {
      text-align: center;
      font-size: 1.6em;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
