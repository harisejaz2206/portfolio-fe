import React, { useEffect, useState } from "react";
import BrandCard from "./BrandCard";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import {
  selectUserBrandData,
  selectUserBrandLoading,
} from "../app/features/userportal-brand/brand.selector";
import { getUserBrands } from "../app/features/userportal-brand/brand.thunk";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const BrandsProductCard: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  // const navigate = useNavigate();
  // const userCategories = useSelector(selectUserCategoryData);
  const userBrands = useSelector(selectUserBrandData) || [];
  const userBrandsLoading = useSelector(selectUserBrandLoading);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Change the number of items per page as needed
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("About to dispatch getUserBrands");
        await dispatch(getUserBrands())
          .then((result) => {
            console.log("user brands result: ", result);
          })
          .catch((error) => {
            console.log("error: ", error);
          });
      } catch (error) {
        console.error("An error occurred while fetching user brands: ", error);
      }
    };

    fetchData();
  }, [dispatch]);

  console.log("userBrands data api:", userBrands);

  // Calculate current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userBrands.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total number of pages
  const pageNumbers = Math.ceil(userBrands.length / itemsPerPage);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="py-8">
      {userBrandsLoading ? (
        <div className="flex justify-center items-center h-full">
          <PropagateLoader color={"#123123"} loading={true} size={15} />
        </div>
      ) : (
        <div className="container mx-auto px-5 sm:px-11 md:px-24 px- grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {currentItems.map((brand, index) => (
            <div
              onClick={() => {
                navigate(`/brand/products/${brand._id}`)

              }}
            >
              <BrandCard key={index} product={brand} />
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <ul className="flex">
          {Array.from({ length: pageNumbers }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(index + 1)}
                className={`px-3 py-1 rounded ${currentPage === index + 1
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

export default BrandsProductCard;
