import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import ShopCard from "./ShopCard";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { selectUserProductsListing } from "../app/features/cart/cart.selector";
import { getUserCategories, userCategoriesProductListing } from "../app/features/userportal-category/category.thunk";
import {
    getUserProductListing,
} from "../app/features/cart/cart.thunk";
import { selectUserBrandData, selectUserBrandProducts } from "../app/features/userportal-brand/brand.selector";
import { selectUserCategoryData } from "../app/features/userportal-category/category.selector";
import { userBrandsProductListing } from "../app/features/userportal-brand/brand.thunk";
import { useParams } from "react-router-dom";

const ShopBrandProducts: React.FC = () => {
    const dispatch = useDispatch<AppThunkDispatch>();
    const userProductListing = useSelector(selectUserBrandProducts) || [];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Change the number of items per page as needed

    // Calculate current items to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = userProductListing.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    // Calculate total number of pages
    const pageNumbers = Math.ceil(userProductListing.length / itemsPerPage);

    // Handle page change
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const { brandId } = useParams();

    useEffect(() => {
        dispatch(userBrandsProductListing({ brandId: brandId! }));
    }, []);
    console.log("brandId", brandId)
    return (
        <div className="flex items-center px-36 py-4 justify-between">
            {/* <div className="h-screen w-auto flex flex-col mb-20"> */}
            {/* <div className="flex items-center justify-items-center py-2"> */}
            {/* Search bar */}
            {/* <div className="relative flex items-center">
          <input
            type="search"
            id="search-dropdown"
            className="block px-4 py-3 text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 px-3 py-3.5 rounded-r-lg text-sm font-medium text-white bg-red-900 hover:bg-red-950"
          >
            <AiOutlineSearch className="w-4 h-4" />
          </button>
        </div> */}

            {/* Dropdown menu */}
            {/* <div className="ml-4 relative">
          <button
            onClick={() => setSortingMenuOpen(!isSortingMenuOpen)}
            className="flex items-center px-3 py-2 rounded-lg text-gray-900"
          >
            <AiOutlineMenu className="w-5 h-5" />
          </button>
          {isSortingMenuOpen && (
            <div className="absolute right-0 mt-2 py-2 bg-white border border-gray-300 rounded-lg shadow-lg">
              <button
                className="block px-4 py-2 w-40 text-left hover:bg-gray-100"
                onClick={() => setSortingOption("az")}
              >
                Sort: A to Z
              </button>
              <button
                className="block px-4 py-2 w-40 text-left hover:bg-gray-100"
                onClick={() => setSortingOption("za")}
              >
                Sort: Z to A
              </button>
              <button
                className="block px-4 py-2 w-40 text-left hover:bg-gray-100"
                onClick={() => setSortingOption("lowToHigh")}
              >
                Price: Low to High
              </button>
              <button
                className="block px-4 py-2 w-40 text-left hover:bg-gray-100"
                onClick={() => setSortingOption("highToLow")}
              >
                Price: High to Low
              </button>
            </div>
          )}
        </div> */}
            {/* </div> */}
            <div className="w-max p-4 ">
                <div className="grid gap-6 grid-cols-4 sm:grid-cols-4 md:grid-cols-4 ">
                    {/* Display current items */}
                    {currentItems.map((product, index) => (
                        <ShopCard key={product._id} products={product} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center w-full">
                    <ul className="flex space-x-2">
                        {Array.from({ length: pageNumbers }, (_, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => paginate(index + 1)}
                                    className={`px-3 py-1 rounded ${currentPage === index + 1
                                        ? "bg-red-600 text-white"
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
            {/* </div> */}
        </div>
    );
};

export default ShopBrandProducts;
