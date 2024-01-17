import React from 'react'

// import testimonialslider
import TestimonialSlider from '../components/TestimonialSlider';

const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-secondary'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[3rem] before:-right-[40rem] before:hidden before:lg:block'>What other people say</h2>
                <p className='subtitle'>
                Finance Enterpreneur Freelancer Finance Enterpreneur Freelancer Finance Enterpreneur Freelancer Finance Enterpreneur Freelancer Finance Enterpreneur Freelancer Finance Enterpreneur Freelancer
                </p>
            </div>
            <TestimonialSlider />
        </div>
    </section>
  )
}

export default Testimonials