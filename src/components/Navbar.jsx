import React from 'react';
import { AiFillHeart, AiFillBell, AiOutlineSearch } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
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
        <a href="/login" className='font-bold text-red-900 mr-9 ml-9'>Login</a>
        <a href="/signUp">
        <button className="bg-red-900 text-white border rounded-md py-2 px-4 mr-20 hover:bg-red-700 transition duration-300">
          Sign Up
        </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
