import { DefaultTheme } from 'styled-components';
import { ThemeEnum } from '../interfaces';

import {
  opacityKeyframes,
  opacityKeyframesButton,
  pictureKeyframes,
  shineKeyframes,
  subtitleKeyframes,
  subtitleRotateKeyframes,
  titleKeyframes,
} from './keyframes';

export const theme = {
  colors: {
    primary: '#5836AC',
    secondary: '#8729b9',
    magenta: '#B21CC4',
    black: '#000000',
    grey: '#CBCBCB',
    dark: '#1A1A1A',
    indigo: '#6610f2',
    blue: '#0d6efd',
    pink: '#d63384',
    red: '#C14040',
    white: '#FFFFFF',
    yellow: '#FFFF00',
  },
  sizes: {
    container: {
      width: [1920, 1200, 992, 768, 576],
      padding: ['20px 40px', '15px 30px', '15px 20px', '10px 15px', '5px 10px'],
    },
  },
  media: {
    large: '(max-width: 1200px)',
    medium: '(max-width: 992px)',
    small: '(max-width: 768px)',
    mobile: '(max-width: 576px)',
  },
  fonts: {
    familyP: 'Nunito Sans, sans-serif',
    familyS: 'Equinox Bold, sans-serif',
    style: 'Bold',
    weight: '400',
    size: '22px',
    align: 'center',
    line: '33px',
    height: {
      primary: '110%',
      secondary: '130%',
    },
    spacing: {
      primary: '0.06em',
      secondary: '0.1em',
    },
  },
  buttons: {
    decoration: 'none',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    cursorD: 'default',
  },
  flex: {
    row: 'display: flex; justify-content: center;  align-items: center;',
    column:
      'display: flex; flex-direction: column; justify-content: center; align-items: center;',
  },
  filter: {
    primary: 'drop-shadow(20 0 2px rgba(24, 92, 255, 0.04))',
    secondary: 'drop-shadow(6 0 2px rgba(0, 43, 78, 0.15))',
  },
  border: {
    primary: '14px',
    secondary: '20px',
  },
  keyframes: {
    delay: ['0.5s', '0.75s', '1s'],
    duration: ['0.5s'],
    animation: {
      title: titleKeyframes,
      subtitle: subtitleKeyframes,
      subtitleRotate: subtitleRotateKeyframes,
      shine: shineKeyframes,
      opacity: opacityKeyframes,
      picture: pictureKeyframes,
      button: opacityKeyframesButton,
    },
  },
};

export const lightTheme: DefaultTheme = {
  ...theme,
  type: ThemeEnum.light,
};

export const darkTheme: DefaultTheme = {
  ...theme,
  type: ThemeEnum.dark,

  colors: {
    ...theme.colors,
    primary: theme.colors.magenta,
    white: theme.colors.dark,
    grey: theme.colors.black,
    magenta: theme.colors.blue,
  },
};
