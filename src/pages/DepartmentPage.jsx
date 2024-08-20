import PageHeader from '../shared/PageHeader';
import { departments } from '../constant';
import DepartmentCard from '../components/cards/DepartmentCard';

function DepartmentPage() {
  return (
    <div className='container'>
      <PageHeader pageName={'الاقسام'} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
        {departments.map((department, index) => (
          <DepartmentCard key={index} {...department} />
        ))}
      </div>
    </div>
  );
}

export default DepartmentPage;
