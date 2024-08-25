'use client';
import type { WithChildren } from '~types';

import { globalStyles } from '~styles';

import { Global } from '@emotion/react';
import { ThemeProvider } from '~context';

export const Context = ({ children }: WithChildren) => (
  <ThemeProvider>
    <Global styles={globalStyles} />
    {children}
  </ThemeProvider>
);
