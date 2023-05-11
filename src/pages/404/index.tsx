import { ErrorPageStyled } from './styled';
import { Button, ErrorMessage, NotFoundMessage } from '@components';
import { ErrorPageProp } from '@core/types';
import { Section } from '@core/theme';
import Link from 'next/link';
import { PathsToPage } from '@core/constants';
import Image from 'next/image';
import error from '@public/image/404.webp';
import { FC } from 'react';

const ErrorPage: FC<ErrorPageProp> = ({ isError = false, title, subtitle }) => {
  const renderErrorComponent = () =>
    title && subtitle && <ErrorMessage title={title} subtitle={subtitle} />;

  return (
    <ErrorPageStyled>
      <Section>
        <figure>
          <Image src={error} alt="Error" />
        </figure>
        <figcaption>
          {isError ? renderErrorComponent() : <NotFoundMessage />}
          <Link href={PathsToPage.Main}>
            <Button>Back home</Button>
          </Link>
        </figcaption>
      </Section>
    </ErrorPageStyled>
  );
};

export default ErrorPage;
