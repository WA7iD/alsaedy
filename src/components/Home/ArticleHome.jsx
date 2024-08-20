import ArticleCard from '../cards/ArticleCard';
import { articles } from '../../constant';
import { Link } from 'react-router-dom';

function ArticleHome() {
  return (
    <div className='py-20'>
      <div className='container'>
        <div className='flex flex-col justify-between items-center gap-10'>
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        <Link
          to='/articles'
          className='bg-secondary text-white p-4 rounded-full font-bold '
        >
          تصفح جميع المقالات
        </Link>
      </div>
    </div>
  );
}

export default ArticleHome;
