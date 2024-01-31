import React from 'react'

import LogoRed from '../assets/img/w_inhouse_transparant_cropped.png';

import WuObjectGR from '../assets/img/wuestenrot_object_grey_reverted.svg'
import WuObjectRRH from '../assets/img/wuestenrot_object_red_red_hollow.svg'
import WuObjectDRR from '../assets/img/wuestenrot_object_dark_red_reverted.svg'

// import social data
import { social } from '../data'


const Footer = () => {
  return (
    <footer className='bg-primary py-12 relative overflow-hidden'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                
                <div className=''>
                    <img alt='' className='absolute bottom-12 left-52 max-lg:bottom-48 max-lg:left-10 max-sm:bottom-56 max-sm:-left-4 select-none h-96 z-10' draggable="false" src={WuObjectGR} />
                </div>

                <div className=''>
                    <img alt='' className='absolute bottom-8 left-40 max-lg:bottom-48 max-lg:left-0 max-sm:-left-20 select-none h-96 z-0' draggable="false" src={WuObjectDRR} />
                </div>

                <div className=''>
                    <img alt='' className='absolute top-16 left-64 max-lg:left-10 max-sm:-left-4 max-sm:top-28 select-none h-96 z-0' draggable="false" src={WuObjectRRH} />
                </div>
                
                {/* social icons */}
                <div className='flex max-md:order-2 space-x-1 items-center justify-center z-10'>
                    {social.map((item, index) => {
                        const { icon, href } = item;
                        return <a aria-label='social media link' href={href} key={index} className='text-accent text-lg p-4' target='_blank'>{icon}</a>
                    })}
                </div>

                {/* logo */}
                <div className='max-md:order-1 z-10'>
                    <a aria-label='homepage logo' href='/' className='flex max-md:flex-col'>
                        <p className='text-quaternary text-2xl flex items-center'>Viera Podhradská</p>
                        <p className='text-quaternary px-5 flex items-center text-2xl max-md:hidden'>|</p>
                        <img alt='' className='select-none' src={LogoRed} />
                    </a>
                </div>

                {/* copyright */}
                <p className='max-md:order-3 z-10'>&copy; Viera Podhradská. Všetky práva vyhradené.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer