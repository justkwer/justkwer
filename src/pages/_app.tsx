import { Background, LightModeProvider, ThemeProvider } from '@components';
import { Footer, Header } from '@containers';
import { GlobalStyles } from '@core/theme';
import { signature } from '@core/utils';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    signature();
  }, []);

  return (
    <>
      <Head>
        <title>Alex</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <LightModeProvider>
        <ThemeProvider>
          <GlobalStyles />
          <Background />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </LightModeProvider>
    </>
  );
}
