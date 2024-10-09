import { type MouseEvent, type ReactElement, type ReactNode } from 'react';

export type WithChildren<T = unknown> = {
  children?: ReactNode | ReactElement;
} & T;

export type IsActiveType = {
  isActive?: boolean;
};

export type CallbackType = {
  callback?: () => void;
};

export type MouseEventType<T> = (e: MouseEvent<T>) => void;

export type ModalType = Required<CallbackType>;

export type ScrolledType = {
  scrolled: boolean;
};
