'use client';
import * as S from './styled';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from '~hooks';
import background from '~images/webp/background.webp';
import Image from 'next/image';
import { getRandom } from '~utils';
import type { WindowSizeType } from './models';

export const Background = () => {
  const { isLightTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [windowSize, setWindowSize] = useState<WindowSizeType>({
    width: undefined,
    height: undefined,
  });

  const { width, height } = windowSize;

  const resize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, [setWindowSize]);

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [resize]);

  useEffect(() => {
    const canvas = canvasRef?.current?.getContext('2d');
    if (!canvas || !width || !height) return;
    canvas.fillStyle = 'white';

    let stars = new Array(Math.floor(width / 10)).fill('').map(() => ({
      x: getRandom(0, width),
      y: getRandom(0, height),
      speed: 0.1,
    }));

    const printStar = () => {
      canvas.clearRect(0, 0, width, height);
      stars = stars.map(({ x, y, speed }) => {
        canvas.beginPath();
        canvas.arc(x, y, 1, 0, Math.PI * 2);
        canvas.closePath();
        canvas.fill();

        x += speed;
        x = x > width ? 0 : x;

        y += getRandom(0, speed);
        y = y > height ? 0 : y;

        return { x, y, speed };
      });
      requestAnimationFrame(printStar);
    };

    requestAnimationFrame(printStar);
  }, [canvasRef, windowSize, width, height]);

  return isLightTheme ? (
    <S.Background>
      <Image src={background} alt="background" />
      <canvas ref={canvasRef} width={width} height={height} />
    </S.Background>
  ) : null;
};
