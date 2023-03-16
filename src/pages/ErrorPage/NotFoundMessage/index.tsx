import React from 'react';
import { H1, P } from '../../../core/theme';
import { config } from './config';

export const NotFoundMessage = () => {
  const { title, subtitle } = config;
  return (
    <>
      <H1>{title}</H1>
      <P>{subtitle}</P>
    </>
  );
};
