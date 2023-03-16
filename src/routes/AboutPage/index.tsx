import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { navigationAbout } from '../../core/constants';

const AboutMe = React.lazy(() => import('../../pages/About/AboutMe'));
const Education = React.lazy(() => import('../../pages/About/Education'));
const WhatIWant = React.lazy(() => import('../../pages/About/WhatIWant'));
const WatchMe = React.lazy(() => import('../../pages/About/WatchMe'));
const ContactMe = React.lazy(() => import('../../pages/About/ContactMe'));
const ErrorPage = React.lazy(() => import('../../pages/ErrorPage'));

export const AboutPage = () => {
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
