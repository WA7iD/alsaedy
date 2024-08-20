import { Link } from 'react-router-dom';
import { images } from '../constant';

const PageNotFound = () => {
  return (
    <div className='container flex flex-col items-center justify-center my-20'>
      <img src={images.error} alt='error' />
      <Link to='/' className='text-white bg-secondary rounded-3xl px-5 py-2'>
        الرئيسية
      </Link>
    </div>
  );
};

export default PageNotFound;
