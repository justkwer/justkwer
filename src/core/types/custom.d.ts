declare module '*.svg' {
  import type { ReactElement, SVGProps } from 'react';

  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}
declare module '*.ttf';
declare module '*.woff';
declare module '*.webp';
