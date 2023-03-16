import styled from 'styled-components';

export const FooterStyled = styled.footer`
  opacity: 0;
  animation: ${({ theme }) => theme.keyframes.animation.opacity}
    ${({ theme }) => theme.keyframes.duration[0]} forwards;
  animation-delay: ${({ theme }) => theme.keyframes.delay[2]};

  section {
    ${({ theme }) => theme.flex.column};
    gap: 20px;

    span {
      font-family: ${({ theme }) => theme.fonts.familyS};
    }
  }
`;
