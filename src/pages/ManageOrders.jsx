import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import Hero from "../components/ShopHero";
import ShopProducts from "../components/ShopProducts";
import OrderListing from "./OrderListing";
import OrdersHero from "../components/OrdersHero";

const ManageOrders = () => {
  return (
    <div>
      <VerticalMenu />
      <OrdersHero />
      <OrderListing />
    </div>
  );
};

export default ManageOrders;
