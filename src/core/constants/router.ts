export const enum PathsToPage {
  Main = '/',
  About = '/about',
  Projects = '/projects',
  NotFound = '/404',
}

export const navigationList = [
  { href: PathsToPage.About, text: 'About' },
  { href: PathsToPage.Projects, text: 'Projects' },
];
