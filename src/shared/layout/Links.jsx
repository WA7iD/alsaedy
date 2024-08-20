import React from 'react';

import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className='text-white'>
      <h2 className='text-2xl font-semibold mb-3  border-b-2 pb-4 w-fit'>
        روابط مهمه
      </h2>
      <ul className='flex flex-col gap-2 '>
        <li className='text-white font-light text-xl p-3  '>
          <Link to='/'>الرئيسية</Link>
        </li>
        <li className='text-white font-light text-xl p-3  '>
          <Link to='/about'>الأقسام</Link>
        </li>
        <li className='text-white font-light text-xl p-3  '>
          <Link to='/services'>المقالات </Link>
        </li>
        <li className='text-white font-light text-xl p-3  '>
          <Link to='/faqs'>الفعاليات</Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
