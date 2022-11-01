import { Outlet, useLocation } from 'react-router-dom';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/404' ? <Header /> : null}
      <Outlet />
      {pathname !== '/404' ? <Footer /> : null}
    </>
  );
};

export default Layout;
