import React from 'react';
import VerticalMenu from '../VerticalMenu';
import Hero from '../Hero';
import Category from '../Category';
import Products from '../Products';
import Center from '../Center';
import PopularToday from '../PopularToday';

const Home = () => {
  return (
    <div>
      <VerticalMenu />
      <Hero />
      <Category />
      <Products/>
      <Center/>
      <PopularToday />
    </div>
  );
}

export default Home;
