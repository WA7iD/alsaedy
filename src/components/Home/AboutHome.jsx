import React from 'react';
import aboutImg1 from '../../assets/dummy/DetailsImg.svg';
import aboutImg2 from '../../assets/dummy/Details.svg';
import dot from '../../assets/icons/dot.png';

export default function AboutHome() {
  return (
    <section className='container flex flex-col md:flex-row justify-between items-center mt-[80px]'>
      <div data-aos='fade-right' data-aos-delay='100' className='flex-1'>
        <img className='w-full' src={aboutImg1} alt='image' />
      </div>
      <div data-aos='fade-left' data-aos-delay='100' className='flex-1 p-4'>
        <h2 className='text-xl font-semibold mb-3 text-secondary '>
          عن مستشفي الصاعدي
        </h2>
        <p className='text-primary font-semibold my-5  text-2xl'>
          لوريم لوريم لوريم لوريم لوريم ابسيوم لوريم ابسيوم لوريم ابسيوم لوريم
          لوريم لوريم ابسيوم .
        </p>
        <p>
          ابسيوم لوريم ابسيوم لوريم ابسيوم لوريم ابسيوم لوريم ابسيوم لوريم
          ابسيوم لوريمابسيوم لوريم ابسيوم لوريم ابسيوم لوريم ابسيوم لوريم ابسيوم
          لوريم ابسيوم لوريم وبأعلى كفاءة. ابسيوم لوريم ابسيوم لوريم.
        </p>
        <div className='flex flex-col items-start md:flex-row justify-between md:items-center gap-4 mt-10'>
          <div className='flex items-center gap-2'>
            <img src={dot} alt='image' />
            <p>خدمة عملاء لا مثيل لها</p>
          </div>
          <div className='flex items-center gap-2'>
            <img src={dot} alt='image' />

            <p>قرارات قائمة على الحلول</p>
          </div>
          <div className='flex items-center gap-2'>
            <img src={dot} alt='image' />
            <p>ثقافة شركية حيوية</p>
          </div>
        </div>
      </div>
    </section>
  );
}
