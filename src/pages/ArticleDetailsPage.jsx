import React from "react";
import DownloadApp from "../components/Home/DownloadApp";
import PageHeader from "../shared/PageHeader";
import { useParams } from "react-router-dom";
import useGetData from "../Hooks/useGetData";
import Loader from "../shared/Loader";

const ArticleDetailsPage = () => {
  const { id } = useParams();
  const { data, loading } = useGetData("/blogs/" + id);

  return (
    <>
      {loading && <Loader />}
      <section className="container">
        <PageHeader pageName={"المقالات"} />
        <div className="w-full h-80 overflow-hidden rounded-3xl">
          <img
            src={data?.data?.image}
            alt="image"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="bg-[#F5F5F5] p-5 my-10 rounded-3xl flex flex-col justify-center items-start py-14">
          <h1 className="text-3xl font-bold my-5">{data?.data?.title}</h1>
          <p className="text-md my-5 w-10/12 leading-6">
            {data?.data?.description}
          </p>
        </div>
        <DownloadApp />
      </section>
    </>
  );
};

export default ArticleDetailsPage;
