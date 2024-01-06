import React, { useState } from "react";
import { AiFillHeart, AiFillBell, AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../app/features/auth/auth.selector";
import LoggedInNavbar from "./LoggedInNavbar";
import { selectCartTotalItems } from "../app/features/cart/cart.selector";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial state to false
  const Navigate = useNavigate();

  const handleLoginClick = () => {
    // Use the `navigate` function to change the route to "/login"
    Navigate("/login");
  };

  const userToken = useSelector(selectToken);
  console.log(userToken);

  const cartItems = useSelector(selectCartTotalItems);

  return (
    <>
      {userToken ? (
        <LoggedInNavbar />
      ) : (
        // Render the default navbar when the user is not logged in
        <div className="flex items-center py-2 px-4 justify-between">
          <div className="flex items-center">
            {/* Logo */}
            <a href="/" className="cursor-pointer">
              <img
                src="/logo.png"
                alt="Dot Brand Logo"
                className="w-12 h-12 "
              />
            </a>
            <a href="/" className="cursor-pointer">
              <h1 className="text-xl font-bold text-red-700">DotBrand</h1>
            </a>
          </div>
          <div className="relative flex-grow flex items-center justify-center">
            <div className="relative ml-28">
              <input
                className="pl-12 pr-16 py-2 w-80 border rounded-md border-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-3 flex items-center text-gray-400 pointer-events-none">
                <AiOutlineSearch className="text-gray-400 text-xl" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {/* <a href="/wishlist">
              <AiFillHeart className="text-xl mr-3 text-gray-400 hover:text-red-800" />
            </a>
            <a href="/notifications">
              <AiFillBell className="text-xl mr-3 text-gray-400 hover:text-red-800" />
            </a>
            <a href="/cart">
              <FaShoppingCart className="text-xl mr-3 text-gray-400 hover:text-red-800" />
            </a> */}
            <button
              onClick={handleLoginClick}
              className="font-bold text-red-900 mr-3 ml-3 z-10"
            >
              Log in
            </button>
            <a href="/signUp">
              <button className="bg-red-900 text-white border rounded-md py-2 px-4 mr-3 hover:bg-red-700 transition duration-300">
                Sign Up
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
