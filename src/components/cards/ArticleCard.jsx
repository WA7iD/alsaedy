import React from "react";
import { icons } from "../../constant";
import { Link } from "react-router-dom";

function ArticleCard({
  image,
  title,
  description,
  key,
  pagecard,
  created_at,
  id,
}) {
  let timestamp = created_at;
  let date = new Date(timestamp);
  let day = date.getDate();
  let monthInArabic = date.toLocaleString("ar-EG", { month: "long" });

  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  return (
    <>
      {pagecard ? (
        <Link
          to={`/articleDetails/${id}`}
          key={key}
          className="flex flex-col justify-between items-center gap-4"
        >
          <div className="w-full h-80 rounded-xl overflow-hidden relative hover:cursor-pointer group/item ease-in-out">
            <div className="w-1/2 h-1/2 bg-primary group-hover/item:flex group-hover/item:opacity-100 group-hover/item:ease-in-out transition  opacity-0 ease-in-out duration-300 justify-center items-center rounded-xl bg-opacity-65 absolute top-0 left-0 translate-x-1/2 translate-y-1/2 hidden ">
              <h1 className="text-2xl text-white font-semibold">المزيد</h1>
            </div>
            <img
              src={image}
              alt="cover"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-secondary">{day}</p>
          <h2 className="text-2xl text-primary mb-4">{title} </h2>
        </Link>
      ) : (
        <div
          key={key}
          className="flex flex-col md:flex-row justify-between items-start gap-4 w-full md:w-9/12 border-t-[.2px] border-b-[.2px] border-[#D9D9D9] p-4"
        >
          <div className="w-full max-h-[200px] overflow-hidden w-5/12">
            <img
              src={image}
              alt="cover"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex  w-7/12  items-start gap-4">
            <div className="flex flex-col justify-between items-center gap-2">
              <img src={icons.calender} alt="" />
              <p className="text-primary font-extrabold text-2xl">{day}</p>
              <p className="text-primary font-extrabold text-2xl">
                {monthInArabic}
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-primary mb-4">{title} </h2>
              <p className="text-primary ">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ArticleCard;
