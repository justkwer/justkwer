import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import { ABOUT_SECTIONS, ABOUT_SECTIONS_COUNT } from './constants';
import { Scrolling } from './Scrolling';
import type { ScrollingProps } from './Scrolling/models';

export const About = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const lastScrollTime = useRef(0);
  const isFirstPage = currentSection === 0;
  const isLastPage = currentSection === ABOUT_SECTIONS_COUNT;

  const handleClick: ScrollingProps['callback'] = (isScrollUp) => {
    const now = Date.now();

    if (now - lastScrollTime.current < 1000) {
      return;
    }

    if (isFirstPage && isScrollUp) {
      return;
    }
    if (isLastPage && !isScrollUp) {
      return;
    }

    lastScrollTime.current = now;
    setCurrentSection((prevState) => prevState + (isScrollUp ? -1 : 1));
  };

  const handleScroll = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      handleClick(e.deltaY < 0);
    },
    [handleClick],
  );

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  return (
    <S.About>
      <Scrolling callback={handleClick} isScrollUp isHidden={isFirstPage} />
      {ABOUT_SECTIONS[currentSection]}
      <Scrolling callback={handleClick} isHidden={isLastPage} />
    </S.About>
  );
};
