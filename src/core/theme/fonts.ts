import { css } from 'styled-components';
import { equinoxRegular, equinoxBold, nunitoRegular, nunitoBold } from '../../assets';

export const fonts = css`
  @font-face {
    font-family: 'Equinox Bold';
    font-weight: 400;
    src: url(${equinoxRegular}) format('woff2');
  }
  @font-face {
    font-family: 'Equinox Bold';
    font-weight: 700;
    src: url(${equinoxBold}) format('woff2');
  }
  @font-face {
    font-family: 'Nunito Sans';
    font-weight: 400;
    src: url(${nunitoRegular}) format('ttf');
  }
  @font-face {
    font-family: 'Nunito Sans';
    font-weight: 700;
    src: url(${nunitoBold}) format('ttf');
  }
`;
