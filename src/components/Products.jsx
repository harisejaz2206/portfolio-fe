import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
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
  ];

  return (
    <div className="bg-white py-8">
      <div className='container mx-auto px-16 py-4 flex items-center justify-between'>
        <h3 className='text-xl font-bold text-gray-800'>Products</h3>
        <button className='text-red-950 font-semibold hover:underline'>View All</button>
      </div>
      <hr className='mx-24 border-gray-300 mb-10'/>

      <div className="container mx-auto px-24 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {featuredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
