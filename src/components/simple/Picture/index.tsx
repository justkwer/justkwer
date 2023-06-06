import { H2 } from '@core/theme';
import { PictureStyled } from './styled';
import MainPicture from '@public/svg/main-picture.svg';
import Link from 'next/link';
import { PathsToPage } from '@core/constants';

export const Picture = () => (
  <PictureStyled>
    <MainPicture />
    <figcaption>
      <H2>is real</H2>
      <p>
        <a href="/Alex-Yakovlev.pdf" download="Alex Yakovlev.pdf">
          click
        </a>
        &ensp;to download or&ensp;
        <Link href={PathsToPage.About}>read</Link> about me
      </p>
    </figcaption>
  </PictureStyled>
);
