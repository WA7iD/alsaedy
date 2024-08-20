import React from 'react';
import ArticleCard from '../cards/ArticleCard';
import { articles } from '../../constant';
function ArticleHome() {
  return (
    <div>
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  );
}

export default ArticleHome;
