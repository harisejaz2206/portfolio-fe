import React from 'react';

function CartProducts({ product, onQuantityChange }) {
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      {/* Product details */}
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={product.image} alt={product.name} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{product.name}</span>
          <span className="text-red-500 text-xs">{product.brand}</span>
          <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">
            Remove
          </a>
        </div>
      </div>
      {/* Quantity */}
      <div className="flex justify-center w-1/5">
        {/* Decrease quantity */}
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          {/* Decrease quantity logic */}
        </svg>
        <input
          className="mx-2 border text-center w-8"
          type="text"
          value={product.quantity}
          onChange={e => onQuantityChange(e, product.id)}
        />
        {/* Increase quantity */}
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          {/* Increase quantity logic */}
        </svg>
      </div>
      {/* Price and Total */}
      <span className="text-center w-1/5 font-semibold text-sm">${product.price.toFixed(2)}</span>
      <span className="text-center w-1/5 font-semibold text-sm">${(product.quantity * product.price).toFixed(2)}</span>
    </div>
  );
}

export default CartProducts;
