import React from 'react'

// import image
import Image from '../assets/img/moon_random.png'

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-24'>
                <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt='' />
                <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                    <div className='flex flex-col'>
                        <h2 className=' text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[3rem] before:-right-[4rem] before:hidden before:lg:block'>Voornaam Achternaam</h2>
                        <p className='mb-4'>Finance Enterpreneur Freelancer</p>
                        <hr className='mb-8 opacity-5' />
                        <p className=' mb-8'>
                        Finance Enterpreneur Freelancer <br /> Finance Enterpreneur Freelancer Finance Enterpreneur Freelancer Finance Enterpreneur Freelancer Finance Enterpreneur Freelancer
                        </p>
                    </div>
                    <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>Contact me</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About