import React from 'react';
import SectionHeader from '../../shared/SectionHeader';
import ActivitesCard from '../cards/ActivitesCard';
import activiteImg from '../../assets/dummy/activity.png';
import arrow from '../../assets/icons/left-arrow.svg';

import { Link } from 'react-router-dom';
const data = [
  {
    header: 'عنوان الفاعلية',
    content:
      ' نيو كلينيك خبراء الرعاية الصحية المنزلية، نوفر لك مناخ ملائم للرعاية الصحية الأمنة',
    img: activiteImg,
    date: '2022-3-3',
    href: activiteImg,
    light: true,
  },
  {
    header: 'عنوان الفاعلية',
    content:
      'نيو كلينيك خبراء الرعاية الصحية المنزلية، نوفر لك مناخ ملائم للرعاية الصحية الأمنة',
    img: activiteImg,
    date: '2023-3-4',
    href: '',
    light: true,
  },
];

export default function ActivitesHome() {
  return (
    <section style={{ padding: '0' }} className='container mb-[80px]'>
      <div className=' py-[60px] px-[30px] relative  overflow-hidden mt-[40px] rounded-[40px] bg-primary'>
        <SectionHeader
          header={'الفعاليات'}
          title={'سنعرض لكم اخبار مستشفي الصاعدي'}
          light={true}
        />
        <div className='flex justify-center gap-10'>
          {data?.map((e, i) => (
            <div className='w-full md:w-[45%]'>
              <ActivitesCard key={i} {...e} />
            </div>
          ))}
        </div>

        <Link className='nav-btn mx-auto mt-[40px] flex w-fit items-center gap-2'>
          عرض جميع الفعاليات <img src={arrow} alt='' />
        </Link>
      </div>
    </section>
  );
}
