import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Products from "../components/Products";
import Center from "../components/Center";
import PopularToday from "../components/PopularToday";

const Home = () => {
  return (
    <div>
      <VerticalMenu />
      <Hero />
      <Category />
      <Products />
      <Center />
      <PopularToday />
    </div>
  );
};

export default Home;
