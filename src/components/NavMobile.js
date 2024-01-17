import React, {useState} from 'react';

// import navigation data
import { navigation } from '../data';
import { social } from '../data';

// import icons
import { XIcon } from '@heroicons/react/outline';
import { MenuAlt3Icon } from '@heroicons/react/outline';

// import components
import Socials from './Socials';

// import framer motion
import { motion } from 'framer-motion';

// import link
import { Link } from 'react-scroll';

import WuObjectGR from '../assets/img/wuestenrot_object_grey_reverted.svg'
import WuObjectR from '../assets/img/wuestenrot_object_red.svg'
import WuObjectRRH from '../assets/img/wuestenrot_object_red_red_hollow.svg'
import WuObjectRH from '../assets/img/wuestenrot_object_red_hollow.svg'
import WuObjectG from '../assets/img/wuestenrot_object_grey.svg'
import WuObjectDRH from '../assets/img/wuestenrot_object_dark_red_hollow.svg'
import WuObjectDRR from '../assets/img/wuestenrot_object_dark_red_reverted.svg'

import WuLogo from '../assets/img/wuestenrot_object_logo.svg'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  // framer motion variants
  const circleVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    }
  }

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      }
    }
  }
  
  return (
    <nav className='relative'>
      
      {/* menu icon */}
      <div onClick={() => setIsOpen(true)} className='cursor-pointer text-quaternary'>
        <MenuAlt3Icon className='w-8 h-8' />
      </div>

      {/* circle */}
      <motion.div variants={circleVariants} initial='hidden' animate={isOpen ? 'visible' : 'hidden'} className='w-4 h-4 rounded-full bg-tertiary fixed top-0 right-0 z-[60]'></motion.div>

      {/* menu */}
      <motion.ul variants={ulVariants} initial='hidden' animate={isOpen ? 'visible' : ''} className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden z-[60] gap-4`}>

        {/* <div className=''>
          <img className='absolute -top-72 left-24 select-none h-2/4' draggable="false" src={WuObjectGR} />
        </div>

        <div className=''>
          <img className='absolute -top-36 left-48 select-none h-2/5' draggable="false" src={WuObjectGR} />
        </div> */}

        <div className=''>
          <img className='absolute -top-48 max-md:left-0 left-20 select-none h-2/5 rotate-180' draggable="false" src={WuLogo} />
        </div>

        {/* close icon */}
        <div onClick={() => setIsOpen(false)} className='cursor-pointer absolute top-7 right-48 max-md:right-20 max-sm:right-16 text-primary'>
          <XIcon className='w-8 h-8' />
        </div>
        {
          navigation.map((item, index)=> {
            return (
            <li key={index} className='mb-8'>
              <Link onClick={() => setIsOpen(false)} to={item.href} smooth={true} duration={500} offset={-70} className='text-xl text-primary cursor-pointer capitalize hover:text-accent-hover duration-300 p-4 z-20'>{item.name}</Link>
            </li>
            );
          })
        }

        <div className='flex space-x-16 px-16 py-6 absolute bottom-16'>
          {social.map((item, index) => {
              const { icon, href } = item;
              return <a href={href} key={index} className='text-primary text-xl z-20' target='_blank'>{icon}</a>
          })}
        </div>

        <div className=''>
          <img className='absolute bottom-52 -right-10 max-sm:-right-32 select-none h-96 z-10' draggable="false" src={WuObjectGR} />
        </div>

        <div className=''>
          <img className='absolute bottom-40 right-10 max-sm:-right-16 select-none h-96 z-0' draggable="false" src={WuObjectDRR} />
        </div>

        <div className=''>
          <img className='absolute -bottom-40 -right-16 select-none h-96 z-0' draggable="false" src={WuObjectRRH} />
        </div>

      </motion.ul>

      
    </nav>
  )
}

export default NavMobile;