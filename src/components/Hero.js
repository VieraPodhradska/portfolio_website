import React from 'react'

import WuObjectR from '../assets/img/wuestenrot_object_red.svg'
import WuObjectRH from '../assets/img/wuestenrot_object_red_hollow.svg'
import WuObjectG from '../assets/img/wuestenrot_object_grey.svg'
import WuObjectGR from '../assets/img/wuestenrot_object_grey_reverted.svg'
import WuObjectGRM from '../assets/img/wuestenrot_object_grey_reverted_mirrored.svg'
import WuObjectDR from '../assets/img/wuestenrot_object_dark_red.svg'
import WuObjectDRH from '../assets/img/wuestenrot_object_dark_red_hollow.svg'
import WuObjectRRH from '../assets/img/wuestenrot_object_red_red_hollow.svg'

import { HashLink } from 'react-router-hash-link'

// import profile picture
import ProfilePhoto from '../assets/img/hero0_cropped.png'

const Hero = () => {
  return (
    <section id='home' className='xl:h-[86vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden relative'>
        <div className='container mx-auto w-full'>

            {/* <div className=''>
                <img alt='' className='absolute top-7 left-[10.8rem] select-none h-96 z-0' draggable="false" src={WuObjectRRH} />
            </div> */}

            <div className='flex items-center h-full pt-8 max-lg:flex-col'>
                {/* left side */}
                <div className='lg:flex-1 flex flex-col items-center xl:items-start max-lg:order-2'>
                    <div className='text-lg text-accent mb-[22px] mt-20 font-bold space-y-1 max-sm:mt-0 max-lg:mt-28'>
                        <p className='-mb-1'>Vitajte na mojej business webstránke. </p>
                        <hr className='border-tertiary w-full' />
                        <hr className='border-accent-hover w-1/3 border' />
                    </div>
                    <h1 className='text-5xl leading-10 md:text-6xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] text-quaternary max-lg:text-center'> Ako finančný poradca ponúkam komplexné finančné služby.</h1>
                    <p className='pt-4 pb-8 md:pt-6 md:pb-8 max-w-[480px] text-lg text-center lg:text-left text-maintext'>Svoju prácu beriem ako poslanie a snažím sa ju vykonávať profesionálne, odborne, najlepšie ako viem, neustále sa vzdelávať a pracovať na sebe. Poskytujem komplexné finančné služby v oblasti poistenie, investovanie, poskytovanie úverov.</p>
                    <HashLink to="#contact" className='button btn btn-md bg-quaternary hover:bg-accent-hover md:btn-lg transition-all p-8 px-14 font-bold md:mb-4'>Kontakt</HashLink>
                </div>
                {/* right side */}
                <div className='max-xl:hidden flex lg:flex-1 justify-end items-end h-full'>
                    <img alt='' className='-mb-28 select-none h-[95%] w-[85%] z-10 ' src={ProfilePhoto} draggable='false' />
                </div>

                <div className='xl:hidden flex lg:flex-1 justify-end items-end h-full max-lg:order-1 max-lg:justify-center max-lg:items-center max-xl:items-center max-lg:my-36 max-sm:my-20 max-sm:mb-40 relative'>
                    <div className='border-2 border-tertiary before:absolute before:border before:border-accent-hover before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-full before:z-0 rounded-full h-72 w-72 max-sm:h-60 max-sm:w-60 max-xl:h-96 max-xl:w-96 absolute overflow-hidden flex justify-center'>
                        <img alt='' className='-mb-28 select-none h-full w-[75%] z-0' src={ProfilePhoto} draggable='false' />
                    </div>
                </div>

            </div>

            {/* <div className=''>
                <img alt='' className='absolute bottom-20 -right-52 select-none w-1/4' draggable="false" src={WuObjectR} />
            </div> */}

            <div className=''>
                <img alt='' className='absolute -bottom-40 -right-20 select-none h-96 z-0 max-md:hidden' draggable="false" src={WuObjectRRH} />
            </div>

        </div>
    </section>
  )
}

export default Hero;