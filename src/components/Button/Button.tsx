import React from 'react';
import { ButtonStyled } from './styled';
import { ButtonModal } from './Button.modal';

const Button = ({ text, onClick, disabled, children }: ButtonModal) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled ?? false}>
      {text}
      {children}
    </ButtonStyled>
  );
};

export default Button;
