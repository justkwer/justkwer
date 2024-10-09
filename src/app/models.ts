type ErrorType = { title: string; message: string; button: string };

export type ErrorProps = {
  error?: ErrorType;
  callback?: () => void;
};
