import React from 'react';

const ShoppingCartItem = ({ imageSrc, productName, price, quantity }) => {
  return (
    <tr>
      <td className="py-4">
        <div className="flex items-center">
          <img className="h-16 w-16 mr-4" src={imageSrc} alt="Product" />
          <span className="font-semibold">{productName}</span>
        </div>
      </td>
      <td className="py-4">${price.toFixed(2)}</td>
      <td className="py-4">
        <div className="flex items-center">
          <button className="border rounded-md py-2 px-4 mr-2">-</button>
          <span className="text-center w-8">{quantity}</span>
          <button className="border rounded-md py-2 px-4 ml-2">+</button>
        </div>
      </td>
      <td className="py-4">${(price * quantity).toFixed(2)}</td>
    </tr>
  );
};

export default ShoppingCartItem;
