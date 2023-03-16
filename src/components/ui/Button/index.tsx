import React from 'react';
import { ButtonStyled } from './styled';
import { ButtonProp } from './prop';

export const Button = ({ text, onClick, disabled, children }: ButtonProp) => (
  <ButtonStyled onClick={onClick} disabled={disabled ?? false}>
    {text}
    {children}
  </ButtonStyled>
);
