import React from "react";
import { IUserCategoryListing } from "../app/features/userportal-category/interfaces/category.interface";

interface CategoryCardProps {
  product: IUserCategoryListing;
}
const CategoryCard: React.FC<CategoryCardProps> = ({ product }) => {
  // const { imageSrc, category, items } = product;
  const { _id, image, name, status, storeId } = product;

  return (
    <div className="w-64 h-52 bg-white border border-gray-200 rounded-2xl shadow-lg dark:bg-white dark:border-gray-700">
      {/* <p className="text-gray-700 text-sm px-6 pt-3 font-semibold">{items}</p> */}
      <p className="text-gray-700 text-sm px-6 pt-3 font-semibold">{name}</p>
      <h2 className="font-semibold px-6">{status}</h2>
      <p className="font-semibold px-6">{_id}</p>
      {/* <a href="/medicine"> */}
      <a href={`/${_id}`}>
        <img
          src={image}
          alt={name}
          className="w-40 h-32 object-fit mx-auto"
        />
      </a>
    </div>
  );
};

export default CategoryCard;
