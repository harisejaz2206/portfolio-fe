import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import OrdersHero from "../components/OrdersHero";
import ProfileMenu from "../components/ProfileMenu";
import OrderHistory from "../components/OrderHistory";

const Orders = () => {
  return (
    <div>
      <VerticalMenu />
      <OrdersHero />
      <div className="flex py-6 px-28">
        <ProfileMenu />
        <OrderHistory />
      </div>
    </div>
  );
};

export default Orders;
