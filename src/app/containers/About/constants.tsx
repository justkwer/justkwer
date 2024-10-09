import { AboutMe } from './AboutMe';
import { Education } from './Education';
import { WhatIWant } from './WhatIWant';
import { WatchMe } from './WatchMe';

export const ABOUT_SECTIONS = [
  <AboutMe key="About Me" />,
  <Education key="Education" />,
  <WhatIWant key="What I Want" />,
  <WatchMe key="Watch Me" />,
];

export const ABOUT_SECTIONS_COUNT = ABOUT_SECTIONS.length - 1;
