import PageHeader from "../shared/PageHeader";
import ActivitesCard from "../components/cards/ActivitesCard";
import { activites } from "../constant";
import SectionHeader from "../shared/SectionHeader";
import { Link } from "react-router-dom";
import useGetData from "../Hooks/useGetData";
const ActivitesPage = () => {
  const { data, loading, error } = useGetData("/activities");

  return (
    <section className="container">
      <PageHeader pageName={"الفعاليات"} />
      <SectionHeader
        header={"الفعاليات"}
        title={"سنعرض لكم اخبار مستشفي الصاعدي"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-20">
        {data?.data?.map((e, i) => (
          <div key={i} className=" bg-[#15254b7a] rounded-xl">
            <ActivitesCard {...e} light={false} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivitesPage;
