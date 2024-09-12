import React from 'react';
import aboutImg1 from '../../assets/dummy/DetailsImg.svg';
import aboutImg2 from '../../assets/dummy/Details.svg';
export default function AboutHome() {
  return (
    <section className='container flex flex-col md:flex-row justify-between items-center mt-[80px]'>
      <div data-aos='fade-right' data-aos-delay='100' className='flex-1'>
        <img className='w-full' src={aboutImg1} alt='image' />
      </div>
      <div data-aos='fade-left' data-aos-delay='100' className='flex-1'>
        <img className='w-full' src={aboutImg2} alt='image' />
      </div>
    </section>
  );
}
