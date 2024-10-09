import { SOCIAL } from './constants';
import * as S from './styled';
import Link from 'next/link';

export const Social = () => (
  <S.Social>
    <ul>
      {SOCIAL.map(({ name, svg, link }) => (
        <li key={name}>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            {svg}
          </Link>
        </li>
      ))}
    </ul>
  </S.Social>
);
