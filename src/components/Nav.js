import React, { useState, useEffect } from 'react';

// import navigation data
import { navigation } from '../data';

// import Link
import { Link } from 'react-scroll';

const Nav = () => {
  const [text, setText] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
        return window.scrollY > 50 ? setText(true) : setText(false);
    });
  });

  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, index)=> {
          return (
            <li className={`${text ? 'text-primary' : 'text-quaternary'} hover:text-accent-hover cursor-pointer transition-all duration-300 p-2 text-lg select-none`} key={index}>
              <Link to={item.href} activeClass='active' activeStyle={{color: '#fff', backgroundColor: '#A50B0F', padding: '12px', borderRadius: '10px'}} spy={true} smooth={true} duration={500} offset={-70} className='transition-all duration-300'>{item.name}</Link>
            </li>


          )
        })}
      </ul>
    </nav>
  )
}

export default Nav