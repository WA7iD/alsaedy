import React from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import logoWhite from '../../assets/icons/logoWhite.png';
import map from '../../assets/map.png';

export default function Footer() {
  return (
    <footer className='overflow-hidden bg-primary relative h-1/2'>
      <div className='pt-10 z-10 relative'>
        <div className='container'>
          <div className=''>
            <div className='grid grid-cols-12 justify-between items-start lg:justify-items-center  gap-10  md:gap-8 lg:gap-28 py-20'>
              <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                <div className='flex flex-col justify-between items-start gap-4'>
                  <img src={logoWhite} alt='logo' className='w-[60%]' />
                  <p className='text-white font-light text-lg'>
                    لوريم ابسيوم لوريم ابسيوم لوريم ابسيوم لوريم ابسيوم لوريم
                    ابسيوم
                  </p>
                </div>
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                <Links />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                <div className='text-white'>
                  <h2 className='text-2xl font-semibold mb-3  border-b-2 pb-4 w-fit'>
                    روابط مهمه
                  </h2>
                  <ul className='flex flex-col gap-2'>
                    <li className='text-white font-light text-xl p-3  '>
                      <Link to='/doctors'>الطاقم الطبي</Link>
                    </li>
                    <li className='text-white font-light text-xl p-3  '>
                      <Link to='/about'>العروض</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='border-t border-t-background-light text-white text-lg font-light text-center py-10'>
          2024© مستشفى الصاعدي- الرياض. جميع الحقوق محفوظة.
        </p>
      </div>
      <img
        src={map}
        alt='map'
        className='absolute bottom-0 left-0 w-full h-full object-cover z-0'
      />
    </footer>
  );
}
