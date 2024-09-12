import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

function AppLayout() {
  return (
    <div dir={'rtl'}>
      <Header />
      <div className='flex flex-col w-full'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
