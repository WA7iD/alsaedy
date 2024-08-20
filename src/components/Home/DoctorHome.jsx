import React from 'react';
import { doctors } from '../../constant';
import DoctorCard from '../cards/DoctorCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
function DoctorHome() {
  return (
    <div className='py-20'>
      <div className='container'>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <DoctorCard key={index} {...doctor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default DoctorHome;
