import { H1 } from '@core/theme';
import { ErrorMessageProp } from '@core/types';
import { FC } from 'react';

export const ErrorMessage: FC<ErrorMessageProp> = ({ title, subtitle }) => {
  return (
    <>
      <H1>{title}</H1>
      <p>{subtitle}</p>
    </>
  );
};
