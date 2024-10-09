import { type ButtonProps } from './models';
import { type FC } from 'react';
import * as S from './styled';

export const Button: FC<ButtonProps> = ({ label, callback, ...rest }) => {
  const { type } = rest;

  return (
    <S.Button disabled={!callback && type !== 'submit'} onClick={callback} {...rest}>
      {label}
    </S.Button>
  );
};
