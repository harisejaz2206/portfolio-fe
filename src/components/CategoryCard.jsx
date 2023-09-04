import React from 'react';

const CategoryCard = ({ product }) => {
  const { imageSrc, category, items } = product;

  return (
    <div className="w-64 h-52 bg-white border border-gray-200 rounded-2xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <p className="text-gray-700 text-sm px-6 pt-3 font-semibold">
        {items}
      </p>
      <h2 className="font-semibold px-6">
        {category}
      </h2>
      <a href="/medicine">
        <img src={imageSrc} alt={category} className="w-40 h-32 object-fit mx-auto" />
      </a>
    </div>
  );
}

export default CategoryCard;
