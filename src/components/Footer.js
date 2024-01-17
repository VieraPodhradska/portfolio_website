import React from 'react'

// import social data
import { social } from '../data'

// import logo
import Logo from '../assets/img/logo.svg'

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                {/* social icons */}
                <div className='flex space-x-6 items-center justify-center'>
                    {social.map((item, index) => {
                        const { icon, href } = item;
                        return <a href={href} key={index} className='text-accent text-base'>{icon}</a>
                    })}
                </div>

                {/* logo */}
                <div>
                    <img src={Logo} alt='' />
                </div>

                {/* copyright */}
                <p>&copy; Voornaam Achternaam. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer