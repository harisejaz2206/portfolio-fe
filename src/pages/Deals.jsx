import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import DealsHero from "../components/DealsHero";
import ProductDealCards from "../components/ProductDealCards";

const Deals = () => {
  return (
    <div>
      <VerticalMenu />
      <DealsHero />
      <ProductDealCards />
    </div>
  );
};

export default Deals;
