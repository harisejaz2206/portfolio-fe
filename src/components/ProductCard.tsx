import React from "react";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { addToCart } from "../app/features/cart/cart.thunk";
import { Toast } from "../utils/toast";

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
    <div className="border-2 p-2 rounded-lg shadow-md w-48 sm:w-56 md:w-64 bg-white">
      <a href="/medicine"></a>
      <div className="flex flex-col justify-between h-32 sm:h-36 md:h-40">
        <div>
          <p className="text-lg font-semibold text-gray-700">{productName}</p>
          <p className="text-red-800 font-bold text-md mb-1">
            Sale price: ${price}
          </p>
          <p className="text-gray-600 text-sm mb-1">{quantity}</p>
        </div>
        <button className="bg-white text-red-900 border-red-900 border-2 font-semibold py-2 px-3 rounded-md hover:bg-red-800 hover:text-white w-full">
          View Product
        </button>
        <button
          onClick={addToCartHandler}
          className="bg-white text-red-900 border-red-900 border-2 font-semibold py-2 px-3 rounded-md hover:bg-red-800 hover:text-white w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
