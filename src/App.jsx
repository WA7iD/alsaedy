import  { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loader from './shared/Loader';
import AppLayout from './shared/layout/AppLayout';
import Aos from 'aos';

const HomePage = lazy(() => import('./pages/HomePage'));
const ActivitesPage = lazy(() => import('./pages/ActivitesPage'));
const ActiviteDetails = lazy(() => import('./pages/ActiviteDetails'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const ArticleDetailsPage = lazy(() => import('./pages/ArticleDetailsPage'));
const OffersPage = lazy(() => import('./pages/OffersPage'));
const AskOffer = lazy(() => import('./pages/AskOffer'));
const Department = lazy(() => import('./pages/DepartmentPage'));
const DepartmentDetails = lazy(() => import('./pages/DepartmentDetails'));
const Employment = lazy(() => import('./pages/EmploymentPage'));
const DoctorsPage = lazy(() => import('./pages/DoctorsPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/activites' element={<ActivitesPage />} />
            <Route path='/activiteDetails' element={<ActiviteDetails />} />
            <Route path='/articles' element={<ArticlesPage />} />
            <Route path='/articleDetails' element={<ArticleDetailsPage />} />
            <Route path='/offers' element={<OffersPage />} />
            <Route path='/askOffer' element={<AskOffer />} />
            <Route path='/departments' element={<Department />} />
            <Route path='/DepartmentDetails' element={<DepartmentDetails />} />
            <Route path='/employment' element={<Employment />} />
            <Route path='/doctors' element={<DoctorsPage />} />
            <Route path='/bookingPage' element={<BookingPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
