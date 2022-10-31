import React, { Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ErrorPage from './ErrorPage/ErrorPage';
import Main from './Main/Main';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="404" element={<ErrorPage isError={false} />} />
            <Route path="*" element={<Navigate to="404" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
