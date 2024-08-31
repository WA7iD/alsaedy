import React from 'react';
import DownloadApp from '../components/Home/DownloadApp';
import PageHeader from '../shared/PageHeader';

const ActiviteDetails = () => {
  return (
    <section className='container'>
      <PageHeader pageName={'تفاصيل الفعالية'} />
      <div className='w-full h-80 overflow-hidden rounded-3xl'>
        <img
          src='https://via.placeholder.com/1000'
          alt='image'
          className='w-full object-cover h-full'
        />
      </div>
      <div className='bg-[#F5F5F5] p-5 my-10 rounded-3xl flex flex-col justify-center items-start py-14'>
        <h1 className='text-3xl font-bold my-5'>
          ارك غرفة المدينة المنورة في منتدى العمرة والزيارة والذي يقام برعاية
        </h1>
        <p className='text-xl  text-secondary'>11/22/2024</p>
      </div>
      <DownloadApp />
    </section>
  );
};

export default ActiviteDetails;
