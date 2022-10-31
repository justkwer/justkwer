import React from 'react';
import { ErrorPageStyled } from './styled';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import Error from './Error/Error';
import { ErrorPageModal } from './ErrorPage.modal';

const ErrorPage = ({ isError, title, subtitle }: ErrorPageModal) => {
  return (
    <ErrorPageStyled>
      <section>
        <figure>
          <img src={require('../../../assets/img/404.webp')} alt={'Error'} />
        </figure>
        <figcaption>
          {isError ? <Error title={title as string} subtitle={subtitle as string} /> : <NotFound />}
          <Button>
            <Link to="/" style={{ color: '#FFFFFF' }}>
              Back home
            </Link>
          </Button>
        </figcaption>
      </section>
    </ErrorPageStyled>
  );
};

export default ErrorPage;
