import styled from 'styled-components';
import { Svg } from '@core/theme';

export const WantGeneratorStyled = styled.figure`
  ${({ theme }) => theme.flex.column};
  gap: 20px;
  max-width: 300px;

  svg {
    ${Svg};
  }

  h3 {
    text-align: center;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.white};
  }

  @media (${({ theme }) => theme.media.large}) {
    h3,
    h4 {
      font-size: 0.9rem;
    }
  }

  @media (${({ theme }) => theme.media.small}) {
    gap: 10px;
    flex-direction: row;

    svg {
      min-width: 32px;
    }

    h3 {
      text-align: start;
    }

    h3,
    h4 {
      font-size: 0.8rem;
    }
  }

  @media (${({ theme }) => theme.media.mobile}) {
    h3,
    h4 {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 450px) {
    h3,
    h4 {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 400px) {
    h3,
    h4 {
      font-size: 0.5rem;
    }
  }
`;
