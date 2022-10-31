import { ReactNode } from 'react';

export interface ButtonModal {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
}
