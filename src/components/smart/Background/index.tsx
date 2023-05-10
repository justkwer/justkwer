import { BackgroundStyled } from './styled';
import Image from 'next/image';
import background from '@public/image/background.webp';

export const Background = () => (
  <BackgroundStyled>
    <Image src={background} alt="background" />
  </BackgroundStyled>
);
