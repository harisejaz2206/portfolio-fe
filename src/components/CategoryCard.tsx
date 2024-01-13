import React from "react";
import { IUserCategoryListing } from "../app/features/userportal-category/interfaces/category.interface";
import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  product: IUserCategoryListing;
}
const CategoryCard: React.FC<CategoryCardProps> = ({ product }) => {
  const { image, name, status } = product;
  const navigate = useNavigate()
  return (
    <div className="w-64 h-52 bg-white border border-gray-200 rounded-2xl shadow-lg dark:bg-white dark:border-gray-700" onClick={() => navigate(`/category/products/${product._id}`)}>
      <p className="text-gray-700 text-sm px-6 pt-3 font-semibold">{name}</p>
      <h2 className="font-semibold px-6">{status}</h2>
      <img
        src={image}
        alt={name}
        className="w-40 h-32 mt-4 object-fit mx-auto"
      />
      
    </div>
  );
};

export default CategoryCard;
