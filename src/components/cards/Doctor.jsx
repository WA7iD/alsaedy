import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Doctor({ image, title, description, key }) {
  return (
    <div key={key} className='bg-[#F5F5F5] rounded-t-3xl overflow-hidden'>
      <div className='w-full overflow-hidden'>
        <img src={image} alt='image' className='w-full bg-cover' />
      </div>
      <div className='p-6'>
        <h1 className='text-2xl text-primary my-4'> {title}</h1>
        <p className='text-primary/40 w-1/2 my-4'> {description}</p>

        <Link className='border-2 border-secondary text-secondary rounded-2xl p-4 flex items-center gap-2'>
          طلب العرض
          <FaArrowLeft />
        </Link>
      </div>
    </div>
  );
}

export default Doctor;
