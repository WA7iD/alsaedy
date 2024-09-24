import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../constant";
import { FaArrowLeft } from "react-icons/fa";

function OfferCard({
  image,
  title,
  description,
  price,
  price_after_discount,
  key,
}) {
  const imageUrl = image;
  return (
    <div key={key} className="bg-[#F5F5F5] rounded-t-3xl overflow-hidden">
      <div className="w-full max-h-[220px] min-h-[220px] overflow-hidden">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-contain bg-cover"
        />
      </div>
      <div className="p-6">
        <h1 className="text-2xl text-primary my-4"> {title}</h1>
        <p className="text-primary/40 w-1/2"> {description}</p>
        <div className="flex justify-between items-center my-5">
          <div className="">
            <p className="text-secondary text-xl mb-2"> {price} ريال سعودي </p>
            <p className="text-primary/40 underline italic">
              {price_after_discount} ريال سعودي
            </p>
          </div>
          <Link
            to={"/bookingPage"}
            className="border-2 border-secondary text-secondary rounded-2xl p-4 flex items-center gap-2"
          >
            طلب العرض
            <FaArrowLeft />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
