import React from 'react';
import { icons } from '../../constant';

function ArticleCard({ image, title, day, description, month, key }) {
  return (
    <div key={key} className='flex justify-between items-start gap-4'>
      <div className='w-full'>
        <img src={image} alt='cover' className='w-full' />
      </div>
      <div className='flex justify-between items-start gap-4'>
        <div className='flex flex-col justify-between items-center gap-2'>
          <img src={icons.calender} alt='' />
          <p className='text-primary font-extrabold text-2xl'>{day}</p>
          <p className='text-primary font-extrabold text-2xl'>{month}</p>
        </div>
        <div>
          <h2 className='text-2xl text-primary mb-4'>{title} </h2>
          <p className='text-primary w-1/2'>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
