import React, { useEffect, useState } from 'react';
import { H1, Section } from '@core/theme';
import { AboutStyled } from './styled';
import { navigationAbout } from '@core/constants';
import { Scrolling } from '@components';
import { AboutLayout } from '@layout';

const About = () => {
  const [page, setPage] = useState(0);
  const navLength = navigationAbout.length - 1;

  const handleClick = (e: boolean) => {
    const newPage = e ? page - 1 : page + 1;
    if (newPage <= navLength && newPage >= 0) {
      setPage(newPage);
    }
  };

  const handleScroll = (e: WheelEvent) => handleClick(e.deltaY < 0);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  });

  return (
    <AboutStyled page={page === 0}>
      <Section>
        <Scrolling click={handleClick} up={true} />
        <H1>Alex Moore</H1>
        <AboutLayout />
        {page !== navLength && <Scrolling click={handleClick} up={false} />}
      </Section>
    </AboutStyled>
  );
};

export default About;