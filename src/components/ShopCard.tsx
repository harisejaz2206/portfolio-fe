import React, { useEffect, useState } from "react";
import { IAddProductCatalogItemResponse } from "../app/features/product/interfaces/product.interface";
import { useDispatch, useSelector } from "react-redux";
import { selectCartLoading } from "../app/features/cart/cart.selector";
import { ClipLoader } from "react-spinners";
import { AppThunkDispatch } from "../store/rootReducer";
import { addToCart } from "../app/features/cart/cart.thunk";
import { Toast } from "../utils/toast";
import { addToWishlist } from "../app/features/wishlist/wishlist.thunk";

interface IProductCardProps {
  products: IAddProductCatalogItemResponse;
}

const ShopCard: React.FC<IProductCardProps> = ({ products }) => {
  const { _id, name, quantity, salePrice, category, images } = products;
  const dispatch = useDispatch<AppThunkDispatch>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const loading = useSelector(selectCartLoading);
  // console.log("loading", loading);
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

  const handleAddToWishlist = () => {
    // Dispatch the addToCart action with the productId
    dispatch(addToWishlist({ productId: _id })).then((result) => {
      console.log(result);
      Toast.fire({
        icon: "success",
        title: "Product added to wishlist",
      });
    });
  };

  return (
    <div className="border border-gray-300 p-2 rounded-lg shadow-md w-48 sm:w-56 md:w-64 bg-white">
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
              className="w-full h-32 sm:h-36 md:h-40 object-cover mb-2 rounded-t-lg"
            />
          </a>
          <div className="flex flex-col justify-between">
            <div className="flex items-center text-sm">
              <p className="text-red-800 font-semibold text-lg mb-2 -mt-4">
                Rs {salePrice}
              </p>
              <p className="text-gray-600 -ml-11 font-semibold mt-8">
                {quantity} left
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-md font-semibold text-gray-700">{name}</p>
              <div className="text-gray-600">
                {/* <span className="text-xs">({category})</span> */}
              </div>
            </div>
            {/* <button className="bg-white text-red-900 border border-red-900 font-semibold py-1 px-2 rounded-md hover:bg-red-800 hover:text-white w-full mt-2">
              View Product
            </button> */}
            <button
              onClick={handleAddToWishlist}
              className="bg-white text-red-900 border border-red-900 font-semibold py-1 px-2 rounded-md hover:bg-red-800 hover:text-white w-full mt-2"
            >
              Add to Wishlist
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-white text-red-900 border border-red-900 font-semibold py-1 px-2 rounded-md hover:bg-red-800 hover:text-white w-full mt-2"
            >
              {loading ? "Adding to Cart..." : "Add to Cart"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopCard;

{
  /* <div className="bg-white shadow-2xl h-max items-center rounded-lg px-4 pt-5"> */
}
{
  /* <div className="relative ">
          <input
            type="search"
            id="search-dropdown"
            className="block px-4 py-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 px-3 py-3.5 rounded-r-lg
             text-sm font-medium text-white bg-red-900 hover:bg-red-950 "
          >
            <AiOutlineSearch className="w-4 h-4" />
          </button>
        </div> */
}

{
  /* <div className="mb-2 sm:mb-0">
          <h2 className="text-md font-bold my-4">CATEGORIES</h2>
          <form className="space-y-2 text-sm">
            {userCategoriesListing.map((category) => (
              <label key={category._id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={category.name}
                  name={category.name}
                  value={category.name}
                  className="form-checkbox accent-red-900"
                />
                <span>{category.name}</span>
              </label>
            ))}
          </form>
        </div>

        <div className="mb-2 sm:mb-0">
          <h2 className="text-md font-bold my-4">BRANDS</h2>
          <form className="space-y-1 text-sm mb-4">
            {userBrandsListing.map((brand) => (
              <label key={brand._id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={brand.name}
                  name={brand.name}
                  value={brand.name}
                  className="form-checkbox accent-red-900"
                />
                <span>{brand.name}</span>
              </label>
            ))}
          </form>
        </div> */
}
{
  /* </div> */
}
