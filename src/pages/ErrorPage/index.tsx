import React from 'react';
import { ErrorPageStyled } from './styled';
import { Link } from 'react-router-dom';
import { NotFoundMessage } from './NotFoundMessage';
import { ErrorMessage } from './ErrorMessage';
import { ErrorPageProp } from './prop';
import { Button } from '../../components';
import { Section } from '../../core/theme';
import { error } from '../../assets';

const ErrorPage = ({ isError = false, title, subtitle }: ErrorPageProp) => {
  const renderErrorComponent = () =>
    title && subtitle && <ErrorMessage title={title} subtitle={subtitle} />;

  return (
    <ErrorPageStyled>
      <Section>
        <figure>
          <img src={error} alt="Error" />
        </figure>
        <figcaption>
          {isError ? renderErrorComponent() : <NotFoundMessage />}
          <Link to="/">
            <Button>Back home</Button>
          </Link>
        </figcaption>
      </Section>
    </ErrorPageStyled>
  );
};

export default ErrorPage;
