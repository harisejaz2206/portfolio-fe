import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import BrandsHero from "../components/BrandsHero";
import BrandsProductCard from "../components/BrandsProductCard";

const Brands = () => {
  return (
    <div>
      <VerticalMenu />
      <BrandsHero />
      <BrandsProductCard />
    </div>
  );
};

export default Brands;
