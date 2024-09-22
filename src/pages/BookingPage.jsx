import React, { useState } from 'react';
import PageHeader from '../shared/PageHeader';
import usePostData from '../Hooks/usePostData';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    possition: '',
    message: '',
    clinic: '',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await postWithoutImage(formData);
    console.log(result);
  };
  const { response, error, loading, postWithoutImage } = usePostData(
    '/employment_applications'
  );
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
        <form action='' className=' w-1/2' onSubmit={handleSubmit}>
          <div className='input-holder col-md-6 col-12'>
            <label htmlFor=''>الاسم</label>
            <input
              className='border-2 border-[#15254B33] rounded-md p-2'
              placeholder='ادخل اسم المستخدم'
              type='text'
              name='name'
              onChange={handleInputChange}
            />
          </div>
          <div className='input-holder col-md-6 col-12'>
            <label htmlFor=''>البريد الالكتروني</label>
            <input
              placeholder='ادخل البريد الالكتروني  '
              type='text'
              name='email'
              onChange={handleInputChange}
            />
          </div>
          <div className='input-holder col-md-6 col-12'>
            <label htmlFor=''>رقم الجوال</label>
            <input
              placeholder='ادخل رقم الجوال'
              type='text'
              name='phone'
              onChange={handleInputChange}
            />
          </div>
          <div className='input-holder col-md-6 col-12'>
            <label htmlFor=''>الفرع</label>
            <select
              placeholder='اختر الفرع  '
              type='text'
              name='possition'
              value={formData.position}
              onChange={handleInputChange}
            >
              <option value=''>اختر الفرع </option>
              <option value='manager'>الفرع الاول</option>
              <option value='developer'>الفرع الثاني</option>
              <option value='designer'>الفرع الثالث</option>
            </select>
          </div>
          <div className='input-holder col-md-6 col-12'>
            <label htmlFor=''>العيادة</label>
            <input
              placeholder='اختر العياده  '
              type='text'
              name='clinic'
              onChange={handleInputChange}
            />
          </div>
          <div className='input-holder col-md-6 col-12'>
            <label htmlFor=''>الدكتور</label>
            <input
              placeholder='اختر الدكتور  '
              type='text'
              name='doctor'
              onChange={handleInputChange}
            />
          </div>
          <div className='input-holder col-md-6 col-12'>
            <label htmlFor=''>الرسالة</label>
            <input
              placeholder='اكتب الرساله'
              type='text'
              name='message'
              onChange={handleInputChange}
            />
          </div>
          <button
            type='submit'
            disabled={loading}
            className='text-white rounded-xl bg-secondary py-2 px-4 font-semibold'
          >
            حجز الان
          </button>
          {loading && <p>Loading...</p>}
          {response && <p>Success: {JSON.stringify(response)}</p>}
          {error && <p>Error: {error.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
