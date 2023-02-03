import React from 'react';
import { H1 } from '../../../core/theme';
import { ErrorMessageProp } from './Prop';

export const ErrorMessage = ({ title, subtitle }: ErrorMessageProp) => {
  return (
    <>
      <H1>{title}</H1>
      <p>{subtitle}</p>
    </>
  );
};
