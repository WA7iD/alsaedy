// all icons
import calender from '../assets/icons/calemder.png';
import leftArrow from '../assets/icons/left-arrow.svg';
// all images
import doctorimage from '../assets/doctor.webp.png';
import article from '../assets/article.png';
import offer from '../assets/offer.png';
import map from '../assets/map.png';
import logoWhite from '../assets/icons/logoWhite.png';

export const images = { doctorimage, article, offer, map, logoWhite };
export const icons = { calender, leftArrow };

export const doctors = [
  {
    name: 'د. محمد الشيحة',
    department: 'طب جلدية',
    image: images.doctorimage,
  },
  {
    name: 'د. محمد الشيحة',
    department: 'طب جلدية',
    image: images.doctorimage,
  },
  {
    name: 'د. محمد الشيحة',
    department: 'طب جلدية',
    image: images.doctorimage,
  },
  {
    name: 'د. محمد الشيحة',
    department: 'طب جلدية',
    image: images.doctorimage,
  },
];

export const articles = [
  {
    image: images.article,
    title: 'عنوان الخبر',
    date: 'التاريخ',
    description: 'وصف الخبر',
  },
  {
    image: images.article,
    title: 'عنوان الخبر',
    date: 'التاريخ',
    description: 'وصف الخبر',
  },
  {
    image: images.article,
    title: 'عنوان الخبر',
    date: 'التاريخ',
    description: 'وصف الخبر',
  },
];

export const offers = [
  {
    image: images.offer,
    title: 'عنوان العرض',
    description: 'وصف العرض',
    price: '2000',
    previousPrice: '3000',
  },
  {
    image: images.offer,
    title: 'عنوان العرض',
    description: 'وصف العرض',
    price: '2000',
    previousPrice: '3000',
  },
  {
    image: images.offer,
    title: 'عنوان العرض',
    description: 'وصف العرض',
    price: '2000',
    previousPrice: '3000',
  },
];
