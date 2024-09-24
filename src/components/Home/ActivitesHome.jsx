import React from "react";
import SectionHeader from "../../shared/SectionHeader";
import ActivitesCard from "../cards/ActivitesCard";
import activiteImg from "../../assets/dummy/activity.png";
import arrow from "../../assets/icons/left-arrow.svg";

import { Link } from "react-router-dom";
import useGetData from "../../Hooks/useGetData";
import { activite } from "../../constant";

export default function ActivitesHome() {
  const { data, loading, error } = useGetData("/activities");
  console.log(data);
  return (
    <section style={{ padding: "0" }} className="container mb-[80px]">
      <div className=" py-[60px] px-[30px] relative  overflow-hidden mt-[40px] rounded-[40px] bg-primary">
        <SectionHeader
          header={"الفعاليات"}
          title={"سنعرض لكم اخبار مستشفي الصاعدي"}
          light={true}
        />
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {data?.data?.slice(0, 2)?.map((e, i) => (
            <div className="w-full md:w-[45%]" key={i}>
              <ActivitesCard {...e} />
            </div>
          ))}
        </div>

        <Link
          to={"activites"}
          className="nav-btn mx-auto mt-[40px] flex w-fit items-center gap-2"
        >
          عرض جميع الفعاليات <img src={arrow} alt="" />
        </Link>
      </div>
    </section>
  );
}
