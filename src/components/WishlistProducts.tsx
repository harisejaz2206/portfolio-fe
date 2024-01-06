import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { selectWishlistData } from "../app/features/wishlist/wishlist.selector";
import { getWishlistItems } from "../app/features/wishlist/wishlist.thunk";
import { Toast } from "../utils/toast";

const WishlistProducts: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const wishlistData = useSelector(selectWishlistData) || [];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Change the number of items per page as needed
  console.log("wishlist data:", wishlistData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("About to dispatch getUserCategories");
        await dispatch(getWishlistItems())
          .then((result) => {
            console.log("user wishlist get: ", result);
            console.log("result.payload:", result.payload);
          })
          .catch((error) => {
            console.log("error: ", error);
          });
      } catch (error) {
        console.error(
          "An error occurred while fetching user wishlist: ",
          error
        );
      }
    };

    fetchData();
  }, [dispatch]);

  // Calculate current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = wishlistData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total number of pages
  const pageNumbers = Math.ceil(wishlistData.length / itemsPerPage);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-24 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {currentItems.map((product) => (
          <ProductCard
            key={product._id}
            productName={product.name}
            price={product.salePrice}
            quantity={product.quantity}
            _id={product._id}
          />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <ul className="flex">
          {Array.from({ length: pageNumbers }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(index + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-red-800 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WishlistProducts;
