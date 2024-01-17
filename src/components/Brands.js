import React from 'react'

import WuObjectR from '../assets/img/wuestenrot_object_red.svg'
import WuObjectRH from '../assets/img/wuestenrot_object_red_hollow.svg'
import WuObjectG from '../assets/img/wuestenrot_object_grey.svg'
import WuObjectGR from '../assets/img/wuestenrot_object_grey_reverted.svg'
import WuObjectGRM from '../assets/img/wuestenrot_object_grey_reverted_mirrored.svg'
import WuObjectDR from '../assets/img/wuestenrot_object_dark_red.svg'
import WuObjectDRH from '../assets/img/wuestenrot_object_dark_red_hollow.svg'


// import brands data
import { brands } from '../data'

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center overflow-hidden'>
        <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly relative'>
            
            <div className=''>
                <img className='absolute top-0 left-0 select-none' draggable="false" src={WuObjectG} />
            </div>
            
            {brands.map((brand, index)=> {
                return (
                    <div className='w-full flex justify-center z-10' key={index}>
                        <img className='max-h-20 select-none' src={brand.img} alt='' />
                    </div>
                )
            })}

            <div className=''>
                <img className='absolute -top-96 left-32 select-none' draggable="false" src={WuObjectGRM} />
            </div>

            <div className=''>
                <img className='absolute -top-80 right-20 select-none max-lg:hidden' draggable="false" src={WuObjectGR} />
            </div>

            <div className=''>
                <img className='absolute -top-20 right-0 select-none' draggable="false" src={WuObjectR} />
            </div>

        </div>
    </section>
  )
}

export default Brands