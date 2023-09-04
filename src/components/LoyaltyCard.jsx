import React from 'react';

const LoyaltyCard = () => {
  return (
    <div className='ml-8 w-full bg-gray-100 px-8 py-6 rounded'>
      <div className='bg-red-950 w-full rounded px-6 py-4 flex items-center justify-between'>
        <div>
          <p className='text-white font-semibold text-sm'>PAY AND SAVE MORE WITH LOYALTY CREDITS</p>
          <p className='text-yellow-400 text-sm mt-6'>Your currently redeemable loyalty points are:</p>
          <h1 className='text-yellow-400 font-bold text-4xl mb-1'>350 = $12</h1>
        </div>
        <img src="/wallet 3d 3.png" alt="Loyalty Rewards" className="w-25 h-25" />
      </div>
      <div className='mt-6 flex'>
        <div className='border border-gray-200 rounded w-1/4 p-3 bg-white'>
          <img src="/Frame 36.png" alt="" className='w-16 h-16 mb-3 mx-auto' />
          <p className='text-black text-sm text-center'>Unlock Extra Discount & Low Price</p>
        </div>
        <div className='border border-gray-200 rounded w-1/4 p-4 ml-3 bg-white'>
          <img src="/loyalty point coin 1.png" alt="" className='w-16 h-16 mb-3 mx-auto' />
          <p className='text-black text-sm text-center'>Extra Credits as DotBrand Loyalty Points</p>
        </div>
        <div className='border border-gray-200 rounded w-1/4 p-4 ml-3 bg-white'>
          <img src="/Frame 37.png" alt="" className='w-16 h-16 mb-3 mx-auto' />
          <p className='text-black text-sm text-center'>Earn Points on Festivals and Holidays</p>
        </div>
        <div className='border border-gray-200 rounded w-1/4 p-3 ml-4 bg-white'>
          <img src="/Frame 38.png" alt="" className='w-16 h-16 mb-3 mx-auto' />
          <p className='text-black text-sm text-center'>Enjoy Benefits at DotBrand Retail Stores</p>
        </div>
      </div>
    </div>
  );
}

export default LoyaltyCard;
