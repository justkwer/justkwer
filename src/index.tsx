import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styled/globalStyles';
import App from './components/App/App';
import { LightModeProvider, ThemeProvider } from './components/Theme/Theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <StrictMode>
    <LightModeProvider>
      <ThemeProvider>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </LightModeProvider>
  </StrictMode>
);
