import React from 'react';
import { AiFillMedicineBox } from 'react-icons/ai'

const Center = () => {
  return (
    <div className='w-full h-80 bg-red-950 mt-12 flex justify-between'>
     <img 
        className='h-80 '
        src="/image 15.png" alt="" 
    />
    <div className='mt-16'>
        <AiFillMedicineBox size={50} className='h-20 text-yellow-400 ml-44'/>
    <p className='text-white font-semibold text-md text-center'>
        Discover DotBrand, the ultimate white label application for <br/>
        pharmacies. Streamline operations, enhance customer <br/>
        experience and boost your online presence.
    </p>
    </div>
    
    <img
        className='flex' 
        src="/image 16.png" alt="" />
    </div>
  );
}

export default Center;
