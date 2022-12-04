import React from 'react';
import { ErrorPageStyled } from './styled';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import Error from './Error/Error';
import { ErrorPageModal } from './ErrorPage.modal';
import { Section } from '../../../styled/tags';
import error from '../../../assets/img/404.webp';

const ErrorPage = ({ isError = false, title, subtitle }: ErrorPageModal) => {
  const renderErrorComponent = () =>
    title && subtitle && <Error title={title} subtitle={subtitle} />;

  return (
    <ErrorPageStyled>
      <Section>
        <figure>
          <img src={error} alt="Error" />
        </figure>
        <figcaption>
          {isError ? renderErrorComponent() : <NotFound />}
          <Link to="/">
            <Button>Back home</Button>
          </Link>
        </figcaption>
      </Section>
    </ErrorPageStyled>
  );
};
export default ErrorPage;
