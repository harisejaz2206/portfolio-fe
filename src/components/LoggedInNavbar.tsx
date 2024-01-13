import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillBell,
  AiOutlineSearch,
  AiOutlineOrderedList,
  AiOutlineUser,
  AiOutlineProfile,
} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppThunkDispatch } from "../store/rootReducer";
import { logout } from "../app/features/auth/auth.slice";
import { clearStoreData } from "../app/features/store/store.slice";
import { selectCartTotalItems } from "../app/features/cart/cart.selector";
import { useEffect } from "react";
import { getUserCart } from "../app/features/cart/cart.thunk";

const LoggedInNavbar = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const Navigate = useNavigate();
  const cartItems = useSelector(selectCartTotalItems);
  console.log("number of cart items", cartItems);

  useEffect(() => {
    dispatch(getUserCart());
  });



  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearStoreData());
    Navigate("/");
  };

  return (
    <div className="flex items-center py-2 px-4 relative">
      {" "}
      {/* Make the container relative */}
      <div className="flex items-center">
        <a href="/" className="cursor-pointer">
          <img src="/logo.png" alt="Dot Brand Logo" className="w-12 h-12 " />
        </a>
        <a href="/" className="cursor-pointer">
          <h1 className="text-xl font-bold text-red-700">DotBrand</h1>
        </a>
      </div>
      <div className="relative flex-grow ml-72 flex items-center">
        <div className="absolute inset-y-0 left-5 flex items-center text-gray-400">
          <AiOutlineSearch className="text-gray-400 text-xl" />
        </div>
        <input
          className="pl-12 pr-16 py-2 w-3/4 border rounded-md border-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="flex items-center relative">
        <a href="/wishlist">
          <AiFillHeart className="text-xl mr-8  text-gray-400 hover:text-red-800" />
        </a>
        {/* Replace the notifications icon with orders icon */}
        <a href="/order-listing">
          <AiOutlineOrderedList className="text-xl mr-8 text-gray-400 hover:text-red-800" />
        </a>
        <div className="relative">
          <a href="/cart" className="relative">
            <FaShoppingCart className="text-xl mr-8 text-gray-400 hover:text-red-800" />
            {cartItems! > 0 && (
              <div className="bg-red-700 text-white rounded-full w-5 h-5 flex items-center justify-center absolute -top-3 right-3 text-xs">
                {cartItems}
              </div>
            )}
          </a>
        </div>
        <a href="/profile">
          <AiOutlineUser className="text-xl mr-8 text-gray-400 hover:text-red-800" />
        </a>
        <button
          onClick={handleLogout}
          className="bg-red-900 text-white border rounded-md py-2 px-4 mr-3 hover:bg-red-700 transition duration-300"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default LoggedInNavbar;
