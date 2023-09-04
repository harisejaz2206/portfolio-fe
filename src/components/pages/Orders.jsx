import React from 'react';
import VerticalMenu from '../VerticalMenu';
import OrdersHero from '../OrdersHero';
import ProfileMenu from '../ProfileMenu';
import OrderHistory from '../OrderHistory';

const Orders = () => {
  return (
    <div>
      <VerticalMenu />
      <OrdersHero />
      <div className='flex py-6 px-28'>
        <ProfileMenu />
        <OrderHistory />
      </div>
    </div>
  );
}

export default Orders;
