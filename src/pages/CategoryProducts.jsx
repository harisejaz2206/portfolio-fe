import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import ShopHero from "../components/ShopHero";
import ShopProducts from "../components/ShopProducts";
import CategoryProductHero from "../components/CategoryProductHero";
import ShopCategoryProducts from "../components/ShopCategoryProducts";

const CategoryProducts = () => {
  return (
    <div>
      <VerticalMenu />
      <CategoryProductHero />
      {/* <ShopProducts /> */}
      <ShopCategoryProducts />
    </div>
  );
};

export default CategoryProducts;
