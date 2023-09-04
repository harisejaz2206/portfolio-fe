import React from 'react';

const SubHero = ({ title, subTitle }) => {
  return (
    <div className='h-48 w-full bg-red-950 flex items-center justify-center'>
      <img
        className='opacity-60 absolute left-0'
        src="/Cannabis-leaf-PNG 2.png" 
        alt="Image 1" 
      />
      <div className='text-center'>
        <h2 className="text-yellow-400 text-3xl font-bold">{title}</h2>
        <p className='text-white text-md mt-3'>{subTitle}</p>
      </div>
      <img 
        className='opacity-60 absolute right-0'
        src="/Cannabis-leaf-PNG 3.png" 
        alt="Image 2" 
      />
    </div>
  );
}

export default SubHero;
