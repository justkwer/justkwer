import { H1, P } from '@core/theme';
import { notFoundMessage } from '@core/constants';

export const NotFoundMessage = () => {
  const { title, subtitle } = notFoundMessage;
  return (
    <>
      <H1>{title}</H1>
      <P>{subtitle}</P>
    </>
  );
};
