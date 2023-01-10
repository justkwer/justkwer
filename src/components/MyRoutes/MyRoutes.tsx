import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ErrorPage from '../App/ErrorPage/ErrorPage';
import { navigationAbout } from '../../constants/constants';

const AboutMe = React.lazy(() => import('../App/About/AboutMe/AboutMe'));
const Education = React.lazy(() => import('../App/About/Education/Education'));
const WhatIWant = React.lazy(() => import('../App/About/WhatIWant/WhatIWant'));
const WatchMe = React.lazy(() => import('../App/About/WatchMe/WatchMe'));
const ContactMe = React.lazy(() => import('../App/About/ContactMe/ContactMe'));

const MyRoutes = () => {
  const [about, education, whatIWant, watch, contact] = navigationAbout;

  return (
    <Routes>
      <Route path={about} element={<AboutMe />} />
      <Route path={education} element={<Education />} />
      <Route path={whatIWant} element={<WhatIWant />} />
      <Route path={watch} element={<WatchMe />} />
      <Route path={contact} element={<ContactMe />} />
      <Route path="404" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="404" replace />} />
    </Routes>
  );
};

export default MyRoutes;
