import React from 'react';

const BrandCard = ({ product }) => {
  const { imageSrc, name, items } = product;

  return (
    <div className="w-64 h-64 bg-white border border-gray-200 rounded-xl shadow-2xl ">
       <p className="text-gray-800 text-sm px-6 pt-3 font-semibold">
        {items}
      </p>
      <h2 className="font-semibold px-6 text-gray-800">
        {name}
      </h2>
      <a href="/brand">
        <img src={imageSrc} alt={name} className="w-40 h-40 pt-4 object-fit mx-auto  rounded-lg mt-2" />
      </a>
    </div>
  );
}

export default BrandCard;
