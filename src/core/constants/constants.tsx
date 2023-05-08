import { MapProp } from '@core/types';
import {
  Games,
  Github,
  Instagram,
  Linkendin,
  Mail,
  Mobile,
  Telegram,
  Web,
} from '@components';

export const social = [
  {
    name: 'github',
    svg: () => <Github />,
    link: 'https://github.com/justkwer',
  },
  {
    name: 'linkendin',
    svg: () => <Linkendin />,
    link: 'https://www.linkedin.com/in/kwer/',
  },
  {
    name: 'mail',
    svg: () => <Mail />,
    link: 'mailto:justkwer@gmail.com',
  },
  {
    name: 'telegram',
    svg: () => <Telegram />,
    link: 'https://t.me/justkwer',
  },
  {
    name: 'instagram',
    svg: () => <Instagram />,
    link: 'https://www.instagram.com/justkwer/',
  },
];

export const whatIWantToDo = [
  {
    title: 'Web Development',
    subtitle:
      'Responsive secured web apps and websites that gives you that edge over your competitors. All with SEO in mind to make your brand unique visible online and generate more customers + sales.',
    svg: () => <Web />,
  },
  {
    title: 'Mobile Apps',
    subtitle:
      'Functional apps unique for each native platform that makes working that makes working with your customers very efficiently. Beauty, simplicity and speed are the key to success.',
    svg: () => <Mobile />,
  },
  {
    title: 'Games',
    subtitle:
      "Unique browser and mobile games (maybe PC) with wide functionality and exciting gameplay. I know everything about games, because I've been playing all my life. My fantasy is limitless.",
    svg: () => <Games />,
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
