import React, { useEffect, useState } from 'react';
import { H1, Section } from '../../core/theme';
import { AboutStyled } from './styled';
import { navigationAbout } from '../../core/constants';
import { useNavigate } from 'react-router-dom';
import { AboutPage } from '../../routes';
import { Scrolling } from '../../components/simple';

const About = () => {
  const [page, setPage] = useState(0);
  const navLength = navigationAbout.length - 1;
  const navigate = useNavigate();

  const handleClick = (e: boolean) => {
    const newPage = e ? page - 1 : page + 1;
    if (newPage <= navLength && newPage >= 0) {
      setPage(newPage);
      navigate(`/about${navigationAbout[newPage]}`);
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
    <AboutStyled>
      <Section>
        {page !== 0 && <Scrolling click={handleClick} up={true} />}
        <H1>Alex Moore</H1>
        <AboutPage />
        {page !== navLength && <Scrolling click={handleClick} up={false} />}
      </Section>
    </AboutStyled>
  );
};

export default About;
