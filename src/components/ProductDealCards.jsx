import React from 'react';
import DealCard from './DealCard';

const ProductDealCards = () => {
  const featuredProducts = [
     {
      imageSrc: "/analgesics.png",
      category: "Analgesics",
      discount: "10% off",
      text: "View Product"
    },
    {
      imageSrc: "/antipyretics.png",
      category: "Antipyretics",
      discount: "10% off",
      text: "View Product"
    },
    {
      imageSrc: "/antimigraine.png",
      category: "AntiMigraine",
      discount: "10% off",
      text: "View Product"
    },
    {
      imageSrc: "/analgesics.png",
      category: "Analgesics",
      discount: "10% off",
      text: "View Product"
    },
    {
      imageSrc: "/antipyretics.png",
      category: "Antipyretics",
      discount: "10% off",
      text: "View Product"
    },
    {
      imageSrc: "/antimigraine.png",
      category: "AntiMigraine",
      discount: "10% off",
      text: "View Product"
    },
  ];

  return (
    <div className='py-8'>
      <div className="container mx-auto sm:px-8 md:px-16 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {featuredProducts.map((product, index) => (
          <DealCard key={index} product={product} index={index}/>
        ))}
      </div>
    </div>
  );
}

export default ProductDealCards;
