import { ReactNode } from 'react';

export type MapProp = {
  coords: [number, number];
  zoom: number;
};

export type ButtonProp = {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
};
