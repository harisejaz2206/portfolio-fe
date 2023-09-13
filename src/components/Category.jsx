import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const featuredProducts = [
    {
      imageSrc: "/analgesics.png",
      category: "Analgesics",
      items: "950 items",
    },
    {
      imageSrc: "/antipyretics.png",
      category: "Antipyretics",
      items: "950 items",
    },
    {
      imageSrc: "/antimigraine.png",
      category: "AntiMigraine",
      items: "950 items",
    },
    {
      imageSrc: "/antineoplastics.png",
      category: "Antineoplastics",
      items: "950 items",
    },
  ];
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 py-4 flex items-center justify-between">
        {/* Increased text size */}
        <h3 className="text-2xl font-bold text-gray-800">Categories</h3>
        {/* Added hover effect */}
        <button className="text-red-600 font-semibold hover:underline hover:text-red-800">
          View All
        </button>
      </div>
      <hr className="mx-4 sm:mx-8 md:mx-16 border-gray-300 mb-10" />
      <div className="container mx-auto px-4 sm:px-8 md:px-16 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {/* Used unique identifier as a key */}
        {featuredProducts.map((product) => (
          <CategoryCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
