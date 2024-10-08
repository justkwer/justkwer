import { AboutMe } from '../AboutMe/styled';
import { BorderLeft, H2, P } from '~styles';
import { YouTube } from './YouTube';
import { useDictionary } from '~hooks';

export const WatchMe = () => {
  const {
    WATCH_ME: { WATCH_ME, WATCH_ME_TEXT },
  } = useDictionary();
  return (
    <AboutMe>
      <YouTube />
      <figcaption>
        <H2>{WATCH_ME}</H2>
        <BorderLeft />
        <P>{WATCH_ME_TEXT}</P>
      </figcaption>
    </AboutMe>
  );
};
