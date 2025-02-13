import { AboutMe } from './AboutMe';
import { WhatIWant } from './WhatIWant';
import { WatchMe } from './WatchMe';
import { Experience } from './Experience';

export const ABOUT_SECTIONS = [
  <AboutMe key="About Me" />,
  <Experience key="Education" />,
  <WhatIWant key="What I Want" />,
  <WatchMe key="Watch Me" />,
];

export const ABOUT_SECTIONS_COUNT = ABOUT_SECTIONS.length - 1;
