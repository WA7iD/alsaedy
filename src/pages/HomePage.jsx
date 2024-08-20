import React from 'react';
import SliderHome from '../components/Home/SliderHome';
import DoctorHome from '../components/Home/DoctorHome';
import ArticleHome from '../components/Home/ArticleHome';
import OfferHome from '../components/Home/OfferHome';
import DownloadApp from '../components/Home/DownloadApp';

const HomePage = () => {
  return (
    <>
      <SliderHome />
      <DoctorHome />
      <ArticleHome />
      <OfferHome />
      <DownloadApp />
    </>
  );
};

export default HomePage;
