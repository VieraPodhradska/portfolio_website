import React from 'react'

// import profile picture
import ProfilePhoto from '../assets/img/moon_random.png'

const Hero = () => {
  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className='container mx-auto w-full'>
            <div className='flex items-center h-full pt-8'>
                {/* left side */}
                <div className='flex-1 flex flex-col items-center lg:items-start'>
                    <p className='text-lg text-accent mb-[22px]'>Welcome to my business website, I offer financial services.</p>
                    <h1 className='text-4xl leading-10 md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'> My services are <br/> Financial accounting, <br/> support.</h1>
                    <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>Welcome to my business website Welcome to my business website Welcome to my business website Welcome to my business website Welcome to my business website Welcome to my business website</p>
                    <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>Visit me / Work with me</button>
                </div>
                {/* right side */}
                <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
                    <img src={ProfilePhoto} alt='' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;