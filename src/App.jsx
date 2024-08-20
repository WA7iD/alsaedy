import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loader from './shared/Loader';
import AppLayout from './shared/layout/AppLayout';

const HomePage = lazy(() => import('./pages/HomePage'));
const OffersPage = lazy(() => import('./pages/OffersPage'));
const AskOffer = lazy(() => import('./pages/AskOffer'));
const Department = lazy(() => import('./pages/DepartmentPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/offers' element={<OffersPage />} />
            <Route path='/askOffer' element={<AskOffer />} />
            <Route path='/department' element={<Department />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
