import React, { FC, PropsWithChildren } from 'react';
import { ButtonStyled } from './styled';
import { ButtonProp } from '@core/types';

export const Button: FC<PropsWithChildren<ButtonProp>> = ({
  text,
  onClick,
  disabled,
  children,
}) => (
  <ButtonStyled onClick={onClick} disabled={disabled ?? false}>
    {text}
    {children}
  </ButtonStyled>
);
