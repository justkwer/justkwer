import { Section, Span } from '@core/theme';
import { FooterStyled } from './styled';
import { Social } from '@components';

export const Footer = () => (
  <FooterStyled>
    <Section>
      <Social />
      <Span>© 2022 Alex Moore</Span>
    </Section>
  </FooterStyled>
);
