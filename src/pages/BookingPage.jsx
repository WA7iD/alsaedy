import React from 'react';
import PageHeader from '../shared/PageHeader';

const BookingPage = () => {
  return (
    <div className='container mb-20'>
      <PageHeader pageName={' احجز الان'} />
      <div className='bg-[#F5F5F5] p-5 rounded-3xl flex flex-col justify-center items-center py-14'>
        <div className='flex flex-col justify-center items-center gap-4 mb-14'>
          <h1 className='text-3xl font-bold text-primary'>
            اطلب وحدد موعد الأن
          </h1>
          <p className='text-[#15254B] text-2xl'>
            خبراء الرعاية الصحية المنزلية، نوفر لك مناخ ملائم للرعاية الصحية
            الأمنة
          </p>
        </div>
        <form action='' className=' w-1/2'>
          <div className='input-holder col-md-6 col-12'>
            <label htmlFor=''>الاسم</label>
            <input
              className='border-2 border-[#15254B33] rounded-md p-2'
              placeholder='enter your name'
              type='text'
              name='family_name'
              // onChange={handleInputChange}
            />
          </div>
          <div className='input-holder col-md-6 col-12'>
            <label htmlFor=''>البريد الالكتروني</label>
            <input
              placeholder='enter your email'
              type='text'
              name='family_name'
              // onChange={handleInputChange}
            />
          </div>
          <div className='input-holder col-md-6 col-12'>
            <label htmlFor=''>رقم الجوال</label>
            <input
              placeholder='enter your phone'
              type='text'
              name='family_name'
              // onChange={handleInputChange}
            />
          </div>
          <div className='input-holder col-md-6 col-12'>
            <label htmlFor=''>الفرع</label>
            <input
              placeholder='enter your service'
              type='text'
              name='family_name'
              // onChange={handleInputChange}
            />
          </div>
          <div className='input-holder col-md-6 col-12'>
            <label htmlFor=''>العيادة</label>
            <input
              placeholder='enter your service'
              type='text'
              name='family_name'
              // onChange={handleInputChange}
            />
          </div>
          <div className='input-holder col-md-6 col-12'>
            <label htmlFor=''>الدكتور</label>
            <input
              placeholder='enter your service'
              type='text'
              name='family_name'
              // onChange={handleInputChange}
            />
          </div>
          <div className='input-holder col-md-6 col-12'>
            <label htmlFor=''>الرسالة</label>
            <input
              placeholder='enter your service'
              type='text'
              name='family_name'
              // onChange={handleInputChange}
            />
          </div>
          <button className='bg-secondary text-white p-3 rounded-3xl w-full font-bold'>
            حجز موعد
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
