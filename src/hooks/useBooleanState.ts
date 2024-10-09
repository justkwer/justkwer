'use client';
import { useState } from 'react';

export const useBooleanState = (initialValue: boolean) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const onChangeIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const onCloseIsOpen = () => {
    setIsOpen(false);
  };

  return [isOpen, onChangeIsOpen, onCloseIsOpen] as const;
};
