import { offers } from '../../constant';
import useGetData from '../../Hooks/useGetData';
import OfferCard from '../cards/OfferCard';
import { Swiper, SwiperSlide } from 'swiper/react';

function OfferHome() {
  const { data, loading, error } = useGetData('/offers');
  console.log(data);

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
          {data?.data?.data?.map((offer, index) => (
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
