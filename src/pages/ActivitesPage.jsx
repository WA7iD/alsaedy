import PageHeader from '../shared/PageHeader';
import ActivitesCard from '../components/cards/ActivitesCard';
import { activite } from '../constant';
import SectionHeader from '../shared/SectionHeader';
import { Link } from 'react-router-dom';
const ActivitesPage = () => {
  return (
    <section className='container'>
      <PageHeader pageName={'الفعاليات'} />
      <SectionHeader
        header={'الفعاليات'}
        title={'سنعرض لكم اخبار مستشفي الصاعدي'}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-20'>
        {activite?.map((e, i) => (
          <div key={i} className=' bg-[#15254b7a] rounded-xl'>
            <ActivitesCard key={i} {...e} light={false} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivitesPage;
