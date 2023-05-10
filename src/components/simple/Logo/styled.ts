import styled from 'styled-components';
import Link from 'next/link';
import { hover } from '@core/theme';

export const LogoStyled = styled(Link)`
  figure {
    ${hover};

    ${({ theme }) => theme.flex.row};
    align-items: center;
    gap: 5px;

    svg {
      width: 50px;
      height: 50px;
    }

    span {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.grey};
    }
  }

  @media (${({ theme }) => theme.media.large}) {
    figure {
      svg {
        width: 45px;
        height: 45px;
      }

      span {
        font-size: 1.5rem;
      }
    }
  }

  @media (${({ theme }) => theme.media.medium}) {
    figure {
      svg {
        width: 40px;
        height: 40px;
      }

      span {
        font-size: 1.4rem;
      }
    }
  }

  @media (${({ theme }) => theme.media.small}) {
    figure {
      svg {
        width: 35px;
        height: 35px;
      }

      span {
        font-size: 1.3rem;
      }
    }
  }

  @media (${({ theme }) => theme.media.mobile}) {
    figure {
      svg {
        width: 30px;
        height: 30px;
      }

      span {
        font-size: 1.2rem;
      }
    }
  }
`;
