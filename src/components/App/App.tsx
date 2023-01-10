import React, { Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { loadingError } from '../../constants/constants';
import ErrorPage from './ErrorPage/ErrorPage';
import Background from '../Background/Background';
import { useToggleLightMode } from '../Theme/Theme';

const Main = React.lazy(() => import('./Main/Main'));
const About = React.lazy(() => import('./About/About'));
const Games = React.lazy(() => import('./Games/Games'));

function App() {
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
            <Route path="/games" element={<Games />} />
            <Route path="404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="404" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
