import { HeaderStyled } from './styled';
import { Section } from '../../core/theme';
import { ChangeMode, Logo, Navigation, Burger } from '../../components';

export const Header = () => {
  return (
    <HeaderStyled>
      <Section>
        <Logo />
        <Navigation />
        <ChangeMode />
        <Burger />
      </Section>
    </HeaderStyled>
  );
};
