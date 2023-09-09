import React from "react";
import WishlistHero from "../components/WishlistHero";
import WishlistProducts from "../components/WishlistProducts";
import VerticalMenu from "../components/VerticalMenu";

const Wishlist = () => {
  return (
    <div>
      <VerticalMenu />
      <WishlistHero />
      <WishlistProducts />
    </div>
  );
};

export default Wishlist;
