import React from 'react';
import { icons } from '../../constant';
import { Link } from 'react-router-dom';

function ArticleCard({ image, title, day, description, month, key, pagecard }) {
  return (
    <>
      {pagecard ? (
        <Link
          key={key}
          className='flex flex-col justify-between items-center gap-4'
        >
          <div className='w-full h-80 rounded-xl overflow-hidden relative hover:cursor-pointer group/item ease-in-out'>
            <div className='w-1/2 h-1/2 bg-primary group-hover/item:flex group-hover/item:opacity-100 group-hover/item:ease-in-out transition  opacity-0 ease-in-out duration-300 justify-center items-center rounded-xl bg-opacity-65 absolute top-0 left-0 translate-x-1/2 translate-y-1/2 hidden '>
              <h1 className='text-2xl text-white font-semibold'>المزيد</h1>
            </div>
            <img
              src={image}
              alt='cover'
              className='w-full h-full object-cover'
            />
          </div>
          <p className='text-secondary'>November 05, 2021</p>
          <h2 className='text-2xl text-primary mb-4'>{title} </h2>
        </Link>
      ) : (
        <div
          key={key}
          className='flex justify-between items-start gap-4 max-w-fit'
        >
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
      )}
    </>
  );
}

export default ArticleCard;
