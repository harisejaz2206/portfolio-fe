import React, { useState } from 'react';
import { AiFillHeart, AiFillBell, AiOutlineSearch } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial state to false
  const [showLoginOptions, setShowLoginOptions] = useState(false); // Set initial state to false

  // Function to handle sign out
  const handleSignOut = () => {
    // Implement your sign-out logic here
    setIsLoggedIn(false); // Set the user as not logged in
  };

  const toggleLoginOptions = () => {
    setShowLoginOptions(!showLoginOptions);
  };
  return (
    <div className="flex items-center py-2 px-4">
      <h1 className="text-2xl font-bold mr-20 ml-20 text-red-900">Dotbrand</h1>
      <div className="relative flex-grow ml-3 flex items-center">
        <div className="absolute inset-y-0 left-5 flex items-center text-gray-400">
          <AiOutlineSearch className="text-gray-400 text-xl" />
        </div>
        <input
          className="pl-12 pr-16 py-2 w-3/4 border rounded-md border-gray-300 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="flex items-center">
        <a href="/wishlist">
          <AiFillHeart className="text-xl mr-3 text-gray-400" />
        </a>
        <AiFillBell className="text-xl mr-3 text-gray-400" />
        <a href="/cart">
          <FaShoppingCart className="text-xl mr-3 text-gray-400" />
        </a>
        
        {isLoggedIn ? (
          // Render Sign Out button when the user is logged in
          <button onClick={handleSignOut} className="bg-red-900 text-white border rounded-md py-2 px-4 mr-3 hover:bg-red-700 transition duration-300">
            Sign Out
          </button>
        ) : (
          // Render Sign Up and Login buttons when the user is not logged in
          <>
           <button
              onClick={toggleLoginOptions}
              className="font-bold text-red-900 mr-3 ml-3 z-10"
            >
              Log in
            </button>
            {showLoginOptions && (
              <div className="flex flex-col absolute top-12 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-20 ">
                <a href="/login" className="px-4 py-2 hover:bg-red-800 hover:text-white">
                  User Login
                </a>
                <a href="/superlogin" className="px-4 py-2 hover:bg-red-800 hover:text-white">
                  Super Admin Login
                </a>
                <a href="/multilogin" className="px-4 py-2 hover:bg-red-800 hover:text-white">
                  Multi Chain Admin Login
                </a>
                <a href="/solelogin" className="px-4 py-2 hover:bg-red-800 hover:text-white">
                  Sole Chain Admin Login
                </a>
              </div>
            )}
            <a href="/signUp">
              <button className="bg-red-900 text-white border rounded-md py-2 px-4 mr-3 hover:bg-red-700 transition duration-300">
                Sign Up
              </button>
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
