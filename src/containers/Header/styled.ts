import styled from 'styled-components';

export const HeaderStyled = styled.header`
  opacity: 0;
  animation: ${({ theme }) => theme.keyframes.animation.opacity}
    ${({ theme }) => theme.keyframes.duration[0]} forwards;
  animation-delay: ${({ theme }) => theme.keyframes.delay[2]};
  section {
    ${({ theme }) => theme.flex.row};
    justify-content: space-between;
  }
`;

export const NavStyled = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 50px;
`;
