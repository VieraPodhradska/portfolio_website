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
          
      <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
        
        <div className='max-md:px-10 max-md:pt-20 z-20'>
  
          <div className='group bg-primary p-20 hover:shadow-md hover:shadow-[#9e9e9e] duration-300 mb-10 max-md:mb-72'>
            {/* <img alt='' className='' src='' alt='' /> */}
            <h1 className='text-2xl font-bold text-center text-quaternary group-hover:text-accent-hover duration-700 pb-2'>Ďakujem za vašu správu.</h1>
            <p className='text-center text-xl text-quaternary'>Najneskôr do 10 pracovných dní sa vám ozvem naspäť.</p>
            <p className='opacity-70 mt-14 -mb-16 text-sm text-center'>Vrátiť sa na domovskú stránku: <a aria-label='link back to homepage' href='https://vierapodhradska.sk/' className='underline'>https://vierapodhradska.sk</a></p>
          </div>
  
        </div>
  
        <div className='z-20 p-10 max-md:right-32'>
          <div className='flex max-xl:flex-col'>
            <p className='text-quaternary text-2xl flex items-center '>Viera Podhradská</p>
            <p className='text-quaternary px-5 flex items-center text-2xl max-xl:hidden'>|</p>
            <img alt='' className='select-none' src={LogoRed} />
          </div>
        </div>

      </div>

      {/* WU logos */}
      <div className='max-lg:hidden'>
        <img alt='' className='absolute top-96 right-50 w-1/3 select-none drag-none z-10 opacity-80' draggable="false" src={WuLogo} />
      </div>

      <div className='max-lg:hidden'>
        <img alt='' className='absolute bottom-[-40rem] left-10 h-full w-2/3 select-none drag-none z-20 opacity-95' draggable="false" src={WuLogo} />
      </div>

      <div className='lg:hidden'>
        <img alt='' className='absolute -bottom-[38rem] -right-48 h-full w-2/3 select-none drag-none z-0 opacity-95' draggable="false" src={WuLogo} />
      </div>

      {/* hollow objects */}
      <div className=''>
          <img alt='' className='absolute -top-80 -right-16 max-lg:bottom-48 max-lg:left-10 max-sm:bottom-56 max-sm:-left-4 select-none h-[30rem] z-10' draggable="false" src={WuObjectGR} />
      </div>

      <div className=''>
          <img alt='' className='absolute -top-72 right-12 max-lg:bottom-48 max-lg:left-0 max-sm:-left-20 select-none h-[30rem] z-0' draggable="false" src={WuObjectDRR} />
      </div>

      <div className=''>
          <img alt='' className='absolute top-36 -right-6 max-lg:left-10 max-sm:-left-4 max-sm:top-28 select-none h-[30rem] z-0' draggable="false" src={WuObjectRRH} />
      </div>

      <div className=''>
          <img alt='' className='absolute top-[-100rem] left-6 max-lg:bottom-48 max-lg:left-10 max-sm:bottom-56 max-sm:-left-4 select-none w-2/3 z-0 opacity-30' draggable="false" src={WuObjectG} />
      </div>

    </section>
  )
}

export default Redirect