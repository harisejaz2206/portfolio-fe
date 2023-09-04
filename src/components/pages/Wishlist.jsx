import React from 'react';
import WishlistHero from '../WishlistHero';
import WishlistProducts from '../WishlistProducts';
import VerticalMenu from '../VerticalMenu';

const Wishlist = () => {
  return (
    <div>
        <VerticalMenu />
        <WishlistHero />   
        <WishlistProducts />  
    </div>
  );
}

export default Wishlist;
