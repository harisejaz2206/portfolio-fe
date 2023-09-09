import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import CategoryHero from "../components/CategoryHero";
import CategoryProductCard from "../components/CategoryProductCard";

const Categories = () => {
  return (
    <div>
      <VerticalMenu />
      <CategoryHero />
      <CategoryProductCard />
    </div>
  );
};

export default Categories;
