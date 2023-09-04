import React from 'react';
import ProductCard from './ProductCard';

const WishlistProducts = () => {
  const featuredProducts = [
    {
      imageSrc: "/Panadol.png",
      name: "Panadol",
      price: "$19.99",
      category: "Analgesics",
      potency: "500 mg",
    },
    {
      imageSrc: "/Gaviscon.png",
      name: "Gaviscon",
      price: "$24.99",
      category: "Analgesics",
      potency: "750 mg",
    },
    {
      imageSrc: "/Cac.png",
      name: "CAC 1000 Plus",
      price: "$29.99",
      category: "Analgesics",
      potency: "1000 mg",
    },
    {
      imageSrc: "/Multivitamin.png",
      name: "Super Multi-Vitamin",
      price: "$14.99",
      category: "Analgesics",
      potency: "250 mg",
    },
    {
        imageSrc: "/Panadol.png",
        name: "Panadol",
        price: "$19.99",
        category: "Analgesics",
        potency: "500 mg",
      },
      {
        imageSrc: "/Gaviscon.png",
        name: "Gaviscon",
        price: "$24.99",
        category: "Analgesics",
        potency: "750 mg",
      },
      {
        imageSrc: "/Cac.png",
        name: "CAC 1000 Plus",
        price: "$29.99",
        category: "Analgesics",
        potency: "1000 mg",
      },
      {
        imageSrc: "/Multivitamin.png",
        name: "Super Multi-Vitamin",
        price: "$14.99",
        category: "Analgesics",
        potency: "250 mg",
      },
  ];

  return (
    <div className="bg-white py-8">

      <div className="container mx-auto px-24 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {featuredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WishlistProducts;
