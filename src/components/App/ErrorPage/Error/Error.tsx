import React from 'react';
import { H1 } from '../../../../styled/tags';

const Error = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <>
      <H1>{title}</H1>
      <p>{subtitle}</p>
    </>
  );
};

export default Error;
