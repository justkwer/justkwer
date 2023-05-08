import { BackgroundStyled } from './styled';
import { Stars } from '../../';
import Image from 'next/image';

export const Background = () => (
  <BackgroundStyled>
    <Image src="/images/background" alt="background" />
    <Stars />
  </BackgroundStyled>
);
