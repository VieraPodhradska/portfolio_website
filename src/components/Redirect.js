import React from 'react'

import WuLogo from '../assets/img/wuestenrot_object_logo.svg'

import LogoRed from '../assets/img/w_inhouse_transparant_cropped.png';

import WuObjectGR from '../assets/img/wuestenrot_object_grey_reverted.svg'
import WuObjectRRH from '../assets/img/wuestenrot_object_red_red_hollow.svg'
import WuObjectDRR from '../assets/img/wuestenrot_object_dark_red_reverted.svg'
import WuObjectG from '../assets/img/wuestenrot_object_grey.svg'

const Redirect = () => {
  return (
    <section className='bg-[#e5e7eb] relative h-[100vh] z-[60] overflow-hidden'>
        <div className='container mx-auto '>
            <div className='group absolute top-1/4 left-1/3 bg-primary p-20 hover:shadow-2xl hover:shadow-accent-hover duration-700 z-10'>
                <img className='' src='' alt='' />
                <h1 className='text-2xl font-bold text-center text-quaternary group-hover:text-accent-hover duration-700'>Ďakujem za vašu správu.</h1>
                <p className='text-center text-xl text-quaternary'>Najneskôr do 14 dní sa vám ozvem naspäť.</p>
                <p className='opacity-70 mt-14 -mb-16 text-sm text-center'>Vrátiť sa na domovskú stránku: <a href='http://localhost:3000' className='underline'>http://localhost:3000</a></p>
            </div>
        </div>

        <div className=''>
          <img className='absolute top-96 right-50 w-1/3 select-none drag-none z-10 opacity-80' draggable="false" src={WuLogo} />
        </div>

        <div className=''>
          <img className='absolute bottom-[-35rem] left-10 h-full w-2/3 select-none drag-none z-20 opacity-95' draggable="false" src={WuLogo} />
        </div>

        <div className='max-md:order-1 z-10 absolute bottom-10 right-20'>
          <a href='#home' className='flex max-md:flex-col'>
            <p className='text-quaternary text-2xl flex items-center '>Viera Podhradská</p>
            <p className='text-quaternary px-5 flex items-center text-2xl max-md:hidden'>|</p>
            <img className='select-none' src={LogoRed} alt='' />
          </a>
        </div>

        <div className=''>
            <img className='absolute -top-80 -right-16 max-lg:bottom-48 max-lg:left-10 max-sm:bottom-56 max-sm:-left-4 select-none h-[30rem] z-10' draggable="false" src={WuObjectGR} />
        </div>

        <div className=''>
            <img className='absolute -top-72 right-12 max-lg:bottom-48 max-lg:left-0 max-sm:-left-20 select-none h-[30rem] z-0' draggable="false" src={WuObjectDRR} />
        </div>

        <div className=''>
            <img className='absolute top-36 -right-6 max-lg:left-10 max-sm:-left-4 max-sm:top-28 select-none h-[30rem] z-0' draggable="false" src={WuObjectRRH} />
        </div>


        <div className=''>
            <img className='absolute top-[-100rem] left-6 max-lg:bottom-48 max-lg:left-10 max-sm:bottom-56 max-sm:-left-4 select-none w-2/3 z-0 opacity-30' draggable="false" src={WuObjectG} />
        </div>

    </section>
  )
}

export default Redirect