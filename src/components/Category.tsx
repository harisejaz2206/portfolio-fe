import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { selectUserCategoryData, selectUserCategoryLoading } from "../app/features/userportal-category/category.selector";
import { getUserCategories } from "../app/features/userportal-category/category.thunk";
import { PropagateLoader } from "react-spinners";

const Category: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const userCategories = useSelector(selectUserCategoryData) || [];
  const userCategoriesLoading = useSelector(selectUserCategoryLoading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("About to dispatch getUserCategories");
        await dispatch(getUserCategories()).then((result) => {
          console.log('user categories result: ', result);
        }).catch((error) => {
          console.log('error: ', error);
        });
      } catch (error) {
        console.error("An error occurred while fetching user categories: ", error);
      }
    };

    fetchData();
  }, [dispatch]);

  // for (let i = 0; i < 4; i++) {
  //   userFirstCategories.push(userCategories[i]);
  //   console.log(userFirstCategories);
  // };
  // console.log("first four categories", userFirstCategories);

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 py-4 flex items-center justify-between">
        {/* Increased text size */}
        <h3 className="text-2xl font-bold text-gray-800">Categories</h3>
        {/* Added hover effect */}
        <button className="text-red-600 font-semibold hover:underline hover:text-red-800">
          View All
        </button>
      </div>
      <hr className="mx-4 sm:mx-8 md:mx-16 border-gray-300 mb-10" />
      {userCategoriesLoading ? (<div className="flex justify-center items-center h-full">
        <PropagateLoader color={"#123123"} loading={true} size={15} />
      </div>) : (<div className="container mx-auto px-4 sm:px-8 md:px-16 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {/* Used unique identifier as a key */}
        {userCategories.map((category, index) => (
          <CategoryCard key={index} product={category} />
        ))}
      </div>)}
    </div>
  );
};

export default Category;
