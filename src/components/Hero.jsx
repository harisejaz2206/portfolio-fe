import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreCategories = () => {
    navigate("/categories");
  };

  return (
    <div className="relative">
      <img
        className="object-cover w-full h-screen"
        src="/pharmacy.jpg"
        alt="pharmacy"
      />
      <div className="absolute top-0 left-0 w-full h-screen px-4 sm:px-8 md:px-16 bg-gradient-to-r from-red-950 to-maroon bg-opacity-70 p-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold mt-16 sm:mt-32 md:mt-40 ml-6 sm:ml-36">
          Get in touch with <br /> medical products
        </h1>
        <p className="text-white mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-thin ml-6 sm:ml-36">
          High quality medical products with exceptional deals,
          <br /> coupons & loyalty points.
        </p>
        <button
          onClick={handleExploreCategories}
          className="mt-4 sm:mt-6 bg-white text-gray-950 font-semibold py-2 px-4 sm:px-6 md:px-8 hover:bg-red-800 rounded-md hover:text-white ml-6 sm:ml-36"
        >
          Explore Categories
        </button>
      </div>
    </div>
  );
};

export default Hero;
