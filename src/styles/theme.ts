import {
  opacityKeyframes,
  opacityKeyframesButton,
  pictureKeyframes,
  shineKeyframes,
  subtitleKeyframes,
  subtitleRotateKeyframes,
  titleKeyframes,
} from './keyframes';
import { THEME_DARK, THEME_LIGHT } from '~constants';

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
    mediaLarge: '(max-width: 1200px)',
    mediaMedium: '(max-width: 992px)',
    mediaSmall: '(max-width: 768px)',
    mediaMobile: '(max-width: 576px)',
  },
  fonts: {
    familyPrimary: 'Nunito Sans, sans-serif',
    familySecondary: 'Equinox Bold, sans-serif',
    fontWeight: '400',
    fontSize: '14px',
  },
  flex: {
    flexRow: 'display: flex; justify-content: center;  align-items: center;',
    flexColumn:
      'display: flex; flex-direction: column; justify-content: center; align-items: center;',
  },
  keyframes: {
    keyframesDelay: ['0.5s', '0.75s', '1s'],
    keyframesDuration: ['0.5s'],
    animation: {
      keyframesTitle: titleKeyframes,
      keyframesSubtitle: subtitleKeyframes,
      keyframesSubtitleRotate: subtitleRotateKeyframes,
      keyframesShine: shineKeyframes,
      keyframesOpacity: opacityKeyframes,
      keyframesPicture: pictureKeyframes,
      keyframesButton: opacityKeyframesButton,
    },
  },
};

export const lightTheme = {
  ...theme,
  type: THEME_LIGHT,
};

export const darkTheme = {
  ...theme,
  type: THEME_DARK,

  colors: {
    ...theme.colors,
    primary: theme.colors.magenta,
    white: theme.colors.dark,
    grey: theme.colors.black,
    magenta: theme.colors.blue,
    yellow: theme.colors.magenta,
  },
};
