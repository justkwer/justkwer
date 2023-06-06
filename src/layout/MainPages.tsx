import { Footer, Header } from '@containers';
import { FC, PropsWithChildren } from 'react';
import { GlobalStyles } from '@core/theme';
import {
  Background,
  LightModeProvider,
  Signature,
  ThemeProvider,
} from '@components';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <LightModeProvider>
    <ThemeProvider>
      <GlobalStyles />
      <Background />
      <Header />
      {children}
      <Footer />
      <Signature />
    </ThemeProvider>
  </LightModeProvider>
);
