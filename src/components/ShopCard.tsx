import React, { useEffect, useState } from 'react';
import { IAddProductCatalogItemResponse } from '../app/features/product/interfaces/product.interface';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartLoading } from '../app/features/cart/cart.selector';
import { ClipLoader } from 'react-spinners';
import { AppThunkDispatch } from '../store/rootReducer';
import { addToCart } from '../app/features/cart/cart.thunk';
import { Toast } from '../utils/toast';

interface IProductCardProps {
  // key: number
  products: IAddProductCatalogItemResponse
}

const ShopCard: React.FC<IProductCardProps> = ({ products }) => {
  const { _id, name, quantity, originalPrice, salePrice, category, brand, storeId, images } = products;
  const dispatch = useDispatch<AppThunkDispatch>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const loading = useSelector(selectCartLoading);
  console.log("loading", loading);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);

  const handleAddToCart = () => {
    // Dispatch the addToCart action with the productId
    dispatch(addToCart({ productId: _id })).then((result) => {
      console.log(result);
      Toast.fire({
        icon: "success",
        title: "Product added to cart",
      });
    });
  };


  return (
    <div className="border-2 p-2 rounded-lg shadow-md w-48 sm:w-56 md:w-64 bg-blue-50">
      {loading ? (
        <div className="flex items-center justify-center h-32 sm:h-36 md:h-40">
          <ClipLoader color="#123abc" loading={loading} size={30} />
        </div>
      ) : (
        <>
          <a href="/medicine">
            <img
              src={images[currentImageIndex]}
              alt={name}
              className="w-full h-32 sm:h-36 md:h-40 object-fill object-center mb-2 rounded-t-lg"
            />
          </a>
          <div className="flex flex-col justify-between">
            <div className="flex items-center">
              <p className="text-red-800 font-bold text-md mb-1">₹{salePrice}</p>
              <p className="text-gray-600 text-sm mb-1 ml-1">{quantity} left in stock</p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-gray-700">{name}</p>
              <div className="text-gray-600 text-sm">
                <span>({category})</span>
              </div>
            </div>
            <button className="bg-white text-red-900 border-red-900 border-2 font-semibold py-2 px-3 rounded-md hover:bg-red-800 hover:text-white w-full mt-2">
              View Product
            </button>
            <button className="bg-white text-red-900 border-red-900 border-2 font-semibold py-2 px-3 rounded-md hover:bg-red-800 hover:text-white w-full mt-2">
              Add to Wishlist
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-white text-red-900 border-red-900 border-2 font-semibold py-2 px-3 rounded-md hover:bg-red-800 hover:text-white w-full mt-2"
            >
              {loading ? 'Adding to Cart...' : 'Add to Cart'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopCard;
