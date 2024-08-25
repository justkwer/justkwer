'use client';
import { createContext, type FC, useMemo } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from '~styles';
import type { WithChildren } from '~types';
import { type ThemeContextType } from './models';
import { useBooleanState } from '~hooks';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: FC<WithChildren> = ({ children }) => {
  const [isLightTheme, toggleIsLightTheme] = useBooleanState(true);

  const providerValue = useMemo(
    () => ({ isLightTheme, toggleIsLightTheme }),
    [isLightTheme, toggleIsLightTheme],
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      <EmotionThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
