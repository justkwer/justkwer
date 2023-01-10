import React, { useEffect, useState } from 'react';
import { H1, Section } from '../../../styled/tags';
import { AboutStyled } from './styled';
import MyRoutes from './MyRoutes/MyRoutes';
import Scrolling from './Scrolling/Scrolling';
import { navigationAbout } from '../../../constants/constants';
import { useNavigate } from 'react-router-dom';

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

  const handleScroll = (e: WheelEvent) => handleClick(e.deltaY > 0);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  });

  return (
    <AboutStyled>
      <Section>
        <Scrolling click={handleClick} up={true} page={page} />
        <H1>Alex Moore</H1>
        <MyRoutes />
        <Scrolling click={handleClick} up={false} page={page} />
      </Section>
    </AboutStyled>
  );
};

export default About;
