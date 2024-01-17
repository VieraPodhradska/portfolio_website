import React from 'react'

// import components
import Projects from '../components/Projects'

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[3rem] before:-right-[30rem] before:hidden before:lg:block'>My latest work</h2>
                <p className='subtitle'>
                Finance Enterpreneur Freelancer Finance Enterpreneur Freelancer Finance Enterpreneur Freelancer Finance Enterpreneur Freelancer Finance Enterpreneur Freelancer Finance Enterpreneur Freelancer
                </p>
            </div>
            <Projects />
        </div>
    </section>
  )
}

export default Portfolio