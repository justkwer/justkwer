import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './core/theme';

import { LightModeProvider, ThemeProvider, Signature } from './components';
import { App } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <StrictMode>
    <LightModeProvider>
      <ThemeProvider>
        <GlobalStyles />
        <App />
        <Signature />
      </ThemeProvider>
    </LightModeProvider>
  </StrictMode>
);
