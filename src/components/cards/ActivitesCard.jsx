import React from 'react';
import { Link } from 'react-router-dom';

export default function ActivitesCard({
  title,
  description,
  img,
  date,
  href,
  light,
}) {
  return (
    <div className='flex gap-3 rounded-[20px] bg-[#ffffff60] overflow-hidden'>
      <div className='rounded-[20px] w-[320px] aspect-square overflow-hidden'>
        <img className='w-full h-full object-cover' src={img} alt='' />
      </div>
      <div
        className={`flex flex-col justify-between  py-7 ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        <h1 className='font-bold text-[18px]'>{title}</h1>
        <p className='font-regular my-1 w-full md:w-[90%] text-[14px]'>
          {description}
        </p>
        <p className='text-secondary  font-bold text-[16px]'>{date}</p>
        <div className='w-[30px] mt-4'>
          <Link
            className='w-full my-3 px-[25px] py-[5px] bg-white font-bold text-[16px] text-primary rounded-[1000px]'
            to={'/activiteDetails'}
          >
            المزيد
          </Link>
        </div>
      </div>
    </div>
  );
}
