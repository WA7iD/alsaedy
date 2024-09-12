import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { GrLanguage } from 'react-icons/gr';

export default function Header() {
  return (
    <header className='bg-primary'>
      <div className='mx-20  justify-between items-center py-3  hidden md:flex'>
        <div className='flex justify-between items-center gap-10'>
          <Link to='/' className='bg-[#2E3D61] px-4 py-2  text-white'>
            <p className='text-white'>الفرع الاول</p>
          </Link>
          <Link to='/'>
            <p className='text-white'>الفرع الثاني</p>
          </Link>
          <Link to='/'>
            <p className='text-white'>الفرع الثالث</p>
          </Link>
        </div>
        <Link className='flex justify-between items-center gap-2 text-white'>
          <p>Eng</p> <GrLanguage />
        </Link>
      </div>
      <Navbar />
    </header>
  );
}
