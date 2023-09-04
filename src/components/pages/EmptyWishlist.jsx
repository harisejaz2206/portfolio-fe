import React from 'react';
import WishlistHero from '../WishlistHero';
import VerticalMenu from '../VerticalMenu';

const EmptyWishlist = ({ buttonText = "Back to Home" }) => {
  return (
    <div>
      <VerticalMenu />
      <WishlistHero />
      <div className="text-center mt-8 mb-10">
        <img src="/Empty Wishlist.png" alt="Empty Wishlist" className="mx-auto mb-4" />
        <p className="text-gray-400 mb-4 font-semibold">Whoops there is nothing present in your wishlist!</p>
        <button className="bg-red-950 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default EmptyWishlist;
