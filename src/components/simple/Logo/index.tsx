import { LogoStyled } from './styled';
import { Span } from '@core/theme';
import Image from 'next/image';
import { PathsToPage } from '@core/constants';

export const Logo = () => (
  <LogoStyled href={PathsToPage.Main}>
    <figure>
      <Image src="/image/ease" alt="ease" width={50} height={50} />
      <figcaption>
        <button>
          <Span>ease</Span>
        </button>
      </figcaption>
    </figure>
  </LogoStyled>
);
