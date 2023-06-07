import { useCallback, useEffect, useState } from 'react';
import { H1, Section } from '@core/theme';
import { AboutStyled } from './styled';

import {
  AboutMe,
  ContactMe,
  Education,
  Scrolling,
  WatchMe,
  WhatIWant,
} from '@components';

import { MainLayout } from '@layout';

const aboutContent = [
  <AboutMe key="about" />,
  <Education key="education" />,
  <WhatIWant key="whatIWant" />,
  <WatchMe key="watchMe" />,
  <ContactMe key="contactMe" />,
];

const navLength = aboutContent.length - 1;

const About = () => {
  const [page, setPage] = useState(0);
  const [disable, setDisable] = useState(false);

  const handleClick = useCallback(
    (e: boolean) => {
      if (disable) return;
      setDisable(true);
      const newPage = e ? page - 1 : page + 1;
      if (newPage <= navLength && newPage >= 0) setPage(newPage);
      setTimeout(() => setDisable(false), 1000);
    },
    [page, disable],
  );

  const handleScroll = useCallback(
    (e: WheelEvent) => handleClick(e.deltaY < 0),
    [handleClick],
  );

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  return (
    <MainLayout>
      <AboutStyled page={page === 0}>
        <Section>
          <Scrolling click={handleClick} up={true} />
          <H1>Alex Moore</H1>
          {aboutContent[page]}
          {page !== navLength && <Scrolling click={handleClick} up={false} />}
        </Section>
      </AboutStyled>
    </MainLayout>
  );
};

export default About;