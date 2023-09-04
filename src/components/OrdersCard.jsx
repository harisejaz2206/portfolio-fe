import React from 'react';

const OrdersCard = ({ order }) => {
    const {
        orderId,
        placedOn,
        imageSrc,
        productName,
        productMl,
        productQty,
        productPrice,
        deliveredOn
    } = order;

  return (
    <div className='ml-8 w-full bg-gray-100 px-10 py-4 rounded'>
      <div className='bg-white rounded px-4'>
        <div className='flex items-center justify-between'>
          <div className='p-2'>
            <div className='flex'>
                <h2 className='text-gray-500'>Order ID :</h2>
                <h2 className='font-semibold text-md text-red-900 ml-1'>{orderId}</h2>
            </div>
            <div className='flex'>
                <h2 className='text-gray-500'>Placed On:</h2>
                <h2 className='font-semibold text-md text-red-900 ml-1'>{placedOn}</h2>
            </div>
          </div>
          <a href="/orderDetails">
          <button className='bg-red-950 text-white text-sm p-2 rounded'>Order Details</button>
          </a>
        </div>
        <hr className='mx-1 sm:mx-2 md:mx-4 border-gray-300' />
        <div className='flex items-center justify-between py-4'>
          <div className="flex items-center"> {/* Flex container for image and text */}
            <img src={imageSrc} alt="" className='w-16 h-16 bg-gray-100 mr-2' />
            <div className="flex flex-col">
              <h2 className='font-semibold m-0'>{productName}</h2>
              <h3 className='text-gray-500 text-sm m-0'>{productMl}</h3>
            </div>
          </div>
          <div>
            <h2 className='font-semibold'>Qty</h2>
            <h3 className='text-gray-500 text-sm'>{productQty}</h3>
          </div>
          <div>
            <h2 className='font-semibold'>Total Amount</h2>
            <h3 className='text-gray-500 text-sm'>{productPrice}</h3>
          </div>
          <div>
            <h2 className='font-semibold'>Delivered On</h2>
            <h3 className='text-gray-500 text-sm'>{deliveredOn}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersCard;
