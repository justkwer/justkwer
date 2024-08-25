import * as S from './styled';
import { Section } from '~styles';
import { Burger, Logo, Navigation, Theme } from '~components';

export const Header = () => (
  <S.Header>
    <Section>
      <Logo />
      <Navigation />
      <Theme />
      <Burger />
    </Section>
  </S.Header>
);
