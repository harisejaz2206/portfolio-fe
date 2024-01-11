import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import ShopCard from "./ShopCard";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { selectUserProductsListing } from "../app/features/cart/cart.selector";
import { getUserCategories } from "../app/features/userportal-category/category.thunk";
import {
  getUserProductListing,
} from "../app/features/cart/cart.thunk";
import { getUserBrands } from "../app/features/userportal-brand/brand.thunk";
import { selectUserBrandData } from "../app/features/userportal-brand/brand.selector";
import { selectUserCategoryData } from "../app/features/userportal-category/category.selector";

const ShopProducts: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const userProductListing = useSelector(selectUserProductsListing) || [];
  const userBrandsListing = useSelector(selectUserBrandData) || [];
  const userCategoriesListing = useSelector(selectUserCategoryData) || [];

  const [isSortingMenuOpen, setSortingMenuOpen] = useState(false);
  const [sortingOption, setSortingOption] = useState("az");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("About to dispatch getUserCategories");
        await dispatch(getUserCategories());
        await dispatch(getUserBrands());
        await dispatch(getUserProductListing())
          .then((result) => {
            console.log("user product listing result: ", result);
          })
          .catch((error) => {
            console.log("error: ", error);
          });
      } catch (error) {
        console.error(
          "An error occurred while fetching user categories: ",
          error
        );
      }
    };

    fetchData();
  }, [dispatch]);

  // console.log("testing", userCategoriesListing);

  return (
    <div className="flex items-center px-36 py-4 justify-between">
      <div className="bg-white shadow-2xl h-max items-center rounded-lg px-4 pt-5">
        <div className="relative ">
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
        </div>

        <div className="mb-2 sm:mb-0">
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
        </div>
      </div>
      <div className="h-screen w-auto flex flex-col mb-20">
        <div className="flex items-center justify-end py-2">
          {/* Search bar */}
          <div className="relative flex items-center">
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
          </div>

          {/* Dropdown menu */}
          <div className="ml-4 relative">
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
          </div>
        </div>
        <div className="w-max p-4 overflow-auto">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {userProductListing.map((product, index) => (
              <ShopCard key={product._id} products={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
