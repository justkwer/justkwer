import styled from 'styled-components';
import Link from 'next/link';
import { hover } from '@core/theme';

export const LogoStyled = styled(Link)`
  figure {
    ${hover};

    ${({ theme }) => theme.flex.row};
    align-items: center;
    gap: 5px;

    img {
      max-width: 50px;
      max-height: 50px;
    }

    button {
      span {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.grey};
      }
    }
  }

  @media (${({ theme }) => theme.media.large}) {
    figure {
      img {
        max-width: 45px;
        max-height: 45px;
      }

      button {
        span {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (${({ theme }) => theme.media.medium}) {
    figure {
      img {
        max-width: 40px;
        max-height: 40px;
      }

      button {
        span {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media (${({ theme }) => theme.media.small}) {
    figure {
      img {
        max-width: 35px;
        max-height: 35px;
      }

      button {
        span {
          font-size: 1.3rem;
        }
      }
    }
  }

  @media (${({ theme }) => theme.media.mobile}) {
    figure {
      img {
        max-width: 30px;
        max-height: 30px;
      }

      button {
        span {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
