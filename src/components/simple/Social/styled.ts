import styled from 'styled-components';

export const SocialStyled = styled.nav`
  ul {
    ${({ theme }) => theme.flex.row};
    gap: 8px;
  }
`;
