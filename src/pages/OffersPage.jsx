import PageHeader from '../shared/PageHeader';
import { offers } from '../constant';
import OfferCard from '../components/cards/OfferCard';

function OffersPage() {
  return (
    <div>
      <div className='container'>
        <PageHeader pageName={'العروض'} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OffersPage;
