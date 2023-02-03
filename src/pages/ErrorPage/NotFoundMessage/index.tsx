import React from 'react';
import { H1 } from '../../../core/theme';
import { config } from './config';

export const NotFoundMessage = () => {
  const { title, subtitle } = config;
  return (
    <>
      <H1>{title}</H1>
      <p>{subtitle}</p>
    </>
  );
};
