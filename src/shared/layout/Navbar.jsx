import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Hamburger from '../../assets/icons/hamburger.svg';
import Logo from '../../assets/icons/logo.svg';
import arrow from '../../assets/icons/left-arrow.svg';

const navLinks = [
  {
    name: 'الرئيسية',
    href: '/',
  },
  {
    name: 'الفعاليات',
    href: '/activites',
  },
  {
    name: 'أطبائنا',
    href: '/doctors',
  },
  {
    name: 'الأقسام',
    href: '/departments',
  },
  {
    name: 'مقالات طبية',
    href: '/articles',
  },
  {
    name: 'العروض',
    href: '/offers',
  },
  {
    name: 'الوظائف',
    href: '/employment',
  },
];
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className='navbar bg-white'>
      <div className='container flex items-center justify-between'>
        <div className='logo'>
          <img src={Logo} alt='' />
        </div>
        <div className='menu-icon' onClick={handleShowNavbar}>
          <img src={Hamburger} alt='' />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <div className='menu-icon flex w-full' onClick={handleShowNavbar}>
            <img src={Hamburger} alt='' className='items-end' />
          </div>
          <ul>
            {navLinks?.map((link, i) => (
              <li className='flex items-center' key={i}>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to={link?.href}
                >
                  {link?.name}
                </NavLink>
              </li>
            ))}
            <Link
              to={'/bookingPage'}
              className='nav-btn flex items-center gap-2'
            >
              احجز موعدًا
              <img src={arrow} alt='' />
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
