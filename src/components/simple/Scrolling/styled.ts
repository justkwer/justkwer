import styled from 'styled-components';

export const ScrollingStyled = styled.button<{ up: boolean }>`
  opacity: 0;
  animation: ${({ theme }) => theme.keyframes.animation.button}
    ${({ theme }) => theme.keyframes.duration[0]} forwards;
  animation-delay: ${({ theme }) => theme.keyframes.delay[2]};
  cursor: pointer;
  ${({ theme }) => theme.flex.column};
  gap: 10px;

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  #arrow {
    transform: ${({ up }) => (up ? 'rotate(-90deg)' : 'rotate(90deg)')};
  }
`;
