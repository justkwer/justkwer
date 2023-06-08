import { Keyframes } from 'styled-components';

export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export interface InterfaceTheme {
  colors: {
    primary: string;
    secondary: string;
    magenta: string;
    black: string;
    grey: string;
    dark: string;
    indigo: string;
    blue: string;
    pink: string;
    red: string;
    white: string;
    yellow: string;
  };
  sizes: {
    container: {
      width: number[];
      padding: string[];
    };
  };
  media: {
    large: string;
    medium: string;
    small: string;
    mobile: string;
  };
  fonts: {
    familyP: string;
    familyS: string;
    style: string;
    weight: string;
    size: string;
    align: string;
    line: string;
    height: {
      primary: string;
      secondary: string;
    };
    spacing: {
      primary: string;
      secondary: string;
    };
  };
  buttons: {
    decoration: string;
    cursor: string;
    border: string;
    outline: string;
    cursorD: string;
  };
  flex: {
    row: string;
    column: string;
  };
  filter: {
    primary: string;
    secondary: string;
  };
  border: {
    primary: string;
    secondary: string;
  };
  keyframes: {
    delay: string[];
    duration: string[];
    animation: {
      title: Keyframes;
      subtitle: Keyframes;
      subtitleRotate: Keyframes;
      shine: Keyframes;
      opacity: Keyframes;
      picture: Keyframes;
      button: Keyframes;
    };
  };
}
