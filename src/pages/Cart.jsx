import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import CartHero from "../components/CartHero";
import ShoppingCart from "../components/ShoppingCart";

const Cart = () => {
  return (
    <div>
      <VerticalMenu />
      <CartHero />
      <ShoppingCart />
    </div>
  );
};

export default Cart;
