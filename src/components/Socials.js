import React, { useState, useEffect } from 'react';

// import social data
import { social } from '../data';

const Socials = () => {
  const [text, setText] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
        return window.scrollY > 50 ? setText(true) : setText(false);
    });
  });

  return <ul className='flex space-x-1'>
    {social.map((item, index) => {
      return (
      <li className={`${text ? 'text-primary' : 'text-quaternary'} flex justify-center items-center transition-all duration-300 text-6xl`} key={index}>
        <a aria-label='social media link' className='text-lg p-4' href={item.href} target='_blank'>
          {item.icon}
        </a>
      </li>
    );  
  })}
  </ul>
}

export default Socials