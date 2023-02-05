import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../../core/theme/theme';

const LightModeContext = createContext({
  isLightMode: true,
  toggleLightMode: () => {},
});

const LightModeProvider = ({ children }: { children: ReactNode }) => {
  const [isLightMode, setLightMode] = useState(true);
  const toggleLightMode = () => setLightMode(!isLightMode);

  return (
    <LightModeContext.Provider value={{ isLightMode, toggleLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
};

const useToggleLightMode = () => useContext(LightModeContext);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { isLightMode } = useToggleLightMode();

  return <SCThemeProvider theme={isLightMode ? lightTheme : darkTheme}>{children}</SCThemeProvider>;
};

export { ThemeProvider, useToggleLightMode, LightModeProvider };
