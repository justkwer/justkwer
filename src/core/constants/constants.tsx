import { MapProp } from '@core/types';
import Telegram from '@public/svg/telegram.svg';
import GitHub from '@public/svg/github.svg';
import Linkendin from '@public/svg/linkendin.svg';
import Mail from '@public/svg/mail.svg';
import Instagram from '@public/svg/instagram.svg';
import Web from '@public/svg/web.svg';
import Mobile from '@public/svg/mobile.svg';
import Games from '@public/svg/games.svg';
import { AboutMe, ContactMe, Education, WatchMe, WhatIWant } from '@components';
import { getMyLearningFoolYears } from '@core/utils';

export const social = [
  {
    name: 'github',
    svg: <GitHub />,
    link: 'https://github.com/justkwer',
  },
  {
    name: 'linkendin',
    svg: <Linkendin />,
    link: 'https://www.linkedin.com/in/kwer/',
  },
  {
    name: 'mail',
    svg: <Mail />,
    link: 'mailto:justkwer@gmail.com',
  },
  {
    name: 'telegram',
    svg: <Telegram />,
    link: 'https://t.me/justkwer',
  },
  {
    name: 'instagram',
    svg: <Instagram />,
    link: 'https://www.instagram.com/justkwer/',
  },
];

export const whatIWantToDo = [
  {
    title: 'Web Development',
    subtitle:
      'Responsive secured web apps and websites that gives you that edge over your competitors. All with SEO in mind to make your brand unique visible online and generate more customers + sales.',
    svg: <Web />,
  },
  {
    title: 'Mobile Apps',
    subtitle:
      'Functional apps unique for each native platform that makes working that makes working with your customers very efficiently. Beauty, simplicity and speed are the key to success.',
    svg: <Mobile />,
  },
  {
    title: 'Games',
    subtitle:
      "Unique browser and mobile games (maybe PC) with wide functionality and exciting gameplay. I know everything about games, because I've been playing all my life. My fantasy is limitless.",
    svg: <Games />,
  },
];

export const mapProps: MapProp = {
  coords: [53.934155, 30.245244],
  zoom: 10,
};

export const loadingError = {
  title: 'Loading...',
  subtitle: 'Check your network connection...',
};

export const notFoundMessage = {
  title: 'Oops! Page not found.',
  subtitle:
    " You must have picked the wrong door because i haven't been able to lay my eye on the page you've been searching for.",
};

export const aboutContent = [
  <AboutMe key="about" />,
  <Education key="education" />,
  <WhatIWant key="whatIWant" />,
  <WatchMe key="watchMe" />,
  <ContactMe key="contactMe" />,
];

export const aboutMe = `Hi there! My name is Alex. I’m frontend developer with ${getMyLearningFoolYears()} years experience. I usually write in React and Next, I also study Three.js (I have a lot of experience in 3D modeling). I am interested in information technologies and how they transform our lives. I'd like to become a website developer or create games. Open to remote work offers or ready to consider moving.`;

export const education =
  'Throughout my life I have had to learn a lot. If we talk about information technologies related to the Web, these are: HTML, CSS, JavaScript, TypeScript, Git, React, Redux (Saga, RTK), Styled-components, Next.js, REST API, Three.js. I am currently studying game engine.';

export const watchMe =
  'If you do not trust the &quot;dry text&quot; and in order to recognize a person you need to look at him, then especially for you I recorded a short video about me. It was so cold that my tongue stuttered and my mind forgot the words.';
