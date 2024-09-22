import SliderHome from '../components/Home/SliderHome';
import AboutHome from '../components/Home/AboutHome';
import ActivitesHome from '../components/Home/ActivitesHome';
import DoctorHome from '../components/Home/DoctorHome';
import ArticleHome from '../components/Home/ArticleHome';
import OfferHome from '../components/Home/OfferHome';
import DownloadApp from '../components/Home/DownloadApp';
import SectionHeader from '../shared/SectionHeader';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='px-5 md:px-0'>
      <SliderHome />
      <AboutHome />
      <ActivitesHome />
      <DoctorHome />
      <div className='container'>
        <SectionHeader header={' أقسامنا الطبية'} light={false} />
        <h1 className='text-center text-primary text-3xl  justify-center items-center flex mt-10'>
          توفّر جميع أقسامنا خدمات الرعاية الصحية وفق المعايير الدولية في مجموعة
          متنوعة من التخصصات.
        </h1>
        <div className='justify-center items-center flex mt-10'>
          <Link
            to='/departments'
            className='bg-secondary text-white p-4 rounded-full font-bold'
          >
            تصفح جميع الاقسام
          </Link>
        </div>
      </div>
      <ArticleHome />
      <OfferHome />
      <DownloadApp />
    </div>
  );
};

export default HomePage;
