import { MouseEvent } from 'react';

export type MapProp = {
  coords: [number, number];
  zoom: number;
};

export type ButtonProp = {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export type ErrorPageProp = {
  isError?: boolean;
  title?: string;
  subtitle?: string;
};

export type ErrorMessageProp = {
  title: string;
  subtitle: string;
};

export type ActiveType = {
  active: boolean;
};

export interface ScrollingProps {
  click: (e: boolean) => void;
  up: boolean;
}

export type WantGeneratorProp = {
  title: string;
  subtitle: string;
  svg: JSX.Element;
};

export type MouseEventType = (e: MouseEvent<HTMLElement>) => void;

export type MouseEventClick = {
  click: MouseEventType;
};

export type WindowSizeState = {
  width: undefined | number;
  height: undefined | number;
};

export type Star = (time: number) => void;
