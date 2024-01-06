import React from "react";
import { IUserBrandListing } from "../app/features/userportal-brand/interfaces/brand.interface";

interface CategoryCardProps {
  product: IUserBrandListing;
}
const BrandCard: React.FC<CategoryCardProps> = ({ product }) => {
  const { _id, name, image, storeId } = product;
  console.log(name, image, storeId);

  return (
    <div className="w-64 h-64 bg-white border border-gray-200 rounded-xl shadow-2xl ">
      <p className="text-gray-800 text-sm px-6 pt-3 font-semibold">{name}</p>
      {/* <h2 className="font-semibold px-6 text-gray-800">{name}</h2> */}
      <h2 className="font-semibold px-6 text-gray-800">{storeId}</h2>
      {/* <a href="/brand"> */}
      <a href={`/${_id}`}>
        <img
          src={image}
          alt={name}
          className="w-40 h-40 pt-4 object-fit mx-auto  rounded-lg mt-2"
        />
      </a>
    </div>
  );
};

export default BrandCard;
