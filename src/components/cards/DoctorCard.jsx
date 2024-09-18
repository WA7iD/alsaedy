import React from "react";

function DoctorCard({ name, category, image, key }) {
  return (
    <div key={key} className="flex flex-col items-center gap-4">
      <div className="w-52 h-52 rounded-full">
        <img src={image} alt="doctor" className="w-full bg-cover" />
      </div>
      <p className="text-primary text-xl ">{category?.title}</p>
      <h1 className="font-bold text-xl text-primary">{name}</h1>
    </div>
  );
}

export default DoctorCard;
