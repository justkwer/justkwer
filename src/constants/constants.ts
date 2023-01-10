export const navigationList = [
  { href: '/about', text: 'About' },
  { href: '/games', text: 'Games' },
];

export const navigationAbout = ['/', '/education', '/what-i-want', '/watch', '/contact'];

export const social = [
  {
    name: 'github',
    link: 'https://github.com/justkwer',
  },
  {
    name: 'linkendin',
    link: 'https://www.linkedin.com/in/kwer/',
  },
  {
    name: 'mail',
    link: 'mailto:justkwer@gmail.com',
  },
  {
    name: 'telegram',
    link: 'https://t.me/justkwer',
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/justkwer/',
  },
];

export const whatIWantToDo = [
  {
    title: 'Web Development',
    subtitle:
      'Responsive secured web apps and websites that gives you that edge over your competitors. All with SEO in mind to make your brand unique visible online and generate more customers + sales.',
    svg: 'web',
  },
  {
    title: 'Mobile Apps',
    subtitle:
      'Functional apps unique for each native platform that makes working that makes working with your customers very efficiently. Beauty, simplicity and speed are the key to success.',
    svg: 'mobile',
  },
  {
    title: 'Games',
    subtitle:
      "Unique browser and mobile games (maybe PC) with wide functionality and exciting gameplay. I know everything about games, because I've been playing all my life. My fantasy is limitless.",
    svg: 'games',
  },
];

export const mapProps: { coords: [number, number]; zoom: number } = {
  coords: [53.934155, 30.245244],
  zoom: 10,
};

export const loadingError = {
  title: 'Loading...',
  subtitle: 'Check your network connection...',
};
