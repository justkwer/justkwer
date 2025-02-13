import { BorderLeft, H2, P } from '~styles';

import books from '~images/webp/books.webp';
import { useDictionary } from '~hooks';
import { AboutMe } from '../AboutMe/styled';
import Image from 'next/image';
import * as S from './styled';

export const Experience = () => {
  const {
    EXPERIENCE: { EXPERIENCE, EXPERIENCE_TEXT, EXPERIENCES },
  } = useDictionary();

  return (
    <AboutMe>
      <figcaption>
        <H2>{EXPERIENCE}</H2>
        <BorderLeft />
        <P>{EXPERIENCE_TEXT}</P>
        <S.ExperienceList>
          {EXPERIENCES.map((experience) => (
            <S.ExperienceItem key={experience}>{`- ${experience};`}</S.ExperienceItem>
          ))}
        </S.ExperienceList>
      </figcaption>
      <Image src={books} alt="Books" />
    </AboutMe>
  );
};
