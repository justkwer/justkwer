import { SvgLink } from '~styles';
import styled from '@emotion/styled';

export const Social = styled.nav`
  ul {
    ${({
      theme: {
        flex: { flexRow },
      },
    }) => flexRow};
    gap: 8px;

    svg {
      ${SvgLink};
    }
  }
`;
