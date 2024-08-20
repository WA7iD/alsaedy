import React from 'react';
import { images } from '../../constant';

function DownloadApp() {
  return (
    <div className='py-20'>
      <div className='container '>
        <div className='flex flex-row justify-between items-center gap-10 bg-primary rounded-[50px]  p-10 overflow-hidden relative h-[500px]'>
          <img
            src={images.landing}
            alt='landing'
            className='absolute top-0 left-0 w-full object-cover h-full '
          />
          <img
            src={images.landingOvellay}
            alt='landingOvellay'
            className='absolute top-0 left-0 w-full object-cover h-full '
          />
          <div className='flex-1 text-white flex  flex-col gap-4 z-10'>
            <h1 className='text-3xl w-fit px-4 font-bold text-[#FF7C87] border-r-2 border-l-2 border-white'>
              تحميل التطبيق
            </h1>
            <h1>لوريم ابسيوم. لوريم.</h1>
            <p className='w-8/12'>
              هذا مثال لنص يمكن أن يستخدم في نفس المساحة هذا مثال لنص يمكن أن
              يستخدم في نفس{' '}
            </p>
            <div className='flex justify-start items-center gap-4 mt-5'>
              <img src={images.appstore} alt='' className='w-40' />
              <img src={images.googlePlay} alt='' className='w-40' />
            </div>
          </div>
          <div className='hidden lg:flex flex-1 h-full justify-center items-center gap-4 z-10 relative'>
            <img
              src={images.phone}
              alt='phone'
              className='absolute -bottom-10 right-0'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
