export type ScrollingProps = {
  callback: (isScrollUp?: boolean) => void;
  isScrollUp?: boolean;
  isHidden: boolean;
};

export type ScrollingType = Omit<ScrollingProps, 'callback'>;
