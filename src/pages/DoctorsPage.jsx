import { doctorsPage } from "../constant";
import Doctor from "../components/cards/Doctor";
import PageHeader from "../shared/PageHeader";
import DownloadApp from "../components/Home/DownloadApp";
import useGetData from "../Hooks/useGetData";

function DoctorsPage() {
  const { data, loading, error } = useGetData("/doctors");

  return (
    <div className="pb-10">
      <div className="container">
        <PageHeader pageName={"الاطباء"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.data?.data?.map((doctor, index) => (
            <Doctor key={index} {...doctor} />
          ))}
        </div>
      </div>
      <DownloadApp />
    </div>
  );
}

export default DoctorsPage;
