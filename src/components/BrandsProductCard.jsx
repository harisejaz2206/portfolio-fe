import React from 'react';
import BrandCard from './BrandCard';

const BrandsProductCard = () => {
  const featuredProducts = [
    {
      imageSrc: "/bashir_sons-removebg-preview.png",
      name: "Bashir Sons",
      items: "12 items"
    },
    {
       imageSrc: "/servaid-removebg-preview.png",
       name: "Servaid",
       items: "12 items"
    },
    {
      imageSrc: "/al_shifa-removebg-preview.png",
      name: "Al-Shifa",
      items: "12 items"
    },
    {
      imageSrc: "/medicare-removebg-preview.png",
      name: "Medicare",
      items: "12 items"
    },
    {
        imageSrc: "/servaid-removebg-preview.png",
        name: "Servaid",
        items: "12 items"
    },
    {
        imageSrc: "/al_shifa-removebg-preview.png",
        name: "Al-Shifa",
        items: "12 items"
    },
    {
        imageSrc: "/bashir_sons-removebg-preview.png",
        name: "Bashir Sons",
        items: "12 items"
    },
    {
        imageSrc: "/medicare-removebg-preview.png",
        name: "Medicare",
        items: "12 items"
    },
    {
        imageSrc: "/bashir_sons-removebg-preview.png",
        name: "Bashir Sons",
        items: "12 items"
    },
    {
        imageSrc: "/medicare-removebg-preview.png",
        name: "Medicare",
        items: "12 items"
    },
    {
        imageSrc: "/servaid-removebg-preview.png",
        name: "Servaid",
        items: "12 items"
    },
    {
        imageSrc: "/al_shifa-removebg-preview.png",
        name: "Al-Shifa",
        items: "12 items"
    },
  ];

  return (
    <div className='py-8'>
      <div className="container mx-auto px-5 sm:px-11 md:px-24 px- grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {featuredProducts.map((product, index) => (
          <BrandCard key={index} product={product}/>
        ))}
      </div>
    </div>
  );
}

export default BrandsProductCard;
