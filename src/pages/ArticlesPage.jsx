import React from 'react';
import PageHeader from '../shared/PageHeader';
import SectionHeader from '../shared/SectionHeader';
import ArticleCard from '../components/cards/ArticleCard';
import { articles } from '../constant';
import DownloadApp from '../components/Home/DownloadApp';
import useGetData from '../Hooks/useGetData';

const ArticlesPage = () => {
  const { data, loading, error } = useGetData('/articles');

  return (
    <section className='container'>
      <PageHeader pageName={'المقالات'} />
      <div>
        <SectionHeader
          header={'المقالات'}
          light={false}
          title={'أحدث المقالات'}
        />
        <div className='flex flex-col justify-between  gap-10'>
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} pagecard />
          ))}
        </div>
      </div>
      <DownloadApp />
    </section>
  );
};

export default ArticlesPage;
