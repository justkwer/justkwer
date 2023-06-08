import { social } from '@core/constants';
import { SocialStyled } from './styled';
import Link from 'next/link';

export const Social = () => (
  <SocialStyled>
    <ul>
      {social.map(({ name, svg, link }) => (
        <li key={name}>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            {svg}
          </Link>
        </li>
      ))}
    </ul>
  </SocialStyled>
);
