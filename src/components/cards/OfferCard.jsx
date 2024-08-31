import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../../constant';
import { FaArrowLeft } from 'react-icons/fa';

function OfferCard({ image, title, description, price, previousPrice, key }) {
  return (
    <div key={key} className='bg-[#F5F5F5] rounded-t-3xl overflow-hidden'>
      <div className='w-full overflow-hidden'>
        <img src={image} alt='' className='w-full bg-cover' />
      </div>
      <div className='p-6'>
        <h1 className='text-2xl text-primary my-4'> {title}</h1>
        <p className='text-primary/40 w-1/2'> {description}</p>
        <div className='flex justify-between items-center my-5'>
          <div className=''>
            <p className='text-secondary text-xl mb-2'> {price} ريال سعودي </p>
            <p className='text-primary/40 underline italic'>
              {previousPrice} ريال سعودي
            </p>
          </div>
          <Link
            to={'/askOffer'}
            className='border-2 border-secondary text-secondary rounded-2xl p-4 flex items-center gap-2'
          >
            طلب العرض
            <FaArrowLeft />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
