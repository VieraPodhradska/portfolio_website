import React, { useState, useEffect } from 'react'

// import link
import { Link, animateScroll as scroll } from 'react-scroll';

// import icon
import { ChevronUpIcon } from '@heroicons/react/outline'

const ToTopButton = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 600 ? setShow(true) : setShow(false);
        })
    })

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        show && (
            <button onClick={()=> scrollToTop()} className='bg-tertiary w-14 h-14 hover:bg-accent-hover text-primary rounded-full fixed right-24 bottom-24 max-md:right-10 max-md:bottom-10 cursor-pointer flex justify-center items-center transition-all shadow-xl border-accent-hover border z-40'>
                <ChevronUpIcon className='w-6 h-6' />
            </button>
        )
    )
}

export default ToTopButton