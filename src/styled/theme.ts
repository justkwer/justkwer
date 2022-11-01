import { DefaultTheme } from 'styled-components';

export const theme = {
  colors: {
    primary: '#5836AC',
    secondary: '#8729b9',
    magenta: '#B21CC4',
    black: '#292D33',
    grey: '#CBCBCB',
    dark: '#1A1A1A',
    indigo: '#6610f2',
    blue: '#0d6efd',
    pink: '#d63384',
    red: '#C14040',
    white: '#FFFFFF',
    background: 'linear-gradient(135deg, #B21CC4 0%, #5836AC 100%)',
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
    familyP: 'Equinox Bold, sans-serif',
    familyS: 'Nunito Sans, sans-serif',
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
      primary: '0.06em',
      secondary: '7em',
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
    primary: theme.colors.magenta,
    white: theme.colors.dark,
    gray: theme.colors.black,
    magenta: theme.colors.blue,
  },
};
