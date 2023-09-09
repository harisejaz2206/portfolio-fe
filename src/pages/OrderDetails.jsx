import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import OrderDetailsHero from "../components/OrdersDetailHero";
import ProfileMenu from "../components/ProfileMenu";
import OrderDetailCard from "../components/OrderDetailCard";

const OrderDetails = () => {
  return (
    <div>
      <VerticalMenu />
      <OrderDetailsHero />
      <div className="flex py-6 px-28">
        <ProfileMenu />
        <OrderDetailCard />
      </div>
    </div>
  );
};

export default OrderDetails;
