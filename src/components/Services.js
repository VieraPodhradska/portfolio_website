import React from 'react'

import WuObjectR from '../assets/img/wuestenrot_object_red.svg'
import WuObjectRH from '../assets/img/wuestenrot_object_red_hollow.svg'
import WuObjectG from '../assets/img/wuestenrot_object_grey.svg'
import WuObjectGR from '../assets/img/wuestenrot_object_grey_reverted.svg'
import WuObjectGRM from '../assets/img/wuestenrot_object_grey_reverted_mirrored.svg'
import WuObjectDR from '../assets/img/wuestenrot_object_dark_red.svg'
import WuObjectDRH from '../assets/img/wuestenrot_object_dark_red_hollow.svg'

import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section bg-primary overflow-hidden relative pb-60'>
        <div className='container mx-auto'>

            <div className=''>
                <img className='absolute top-0 -left-96 select-none w-1/2' draggable="false" src={WuObjectGR} />
            </div>

            <div className='w-full flex flex-col items-center '>
                <h2 className='section-title before:content-sluzby relative before:absolute before:opacity-40 before:-top-[3rem] before:-right-[20rem] before:max-lg:-right-52 before:max-lg:scale-75 before:max-sm:-right-16 text-quaternary space-y-1 max-lg:mt-10 z-10'>
                    <p className='mb-1'>Poskytujem komplexné finančné služby</p>
                    <hr className='border-tertiary w-full' />
                    <hr className='border-accent-hover w-1/3 border' />
                </h2>

                <p className='subtitle text-lg max-md:text-base leading-8 mt-3 text-maintext mb-32 z-10'>Komplexné finančné služby v oblasti poistenie, investovanie, poskytovanie úverov...</p>
            </div>
            {/* item grid */}
            <div className='grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-8 max-lg:px-20 max-xl:gap-10'>
                {services.map((service, index) => {
                    const { icon, name, description } = service;
                    return (
                        <div className='group bg-secondary p-6 border shadow-md hover:shadow-accent-hover duration-1000 z-10 max-xl:pb-10' key={index}>
                            {/* icon */}
                            <div className='text-tertiary rounded-sm flex justify-start items-center py-6 pb-24 text-6xl'>{icon}</div>
                            <h4 className='text-2xl font-medium mb-2 text-quaternary group-hover:text-tertiary duration-500 max-lg:pt-10'>{name}</h4>
                            <p className='text-maintext'>{description}</p>
                        </div>
                    )
                })}
            </div>

            <div className=''>
                <img className='absolute -bottom-20 -right-20 select-none h-3/4 z-0' draggable="false" src={WuObjectGR} />
            </div>

            <div className=''>
                <img className='absolute -bottom-40 right-0 select-none h-96 z-0' draggable="false" src={WuObjectDR} />
            </div>

            <div className=''>
                <img className='absolute -top-72 -left-32 select-none h-[35rem] z-0 max-lg:opacity-60 max-lg:-left-40 max-lg:top-96' draggable="false" src={WuObjectRH} />
            </div>

            <div className=''>
                <img className='absolute -bottom-56 right-10  select-none h-96 z-0' draggable="false" src={WuObjectRH} />
            </div>

        </div>
    </section>
  )
}

export default Services