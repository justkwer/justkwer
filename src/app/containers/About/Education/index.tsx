import { BorderLeft, H2, P } from '~styles';

import books from '~images/webp/books.webp';
import { useDictionary } from '~hooks';
import { AboutMe } from '../AboutMe/styled';
import Image from 'next/image';

export const Education = () => {
  const {
    EDUCATION: { EDUCATION, EDUCATION_TEXT },
  } = useDictionary();

  return (
    <AboutMe>
      <figcaption>
        <H2>{EDUCATION}</H2>
        <BorderLeft />
        <P>{EDUCATION_TEXT}</P>
      </figcaption>
      <Image src={books} alt="Books" />
    </AboutMe>
  );
};
