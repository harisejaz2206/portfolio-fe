import React from "react";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { addToCart } from "../app/features/cart/cart.thunk";
import { Toast } from "../utils/toast";
import { FaEye } from "react-icons/fa"; // Eye icon from react-icons library

interface ProductCardProps {
  productName: string;
  price: number;
  quantity: number;
  _id: string; // Assuming _id is the unique identifier for the product
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  price,
  quantity,
  _id,
}) => {
  const dispatch = useDispatch<AppThunkDispatch>();

  const addToCartHandler = () => {
    dispatch(addToCart({ productId: _id })).then((result) => {
      Toast.fire({
        icon: "success",
        title: "Product added to cart",
      });
      console.log(result);
    });
  };

  return (
    <div className="border-2 p-4 rounded-lg shadow-md w-48 sm:w-56 md:w-64 bg-white">
      <div className="flex flex-col h-full justify-between">
        <div>
          <p className="text-lg font-semibold text-gray-700">{productName}</p>
          <p className="text-red-800 font-bold text-md mb-1">
            Sale price: {price} Rs
          </p>
          {/* <p className="text-gray-600 text-sm mb-2">{quantity} left</p> */}
        </div>
        <div className="flex justify-between items-center">
          <button
            className="bg-white text-red-900 border-red-900 border-2 font-semibold py-1 px-2 rounded-md hover:bg-red-800 hover:text-white"
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
          <button
            className="bg-white text-red-900 border-red-900 border-2 font-semibold py-1 px-2 rounded-md hover:bg-red-800 hover:text-white flex items-center"
            onClick={() => {
              // Logic for viewing the product
            }}
          >
            <FaEye className="mr-1" />
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
