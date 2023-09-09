import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import ShopHero from "../components/ShopHero";
import ShopProducts from "../components/ShopProducts";

const Shop = () => {
  return (
    <div>
      <VerticalMenu />
      <ShopHero />
      <ShopProducts />
    </div>
  );
};

export default Shop;
