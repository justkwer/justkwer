import { HeaderStyled } from './styled';
import { Section } from '@core/theme';
import { Burger, ChangeMode, Logo, Navigation } from '@components';

export const Header = () => (
  <HeaderStyled>
    <Section>
      <Logo />
      <Navigation />
      <ChangeMode />
      <Burger />
    </Section>
  </HeaderStyled>
);
