import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import sliderImg from "../../assets/images/slider.png";
import { Link } from "react-router-dom";
import hospital from "../../assets/icons/hospital.svg";
import arrow from "../../assets/icons/left-arrow.svg";

export default function SliderHome() {
  return (
    <section
      style={{ padding: "0" }}
      className="container relative  overflow-hidden mt-[40px] rounded-[40px] bg-primary"
    >
      <div className="absolute hidden lg:block z-10 left-[40px] top-[50%] translate-y-[-50%]">
        <Link
          to={"https://www.google.com"}
          className="popup-slider text-white font-medium flex gap-3 rounded-[4px] bg-[#516d9ed8] px-[25px] py-[25px]"
        >
          <div>
            <img src={hospital} alt="" />
          </div>

          <div>
            <h1 className="flex gap-2 text-[18px]">الرعاية في المستشفي</h1>
            <p>احجز موعدا</p>
            <img className="mr-[auto] mt-[20px]" src={arrow} alt="" />
          </div>
        </Link>
        <Link
          to={"https://www.google.com"}
          className="popup-slider my-[16px] text-white font-medium flex gap-3 rounded-[4px] bg-[#516d9ed8] px-[25px] py-[25px]"
        >
          <div>
            <img src={hospital} alt="" />
          </div>

          <div>
            <h1 className="flex gap-2 text-[18px]">الرعاية في المستشفي</h1>
            <p>احجز موعدا</p>
            <img className="mr-[auto] mt-[20px]" src={arrow} alt="" />
          </div>
        </Link>
        <Link
          to={"https://www.google.com"}
          className="popup-slider text-white font-medium flex gap-3 rounded-[4px] bg-[#516d9ed8] px-[25px] py-[25px]"
        >
          <div>
            <img src={hospital} alt="" />
          </div>

          <div>
            <h1 className="flex gap-2 text-[18px]">الرعاية في المستشفي</h1>
            <p>احجز موعدا</p>
            <img className="mr-[auto] mt-[20px]" src={arrow} alt="" />
          </div>
        </Link>
      </div>
      <Swiper
        className="lg:h-[555px] h-[400px]"
        modules={[EffectFade, Pagination]}
        effect="fade"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="swiper-slider-home-page">
          <img
            className="w-full object-cover z-[-2] h-full absolute inset-0"
            src={sliderImg}
            alt=""
          />
          <div className="text-white relative md:top-[25%] top-[17%]  mx-[40px]">
            <p className="font-light text-[22px]">تعزيز صحة ونمو طفلك</p>
            <div className="line mt-[15px] mb-[10px]"></div>
            <h1 className="font-bold lg:text-[40px] text-[30px]">
              من خلال التغذية العلاجية
            </h1>
            <Link className=" font-bold px-[36px] text-[20px] mt-[20px] inline-block py-[7px] bg-white text-primary rounded-[1000px]">
              احجز موعد
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
