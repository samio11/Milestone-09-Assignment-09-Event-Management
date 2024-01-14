import React from 'react';
import Marquee from 'react-fast-marquee';
import { BiSolidOffer } from "react-icons/bi";

const SpecialEvents = () => {
    return (
        <div className='flex justify-center items-center mt-5'>
            <div className='w-[10%] md:w-[20%] flex justify-start md:justify-end'>
            <BiSolidOffer className='text-3xl text-yellow-500'/>
            </div>
            <div className='w-[90%] md:w-[80%]'>
              <Marquee>
               <p className='text-yellow-500 font-semibold' > In First Purchase, There will be 10% Off !!!</p>
              </Marquee>
            </div>
        </div>
    );
};

export default SpecialEvents;