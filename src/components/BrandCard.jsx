import React from 'react';

const BrandCard = ({ product }) => {
  const { imageSrc, name, items } = product;

  return (
    <div className="w-64 h-64 bg-gray-100 border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
       <p className="text-gray-500 text-sm px-6 pt-3 font-semibold">
        {items}
      </p>
      <h2 className="font-semibold px-6">
        {name}
      </h2>
      <a href="/brand">
        <img src={imageSrc} alt={name} className="w-40 h-40 pt-4 object-fit mx-auto" />
      </a>
    </div>
  );
}

export default BrandCard;
