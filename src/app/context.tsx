'use client';
import type { WithChildren } from '~types';

import { globalStyles } from '~styles';

import { Global } from '@emotion/react';
import { ThemeProvider } from '~context';
import { onPrintSignature } from '~utils';
import { useEffect } from 'react';

export const Context = ({ children }: WithChildren) => {
  useEffect(() => {
    onPrintSignature();
  }, []);

  return (
    <ThemeProvider>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};
