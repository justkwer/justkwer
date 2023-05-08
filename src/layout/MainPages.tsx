import { Footer, Header } from '@containers';
import { FC, PropsWithChildren } from 'react';
import { GlobalStyles, Section } from '@core/theme';
import { LightModeProvider, Signature, ThemeProvider } from '@components';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <LightModeProvider>
    <ThemeProvider>
      <GlobalStyles />
      <Header />
      <main>
        <Section>{children}</Section>
      </main>
      <Footer />
      <Signature />
    </ThemeProvider>
  </LightModeProvider>
);
