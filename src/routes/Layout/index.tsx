import { Outlet, useLocation } from 'react-router-dom';
import React from 'react';
import { Header } from '../../containers';
import { Footer } from '../../containers';
import { notFoundPage } from '../../core/constants';

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== notFoundPage ? <Header /> : null}
      <Outlet />
      {pathname !== notFoundPage ? <Footer /> : null}
    </>
  );
};
