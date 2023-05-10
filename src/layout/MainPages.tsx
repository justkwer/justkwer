import { Footer, Header } from '@containers';
import { FC, PropsWithChildren } from 'react';
import { GlobalStyles } from '@core/theme';
import {
  Background,
  LightModeProvider,
  Signature,
  ThemeProvider,
  useToggleLightMode,
} from '@components';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const { isLightMode } = useToggleLightMode();

  return (
    <LightModeProvider>
      <ThemeProvider>
        <GlobalStyles />
        <Header />
        {children}
        <Footer />
        <Signature />
        {isLightMode && <Background />}
      </ThemeProvider>
    </LightModeProvider>
  );
};
