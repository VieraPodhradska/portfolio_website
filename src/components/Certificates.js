import React from 'react'

import { certs } from '../data'

import WuObjectGR from '../assets/img/wuestenrot_object_grey_reverted.svg'
import WuObjectDR from '../assets/img/wuestenrot_object_dark_red.svg'
import WuObjectRH from '../assets/img/wuestenrot_object_red_hollow.svg'

const Certificates = () => {
  return (
    <section id='certificates' className='section bg-primary overflow-hidden relative pb-60 scroll-mt-16'>
        <div className='container mx-auto'>
            
            <div className=''>
                <img alt='' className='absolute top-0 -left-96 select-none w-1/2 z-0' draggable="false" src={WuObjectGR} />
            </div>

            <div className='flex flex-col items-center gap-5 z-10'>
                <h1 className='text-4xl before:content-uspechy relative before:absolute before:opacity-40 before:-top-[4rem] before:-right-[30rem] before:max-xl:-right-96 before:max-lg:scale-75 before:max-lg:-right-48 before:max-sm:-right-28 text-quaternary space-y-1 max-lg:mt-10'>
                    <p className=''>Ocenenia a certifikáty</p>
                    <hr className='border-tertiary w-full' />
                    <hr className='border-accent-hover w-1/3 border' />
                </h1>

                <p className='text-maintext text-lg'>Prehliadnite si moje ocenenia a certifikáty.</p>
            </div>
            
            <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-20 max-lg:gap-16 py-20 z-10 max-lg:px-20 max-md:px-10'>
                {certs.map( (cert, index) => {
                    const { img, name, description } = cert;
                    return (
                        <div className='group bg-primary flex flex-col gap-5 border shadow-md hover:shadow-accent-hover duration-1000 p-10 max-sm:p-4 max-sm:pt-20 z-10 min-h-[40rem] max-lg:items-center overflow-hidden' key={index}>
                            <img alt='' className='max-h-lg max-w-lg max-lg:w-full object-cov select-none' src={img} />
                            <h1 className='text-xl text-quaternary group-hover:text-tertiary duration-500'>{name}</h1>
                            <p className='opacity-70'>{description}</p>
                        </div>
                    )
                })}
            </div>

            <div className=''>
                <img alt='' className='absolute -bottom-20 -right-20 select-none h-3/4 z-0' draggable="false" src={WuObjectGR} />
            </div>

            <div className=''>
                <img alt='' className='absolute -bottom-40 right-0 select-none h-96 z-0' draggable="false" src={WuObjectDR} />
            </div>

            <div className=''>
                <img alt='' className='absolute -top-72 -left-32 select-none h-[35rem] z-0 max-lg:opacity-60 max-lg:-left-40 max-lg:top-96' draggable="false" src={WuObjectRH} />
            </div>

            <div className=''>
                <img alt='' className='absolute -bottom-56 right-10  select-none h-96 z-0' draggable="false" src={WuObjectRH} />
            </div>

        </div>
    </section>
  )
}

export default Certificates