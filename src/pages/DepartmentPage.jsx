import PageHeader from "../shared/PageHeader";
import { departments } from "../constant";
import DepartmentCard from "../components/cards/DepartmentCard";
import SectionHeader from "../shared/SectionHeader";
import DownloadApp from "../components/Home/DownloadApp";
import useGetData from "../Hooks/useGetData";

function DepartmentPage() {
  const { data, loading, error } = useGetData("/categories");

  return (
    <div className="container">
      <PageHeader pageName={"الاقسام"} />
      <SectionHeader
        header={"الاقسام"}
        light={false}
        title={"التخصصات الطبية"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
        {data?.data?.map((department, index) => (
          <DepartmentCard key={index} {...department} />
        ))}
      </div>
      <DownloadApp />
    </div>
  );
}

export default DepartmentPage;
