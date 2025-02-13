'use client';
import type { WithChildren } from '~types';
import { Context } from './context';

import * as S from './styled';

import 'styles/variables.css';
import { useDictionary } from '~hooks';
import { Background } from '~components';
import { Footer, Header } from '~containers';

export default function RootLayout({ children }: WithChildren) {
  const {
    META: { ALEX_YAKOVLEV },
  } = useDictionary();

  return (
    <html lang="ru">
      <head>
        <title>{ALEX_YAKOVLEV}</title>
      </head>
      <Context>
        <S.Body>
          <Header />
          <S.Main>{children}</S.Main>
          <Footer />
          <Background />
        </S.Body>
      </Context>
    </html>
  );
}
