import React from 'react';

const OrderDetailCard = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 bg-gray-100 py-4 px-2 sm:px-6 w-full ml-8'>
      <div className='border border-gray-300 rounded py-2 px-4 bg-white '>
        <div className='flex text-sm'>
          <p className='text-gray-500'>Order ID:</p>
          <p className='font-semibold text-red-900 ml-1'>CPY-12254412-2157788</p>
        </div>
        <div className='flex text-sm'>
          <p className='text-gray-500'>Placed On:</p>
          <p className='font-semibold text-gray-500 ml-1'>12th May 2023</p>
        </div>
        <div className='flex text-sm'>
          <p className='text-gray-500'>Outlet Address:</p>
          <p className='font-semibold text-gray-500 ml-1'>Comsats University Islamabad</p>
        </div>
        <hr className='w-full border-gray-300 my-2' />
        <div className='flex items-center justify-between py-4'>
          <div className='flex items-center'>
            {/* Flex container for image and text */}
            <img src='/diuretics.png' alt='' className='w-16 h-16 bg-gray-100 mr-2' />
            <div className='flex flex-col'>
              <h2 className='font-semibold m-0'>Diuretics</h2>
              <h3 className='text-gray-500 text-sm m-0'>30 ml</h3>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='text-right'>
              <h2 className='font-semibold '>1 X $24.99</h2>
            </div>
          </div>
        </div>
        <hr className='w-full border-gray-300 my-2' />
        <div className='px-6 py-5'>
        <div className='flex items-center justify-between text-sm'>
            <h2 className='text-gray-400 font-semibold'>Subtotal (4 item)</h2>
            <h2>$12.55</h2>
        </div>
        <div className='flex items-center justify-between text-sm mt-4'>
            <h2 className='text-gray-400 font-semibold'>Standard Tax (5%)</h2>
            <h2>$12.55</h2>
        </div>
        </div>
        <hr className='w-full border-gray-300 my-2' />
        <div className='flex items-center justify-between text-sm mt-4 px-6'>
            <h2 className='text-gray-600 font-semibold'>Total</h2>
            <h2 className='font-semibold'>$15.99</h2>
        </div>
      </div>

      <div className='bg-white border py-4 px-4 border-gray-300 mt-4 sm:mt-0 rounded sm:ml-2'>
        <h2 className='font-semibold'>Billing Address</h2>
        <hr className='w-full border-gray-300 my-2' />
        <div className='text-sm'>
            <p className='text-gray-400'>Outlet Name:</p>
            <p className='font-semibold'>DotBrand-Lahore</p>
        </div>
        <div className='text-sm mt-2'>
            <p className='text-gray-400'>Customer Name:</p>
            <p className='font-semibold'>Michael Clarke</p>
        </div>
        <div className='text-sm mt-2'>
            <p className='text-gray-400'>Email:</p>
            <p className='font-semibold'>michael1122@gmail.com</p>
        </div>
        <div className='text-sm mt-2'>
            <p className='text-gray-400'>Phone Number:</p>
            <p className='font-semibold'>+92 321 12345678</p>
        </div>
      </div>

    </div>
  );
}

export default OrderDetailCard;
