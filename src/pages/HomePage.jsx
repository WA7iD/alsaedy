import React from 'react';
import DoctorCard from '../components/cards/DoctorCard';
import { images } from '../constant';
import ArticleCard from '../components/cards/ArticleCard';
import OfferCard from '../components/cards/OfferCard';
import DoctorHome from '../components/Home/DoctorHome';
import ArticleHome from '../components/Home/ArticleHome';
import OfferHome from '../components/Home/OfferHome';

const HomePage = () => {
  return (
    <section className={'container'}>
      <h1>Home Page</h1>
      <DoctorHome />
      <ArticleHome />
      <OfferHome />
    </section>
  );
};

export default HomePage;
