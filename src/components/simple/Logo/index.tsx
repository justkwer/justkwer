import { LogoStyled } from './styled';
import { Span } from '@core/theme';
import { PathsToPage } from '@core/constants';
import Ease from '@public/svg/ease.svg';

export const Logo = () => (
  <LogoStyled href={PathsToPage.Main}>
    <figure>
      <Ease />
      <figcaption>
        <Span>ease</Span>
      </figcaption>
    </figure>
  </LogoStyled>
);
