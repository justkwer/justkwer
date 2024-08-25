import type { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  label: string;
  callback?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;
