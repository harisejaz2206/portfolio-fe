import React from 'react';
import VerticalMenu from '../VerticalMenu';
import OrderDetailsHero from '../OrdersDetailHero';
import ProfileMenu from '../ProfileMenu';
import OrderDetailCard from '../OrderDetailCard';

const OrderDetails = () => {
  return (
    <div>
      <VerticalMenu />
      <OrderDetailsHero />
      <div className='flex py-6 px-28'>
        <ProfileMenu />
        <OrderDetailCard />
      </div>
    </div>
  );
}

export default OrderDetails;
