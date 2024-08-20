import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const PageHeader = ({ pageName }) => {
  return (
    <section className='h-80 my-20'>
      <div className='flex flex-col justify-center items-center bg-primary rounded-[50px] container text-white gap-4'>
        <h1 className='uppercase text-3xl'>{pageName}</h1>
        <div className='flex items-center'>
          <Link to={'/'} className='font-semibold'>
            الرئيسية
          </Link>
          <IoIosArrowForward className='text-2xl' />
          <span className=' font-semibold capitalize cursor-pointer'>
            {pageName}
          </span>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
