import React, { Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '..';
import { loadingError } from '../../core/constants';

import { useToggleLightMode, Background } from '../../components';

const Main = React.lazy(() => import('../../pages/Main'));
const About = React.lazy(() => import('../../pages/About'));
const Projects = React.lazy(() => import('../../pages/Projects'));
const ErrorPage = React.lazy(() => import('../../pages/ErrorPage'));

export const App = () => {
  const { isLightMode } = useToggleLightMode();
  const { title, subtitle } = loadingError;
  return (
    <Router>
      {isLightMode && <Background />}
      <Suspense fallback={<ErrorPage isError={true} title={title} subtitle={subtitle} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="404" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};
