import { DefaultTheme } from 'styled-components';

export const theme = {
  colors: {
    primary: '#185CFF',
    secondary: '#002B4E',
    tertiary: '#F0F9FF',
    black: '#292D33',
    grey: '#9497A1',
    blue1: '#194060',
    blue2: '#607D94',
    blue3: '#C9DCEC',
    blue4: '#467DFF',
    blue5: '#F1F6FA',
    red: '#C14040',
    white: '#FFFFFF',
  },
  sizes: {
    container: {
      width: [1200, 960, 720, 540, 320],
      padding: ['20px 40px', '0', '0', '0'],
    },
  },
  media: {
    extraLarge: '(max-width: 1110px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
    mobile: '(max-width: 360px)',
  },
  fonts: {
    familyP: 'Manrope, sans-serif',
    familyS: 'Open Sans, sans-serif',
    style: 'Bold',
    weight: '400',
    size: '22px',
    align: 'center',
    line: '33px',
    height: {
      primary: '110%',
      secondary: '160%',
    },
    spacing: {
      primary: '-1.5%',
      secondary: '-1%',
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
    column: 'display: flex; flex-direction: column; justify-content: center; align-items: center;',
  },
  filter: {
    primary: 'drop-shadow(20 0 2px rgba(24, 92, 255, 0.04))',
    secondary: 'drop-shadow(6 0 2px rgba(0, 43, 78, 0.15))',
  },
  border: {
    primary: '14px',
    secondary: '20px',
  },
};

export const lightTheme: DefaultTheme = {
  ...theme,
  type: 'light',
};

export const darkTheme: DefaultTheme = {
  ...theme,
  type: 'dark',

  colors: {
    ...theme.colors,
    primary: theme.colors.black,
  },
};
