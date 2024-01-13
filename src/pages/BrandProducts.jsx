import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import ShopHero from "../components/ShopHero";
import ShopProducts from "../components/ShopProducts";
import CategoryProductHero from "../components/CategoryProductHero";
import ShopCategoryProducts from "../components/ShopCategoryProducts";
import ShopBrandProducts from "../components/ShopBrandProducts";
import BrandProductHero from "../components/BrandProductHero";

const BrandProducts = () => {
  return (
    <div>
      <VerticalMenu />
      <BrandProductHero />
      {/* <ShopProducts /> */}
      <ShopBrandProducts />
    </div>
  );
};

export default BrandProducts;
