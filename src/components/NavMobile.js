import React, { useState } from 'react';
// import nav data
import { navData } from '../data';
// import components
import Socials from './Socials';

const NavMobile = (props) => {
  // destructure nav data
  const { items } = navData;

   
  
  return (
    
     <nav className=' w-full min-h-[500px]  xs:h-full  flex flex-col justify-around xs:justify-evenly overflow-hidden'> 
      
      <ul className='flex flex-col justify-center items-center gap-y-4 sm:gap-y-6  sm:py-6  sm:mb-8'>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a  className='text-2xl font-primary uppercase' href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className='text-2xl'>
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
