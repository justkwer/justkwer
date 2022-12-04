import React from 'react';
import { H1, Section } from '../../../styled/tags';
import { AboutStyled } from './styled';
import AboutMe from './AboutMe/AboutMe';
import Education from './Education/Education';
import WhatIWant from './WhatIWant/WhatIWant';
import WatchMe from './WatchMe/WatchMe';
import ContactMe from './ContactMe/ContactMe';

const About = () => {
  return (
    <AboutStyled>
      <Section>
        <H1>Alex Moore</H1>
        <AboutMe />
        <Education />
        <WatchMe />
        <WhatIWant />
        <ContactMe />
      </Section>
    </AboutStyled>
  );
};

export default About;
