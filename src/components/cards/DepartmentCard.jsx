import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { images } from "../../constant";
function DepartmentCard({ title, image, key }) {
  return (
    <div key={key} className="rounded-t-3xl overflow-hidden">
      <div className="w-full overflow-hidden max-h-[220px] min-h-[220px]">
        <img src={images.offer} alt="" className="w-full bg-cover" />
      </div>

      <div className="flex justify-between items-center my-5">
        <p className="text-secondary text-xl mb-2"> {title} </p>

        <Link
          to={"/DepartmentDetails"}
          className="border-2 border-secondary text-secondary rounded-2xl p-4 flex items-center gap-2"
        >
          طلب العرض
          <FaArrowLeft />
        </Link>
      </div>
    </div>
  );
}

export default DepartmentCard;
