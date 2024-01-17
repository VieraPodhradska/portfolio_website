import React from 'react'

import WuObjectR from '../assets/img/wuestenrot_object_red.svg'
import WuObjectRH from '../assets/img/wuestenrot_object_red_hollow.svg'
import WuObjectG from '../assets/img/wuestenrot_object_grey.svg'
import WuObjectGR from '../assets/img/wuestenrot_object_grey_reverted.svg'
import WuObjectGRM from '../assets/img/wuestenrot_object_grey_reverted_mirrored.svg'
import WuObjectDR from '../assets/img/wuestenrot_object_dark_red.svg'
import WuObjectDRH from '../assets/img/wuestenrot_object_dark_red_hollow.svg'


// import image
import Image from '../assets/img/about.png'

const About = () => {
  return (
    <section className='section bg-secondary overflow-hidden relative' id='about'>
        <div className='container mx-auto'>

            <div className=''>
                <img className='absolute top-0 -left-96 select-none w-1/2' draggable="false" src={WuObjectGR} />
            </div>

            <div className='flex max-lg:flex-col flex-row gap-24 max-xl:gap-8'>
                
                <div className='relative lg:flex-1 overflow-hidden max-xl:scale-75 max-lg:-mb-16 max-sm:-mb-6 z-10'>
                    <a href='#certificates'><p className='text-primary bg-accent-hover px-32 py-1 absolute text-center font-bold -rotate-45 top-7 -left-24 shadow-xl before:content-ribbonWLogo before:absolute before:z-0 before:opacity-50 before:scale-150 overflow-hidden before:left-20 hover:scale-110 duration-500 cursor-pointer hover:shadow-3xl'>Člen skupiny <br /> <span className='text-[#ffc800]'>ELITE</span></p></a>
                    <img className='object-cover h-full w-[566px] max-lg:w-full md:mx-auto lg:mx-0 z-10' src={Image} alt='' />
                </div>
                
                <div className='flex flex-col max-lg:items-center max-lg:text-center items-start text-left z-10 lg:flex-1'>
                    <div className='flex flex-col'>
                        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-o_mne relative before:absolute before:opacity-40 before:-top-[3rem] before:-right-[4rem] before:max-xl:scale-75 before:max-lg:right-10 before:max-sm:-right-12 text-quaternary space-y-1'>
                            <p>Viera Podhradská</p>
                            <hr className='border-tertiary w-full' />
                            <hr className='border-accent-hover w-1/3 border' />
                        </h2>
                        <p className='mb-4 font-bold '>Expert pre komplexné finančné služby</p>
                        <hr className='mb-8 opacity-5' />
                            
                            <div className='relative overflow-hidden max-lg:hidden'>
                                <p className=' mb-8 bg-accent-hover rounded-xl p-10 text-primary font-bold'>
                                    „Ak chcete byť úspešní, je to jednoduché. <br /> Stačí vedieť, čo robíte. <br /> Milovať to, čo robíte. <br /> A veriť v to, čo robíte." <br /><br /> <span className='inline-block'>&nbsp;&nbsp;&nbsp;&nbsp;<span className='max-xl:hidden'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Viera Podhradská</span>
                                </p>

                                <div className=''>
                                    <img className='absolute -bottom-8 right-12 select-none h-44 z-0' draggable="false" src={WuObjectGR} />
                                </div>
                                <div className=''>
                                    <img className='absolute -bottom-8 right-12 select-none h-44 z-0' draggable="false" src={WuObjectGR} />
                                </div>

                                <div className=''>
                                    <img className='absolute -bottom-20 right-6 select-none h-3/4 z-0' draggable="false" src={WuObjectGR} />
                                </div>
                            </div>

                            <div className='relative overflow-hidden px-20 max-md:px-10 lg:hidden'>
                                <div className='flex flex-col items-start mb-8 bg-accent-hover rounded-xl py-20 px-20 max-sm:px-10 text-primary font-bold leading-7'>
                                    <p>„Ak chcete byť úspešní, </p>
                                    <p> je to jednoduché.</p>
                                    <p>Stačí vedieť, čo robíte.</p>
                                    <p>Milovať to, čo robíte.</p> 
                                    <p>A veriť v to, čo robíte." </p>
                                    <span className='inline-block max-md:hidden'><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Viera Podhradská</span>
                                    <span className='inline-block md:hidden'><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Viera Podhradská</span>
                                </div>

                                <div className=''>
                                    <img className='absolute -bottom-20 right-40 h-3/4 max-md:right-28 select-none z-1 max-md:scale-75' draggable="false" src={WuObjectGR} />
                                </div>
                                <div className=''>
                                    <img className='absolute -bottom-20 right-40 h-3/4 max-md:right-28 select-none z-1 max-md:scale-75' draggable="false" src={WuObjectGR} />
                                </div>

                                <div className=''>
                                    <img className='absolute -bottom-44 right-32 h-5/6 max-md:right-20 max-md:-bottom-36 select-none z-0 opacity-70 max-md:scale-75' draggable="false" src={WuObjectGR} />
                                </div>
                            </div>

                        <p className='text-lg max-md:text-base leading-8 mt-5 text-maintext'>Vo finančnom sektore pôsobím už 15 rokov. Svoju prácu beriem ako poslanie a snažím sa  ju vykonávať profesionálne, odborne, najlepšie ako viem, neustále sa vzdelávať a pracovať na sebe. <br /> Nie vždy je to jednoduché, ale vďaka Wüstenrot poisťovni, Wüstenrot InHouse Broker, mojej riaditeľke Andrei Adamovičovej a hlavne vďaka vám, mojim úžasným klientom, sa mi darí žiť život podľa mojich predstáv.</p>
                    </div>
                    <a href='#contact' id='button' className='btn btn-md bg-quaternary hover:bg-accent-hover md:btn-lg transition-all p-8 px-14 font-bold mt-10'>Kontakt</a>
                </div>
            </div>

            <div className=''>
                <img className='absolute -bottom-20 -right-20 select-none h-3/4 z-0' draggable="false" src={WuObjectGR} />
            </div>

        </div>
    </section>
  )
}

export default About