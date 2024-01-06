import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { selectWishlistData } from "../app/features/wishlist/wishlist.selector";
import { getWishlistItems } from "../app/features/wishlist/wishlist.thunk";

const WishlistProducts: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const wishlistData = useSelector(selectWishlistData) || [];
  console.log("wishlist data:", wishlistData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("About to dispatch getUserCategories");
        await dispatch(getWishlistItems()).then((result) => {
          console.log('user wishlist get: ', result);
          console.log("result.payload:", result.payload)
        }).catch((error) => {
          console.log('error: ', error);
        });
      } catch (error) {
        console.error("An error occurred while fetching user wishlist: ", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-24 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {wishlistData.map((product) => (
          <ProductCard key={product._id} productName={product.name}
            price={product.salePrice}
            quantity={product.quantity} _id={product._id} />
        ))}
      </div>
    </div>
  );
};

export default WishlistProducts;
