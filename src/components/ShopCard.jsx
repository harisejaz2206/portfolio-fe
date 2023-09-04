import React from 'react';

const ShopCard = ({ product }) => {
  const { imageSrc, name, price, category, potency } = product;

  return (
    <div className="border-2 p-2 rounded-lg shadow-md w-48 sm:w-56 md:w-64 bg-blue-50">
      <a href="/medicine">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-32 sm:h-36 md:h-40 object-fill object-center mb-2 rounded-t-lg"
        />
      </a>
      <div className="flex flex-col justify-between">
        <div className='flex items-center'>
          <p className="text-red-800 font-bold text-md mb-1">{price}</p>
          <p className="text-gray-600 text-sm mb-1 ml-1">{potency}</p>
        </div>
        <div className='flex flex-col'>
          <p className="text-lg font-semibold text-gray-700">{name}</p>
          <div className="text-gray-600 text-sm">
            <span>({category})</span>
          </div>
        </div>
        <button className="bg-white text-red-900 border-red-900 border-2 font-semibold py-2 px-3 rounded-md hover:bg-red-800 hover:text-white w-full mt-2">
          View Product
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
