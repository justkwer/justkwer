import styled from 'styled-components';
import { ActiveType } from '@core/types';

export const ScrollingStyled = styled.button<ActiveType>`
  opacity: 0;
  animation: ${({ theme }) => theme.keyframes.animation.button}
    ${({ theme }) => theme.keyframes.duration[0]} forwards;
  animation-delay: ${({ theme }) => theme.keyframes.delay[2]};
  ${({ theme }) => theme.flex.column};
  gap: 10px;

  svg {
    fill: ${({ theme }) => theme.colors.white};

    #arrow {
      transform: ${({ active }) =>
        active ? 'rotate(-90deg)' : 'rotate(90deg)'};
    }
  }

  #arrow {
    transform: ${({ active }) => (active ? 'rotate(-90deg)' : 'rotate(90deg)')};
  }

  @media (${({ theme }) => theme.media.mobile}) {
    gap: 0;

    #mouse {
      height: 25px;
    }
  }
`;
