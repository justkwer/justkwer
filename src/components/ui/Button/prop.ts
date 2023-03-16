import { ReactNode } from 'react';

export type ButtonProp = {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
};
