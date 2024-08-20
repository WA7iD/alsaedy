import React from "react";
import aboutImg1 from "../../assets/dummy/DetailsImg.svg";
import aboutImg2 from "../../assets/dummy/Details.svg";
export default function AboutHome() {
  return (
    <section className="container flex flex-wrap gap-1 mt-[80px]">
      <div data-aos="fade-right" data-aos-delay="100" className="w-[33%]">
        <img className="w-full" src={aboutImg1} alt="" />
      </div>
      <div data-aos="fade-left" data-aos-delay="100" className="w-[66%]">
        <img className="w-full" src={aboutImg2} alt="" />
      </div>
    </section>
  );
}
