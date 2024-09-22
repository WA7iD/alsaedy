import PageHeader from '../shared/PageHeader';
import { offers } from '../constant';
import OfferCard from '../components/cards/OfferCard';
import SectionHeader from '../shared/SectionHeader';
import DownloadApp from '../components/Home/DownloadApp';
import useGetData from '../Hooks/useGetData';

function OffersPage() {
  const { data, loading, error } = useGetData('/offers');
  console.log(data);
  return (
    <div>
      <div className='container'>
        <PageHeader pageName={'العروض'} />
        <SectionHeader header={'العروض'} light={false} title={'أحدث العروض'} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {data?.data?.data?.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
      </div>
      <DownloadApp />
    </div>
  );
}

export default OffersPage;
