import React from 'react';
import OrdersCard from './OrdersCard';

const OrderHistory = () => {
  const orders = [
        {
        orderId:"215464354-A",
        placedOn:"23 April 2023",
        imageSrc:"/diuretics.png",
        productName:"Diuretics",
        productMl:"30ml",
        productQty:"1",
        productPrice:"$21.99",
        deliveredOn:"12 May 2023"
        },
        {
          orderId:"6254851-A",
          placedOn:"10 March 2023",
          imageSrc:"/antipyretics.png",
          productName:"Antipyretics",
          productMl:"50ml",
          productQty:"1",
          productPrice:"$25.00",
          deliveredOn:"25 March 2023"
          }
  ];
  return (
    <div className='w-full'>
      {orders.map((order, index)=>(
        <OrdersCard key={index} order={order} />
      ))}
    </div>
  );
}

export default OrderHistory;
