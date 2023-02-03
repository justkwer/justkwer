import React from 'react';
import { YouTubeStyled } from './styled';

export const YouTube = () => (
  <YouTubeStyled
    width="560"
    height="315"
    src="https://www.youtube.com/embed/X-P1GJphfEc"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);
