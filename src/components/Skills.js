import React from 'react'

import WuObjectR from '../assets/img/wuestenrot_object_red.svg'
import WuObjectRH from '../assets/img/wuestenrot_object_red_hollow.svg'
import WuObjectDR from '../assets/img/wuestenrot_object_dark_red.svg'
import WuObjectDRH from '../assets/img/wuestenrot_object_dark_red_hollow.svg'
import WuObjectG from '../assets/img/wuestenrot_object_grey.svg'
import WuObjectGR from '../assets/img/wuestenrot_object_grey_reverted.svg'
import WuObjectGRM from '../assets/img/wuestenrot_object_grey_reverted_mirrored.svg'

// // import skills data
// import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-20 overflow-hidden'>
        <div className='container mx-auto relative'>
            {/* <div className='grid grid-cols-8 md:grid-flow-row'>
                {skills.map((skill, index)=> {
                    return (
                        <div className='flex items-center justify-center' key={index}>
                            <img src={skill.image} alt='' />
                            
                        </div>
                    )
                })}
            </div> */}

            {/* <div className=''> 
                <img className='absolute top-0 right-0 select-none' draggable="false" src={WuObjectG} />
            </div>

            <div>
                <p>Skills</p>
            </div>

            <div className=''>
                <img className='absolute -top-40 left-0 max-h-72 select-none' draggable="false" src={WuObjectGR} />
            </div>

            <div className=''>
                <img className='absolute top-0 left-80 select-none' draggable="false" src={WuObjectGRM} />
            </div>

            <div className=''>
                <img className='absolute top-0 left-80 select-none' draggable="false" src={WuObjectDRH} />
            </div>

            <div className=''>
                <img className='absolute top-0 left-0 select-none' draggable="false" src={WuObjectRH} />
            </div> */}


            <div className=''>
                <img className='absolute top-0 left-0 select-none' draggable="false" src={WuObjectG} />
            </div>

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

export default Skills