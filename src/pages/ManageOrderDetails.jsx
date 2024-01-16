import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import Hero from "../components/ShopHero";
import ShopProducts from "../components/ShopProducts";
import OrderListing from "./OrderListing";
import OrdersHero from "../components/OrdersHero";
import OrderDetails from "./OrderDetails";
import OrderDetailsHero from "../components/OrdersDetailHero";

const ManageOrderDetails = () => {
  return (
    <div>
      <VerticalMenu />
      <OrderDetailsHero />
      <OrderDetails />
    </div>
  );
};

export default ManageOrderDetails;
