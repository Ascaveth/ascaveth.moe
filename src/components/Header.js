import React from 'react';

import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';

const Header = () => {
  return <Header className='bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      <Link to={'/'}>
        <img src={Logo} alt=''/>
      </Link>
      <nav className='hidden lg:flex'>
        <Link to={'/'}>Home</Link>
      </nav>
    </div>
  </Header>;
};

export default Header;
