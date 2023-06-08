import styled from 'styled-components';
import { SvgLink } from '@core/theme';

export const SocialStyled = styled.nav`
  ul {
    ${({ theme }) => theme.flex.row};
    gap: 8px;

    svg {
      ${SvgLink};
    }
  }
`;
