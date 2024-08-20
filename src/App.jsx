import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./shared/Loader";
import AppLayout from "./shared/layout/AppLayout";
import Aos from "aos";

const HomePage = lazy(() => import("./pages/HomePage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
