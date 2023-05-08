export const enum PathsToPage {
  Main = '/',
  About = '/about',
  Projects = '/projects',
  NotFound = '/404',
  Education = PathsToPage.About + '/education',
  WhatIWant = PathsToPage.About + '/what-i-want',
  Watch = PathsToPage.About + '/watch',
  Contact = PathsToPage.About + '/contact',
}

export const navigationList = [
  { href: PathsToPage.About, text: 'About' },
  { href: PathsToPage.Projects, text: 'Projects' },
];

export const navigationAbout = [
  PathsToPage.Main,
  PathsToPage.Education,
  PathsToPage.WhatIWant,
  PathsToPage.Watch,
  PathsToPage.Contact,
];
