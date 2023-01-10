import { Outlet, useLocation } from 'react-router-dom';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { notFoundPage } from '../../constants/constants';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== notFoundPage ? <Header /> : null}
      <Outlet />
      {pathname !== notFoundPage ? <Footer /> : null}
    </>
  );
};

export default Layout;
