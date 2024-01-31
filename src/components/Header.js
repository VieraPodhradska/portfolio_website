import React, { useState, useEffect } from 'react';

import WuObjectGR from '../assets/img/wuestenrot_object_grey_reverted.svg'
import WuObjectR from '../assets/img/wuestenrot_object_red.svg'
import WuObjectRRH from '../assets/img/wuestenrot_object_red_red_hollow.svg'
import WuObjectRH from '../assets/img/wuestenrot_object_red_hollow.svg'
import WuObjectG from '../assets/img/wuestenrot_object_grey.svg'
import WuObjectDRH from '../assets/img/wuestenrot_object_dark_red_hollow.svg'
import WuObjectDRR from '../assets/img/wuestenrot_object_dark_red_reverted.svg'

// import components
import LogoRed from '../assets/img/w_inhouse_transparant_cropped.png';
import LogoWhite from '../assets/img/w_inhouse_red_transparant_cropped.png';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Socials from './Socials';

const Header = () => {
    const [bg, setBg] = useState(false);
    const [source, setSource] = useState("");

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });
    
    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            return window.scrollY > 50 ? setSource(LogoWhite) : setSource(LogoRed);
        });
    });

  return (
    <header className={`${bg ? 'bg-tertiary h-20 border-b-2 border-accent-hover shadow-lg overflow-hidden z-50' : 'h-24 z-10'} flex items-center fixed top-0 w-full text-quaternary transition-all duration-300 `}>
        <div className='container mx-auto h-full flex items-center justify-between relative'>
          
          <div className=''>
            <img alt='' className='absolute bottom-8 -left-40 select-none h-96 z-10' draggable="false" src={WuObjectGR} />
          </div>

          <div className=''>
            <img alt='' className='absolute bottom-4 -left-52 select-none h-96 z-0' draggable="false" src={WuObjectDRR} />
          </div>

          <div className=''>
            <img alt='' className='absolute top-7 -left-60 select-none h-96 z-0' draggable="false" src={WuObjectRRH} />
          </div>

          {/* logo */}
          <a aria-label='homepage logo' href='/' className='flex max-sm:flex-col'>
            <p className={`${bg ? 'text-primary' : 'text-quaternary'} text-2xl flex items-center transition-all duration-300 max-sm:text-xl max-sm:-mb-2`}>Viera Podhradská</p>
            <p className={`${bg ? 'text-primary' : 'text-quaternary'} px-5 flex items-center text-2xl transition-all duration-300 max-sm:hidden`}>|</p>
            <img alt='' className='transition-all duration-300 select-none max-sm:scale-75 max-sm:-mb-2' src={source} />
          </a>
          {/* nav */}
          <div className='hidden xl:block'>
            <Nav />
          </div>
          {/* socials */}
          <div className='hidden xl:block'>
            <Socials />
          </div>
          {/* nav mobile */}
          <div className='xl:hidden absolute right-20 z-50'>
            <NavMobile />
          </div>

          <div className=''>
            <img alt='' className='absolute -bottom-24 -right-14 select-none h-40 w-40 z-20' draggable="false" src={WuObjectR} />
          </div>

          <div className=''>
            <img alt='' className='absolute top-2 -right-12 select-none h-40 w-40 z-10' draggable="false" src={WuObjectG} />
          </div>
          <div className=''>
            <img alt='' className='absolute top-2 -right-12 select-none h-40 w-40 z-10' draggable="false" src={WuObjectG} />
          </div>

          <div className=''>
            <img alt='' className='absolute top-5 -right-10 select-none h-40 w-40 z-0' draggable="false" src={WuObjectDRH} />
          </div>

          <div className=''>
            <img alt='' className='absolute top-7 -right-20 select-none h-40 w-40 z-30' draggable="false" src={WuObjectDRH} />
          </div>

        </div>

        
    </header>
  );
};

export default Header;