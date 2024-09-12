import { offers } from '../../constant';
import OfferCard from '../cards/OfferCard';
import { Swiper, SwiperSlide } from 'swiper/react';

function OfferHome() {
  return (
    <div className='py-20'>
      <div className='container'>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          pagination={{
            clickable: true,
            enabled: true,
          }}
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
              slidesPerView: 3,
            },
          }}
        >
          {offers.map((offer, index) => (
            <SwiperSlide key={index}>
              <OfferCard key={index} {...offer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default OfferHome;
