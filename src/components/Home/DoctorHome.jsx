import React from 'react';
import { doctors } from '../../constant';
import DoctorCard from '../cards/DoctorCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import SectionHeader from '../../shared/SectionHeader';
function DoctorHome() {
  return (
    <div className='py-20'>
      <div className='container'>
        <SectionHeader
          header={'الطاقم الطبي'}
          title={'سنعرض لكم اسماء االطباء وتخصصاتهم'}
          light={false}
        />
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
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
