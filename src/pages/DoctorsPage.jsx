import { doctorsPage } from '../constant';
import Doctor from '../components/cards/Doctor';
import PageHeader from '../shared/PageHeader';

function DoctorsPage() {
  return (
    <div>
      <PageHeader pageName={'الاطباء'} />
      <div>
        {doctorsPage.map((doctor, index) => (
          <Doctor key={index} {...doctor} />
        ))}
      </div>
    </div>
  );
}

export default DoctorsPage;
