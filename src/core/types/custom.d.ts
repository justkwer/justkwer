declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module '*.ttf';
declare module '*.webp';
