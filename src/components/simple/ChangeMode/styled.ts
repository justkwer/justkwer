import styled from 'styled-components';
import { SvgLink } from '@core/theme';

export const ChangeModeStyled = styled.button`
  & > svg {
    ${SvgLink};
  }

  margin-left: 35px;

  @media (${({ theme }) => theme.media.large}) {
    margin-left: 30px;
  }

  @media (${({ theme }) => theme.media.medium}) {
    margin-left: 25px;
  }

  @media (${({ theme }) => theme.media.medium}) {
    margin-left: auto;
  }
`;
