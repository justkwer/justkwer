import React, { Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ErrorPage from './ErrorPage/ErrorPage';
import Main from './Main/Main';
import Background from '../Background/Background';
import { useToggleLightMode } from '../Theme/Theme';
import About from './About/About';
import Games from './Games/Games';

function App() {
  const { isLightMode } = useToggleLightMode();
  return (
    <Router>
      {isLightMode && <Background />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/about" element={<About />} />
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
