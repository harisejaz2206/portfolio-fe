import React from "react";

const ShoppingCartItem = ({
  productName,
  price,
  quantity,
  addToCartHandler,
  productId,
}) => {
  return (
    <tr className="border-b">
      <td className="py-4">
        <div className="flex items-center">
          {/* <img className="h-16 w-16 mr-4" src={imageSrc} alt="Product" /> */}
          <span className="font-semibold">{productName}</span>
        </div>
      </td>
      <td className="py-4">${price.toFixed(2)}</td>
      <td className="py-4">
        <div className="flex items-center">
          <button className="border py-1 px-3 rounded-full mr-2 bg-red-600 text-white">
            -
          </button>
          <span className="text-center w-8">{quantity}</span>
          <button
            // onClick={addToCartHandler}
            onClick={() => addToCartHandler(productId)}
            className="border rounded-full py-1 px-3 ml-2 bg-green-600 text-white"
          >
            +
          </button>
        </div>
      </td>
      <td className="py-4">${(price * quantity).toFixed(2)}</td>
    </tr>
  );
};

export default ShoppingCartItem;
