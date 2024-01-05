import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { selectUserCategoryData } from "../app/features/userportal-category/category.selector";
import { getUserCategories } from "../app/features/userportal-category/category.thunk";


const CategoryProductCard: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  // const navigate = useNavigate();
  // const userCategories = useSelector(selectUserCategoryData);
  const userCategories = useSelector(selectUserCategoryData) || [];



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

  console.log("userCategories data:", userCategories);

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 py-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">Categories</h3>
        <button className="text-red-950 font-semibold hover:underline">
          View All
        </button>
      </div>
      <hr className="mx-4 sm:mx-8 md:mx-16 border-gray-300 mb-10" />

      <div className="container mx-auto px-4 sm:px-8 md:px-16 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {userCategories.map((category, index) => (
          <CategoryCard key={index} product={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProductCard;
