import React, { useState } from 'react';
import Toggle from 'react-toggle';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import 'react-toggle/style.css';


function AddBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [selectedStore, setSelectedStore] = useState('');
  const [bannerTitle, setBannerTitle] = useState('');
  const [bannerDuration, setBannerDuration] = useState('5');
  const [selectedPromotion, setSelectedPromotion] = useState('');

  const handleFileUpload = (e) => {
    // Handle file upload logic here
    // You can use this event to access selected files: e.target.files
  };

  const handleCreateBanner = () => {
    // Handle creating the banner with the selected data
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-lg font-semibold text-gray-800 mb-6">Add Banner</h1>

      {/* Banner Image Upload */}
      <div className="mb-8 text-center">
        
        <div className="w-4/6 h-64 mx-auto border border-dashed border-gray-400 rounded-lg flex flex-col justify-center items-center">
          <label htmlFor="banner-image" className="cursor-pointer text-center">
            <img
              src="/uploadBanner.png" // Replace with your default banner image
              alt="Banner"
              className="w-24 h-24 mx-auto mb-2 rounded-lg shadow-lg object-cover opacity-50"
            />
            <p className="text-gray-500 font-semibold mb-2">Upload Banner Image</p>
          </label>
          <label
            htmlFor="banner-image"
            className="text-white bg-gradient-to-br from-indigo-600 to-indigo-800 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center flex items-center cursor-pointer"
          >
            Choose File
            <input
              type="file"
              id="banner-image"
              accept=".jpg, .png, .jpeg" // Define accepted file types
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </div>

      {/* Select Store */}
      <div className="mb-6 text-base">
        <label htmlFor="store" className="block text-gray-700 font-medium text-base mb-2">
          Select Store
        </label>
        <select
          id="store"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-600 focus:ring-opacity-50 text-gray-700 font-semibold"
          value={selectedStore}
          onChange={(e) => setSelectedStore(e.target.value)}
        >
          <option value="">Select Store</option>
          {/* Add store options here */}
        </select>
      </div>

      {/* Banner Title */}
      <div className="mb-6">
        <label htmlFor="title" className="block text-gray-700 font-medium text-base mb-2">
          Banner Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-600 focus:ring-opacity-50 text-gray-700 font-semibold"
          value={bannerTitle}
          onChange={(e) => setBannerTitle(e.target.value)}
        />
      </div>

      {/* Banner Duration and Promotions */}
      <div className="mb-6 flex space-x-4">
        <div className="w-1/2">
          <label htmlFor="duration" className="block text-gray-700 font-medium text-base mb-2">
            Banner Duration
          </label>
          <select
            id="duration"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-600 focus:ring-opacity-50 text-gray-700 font-semibold"
            value={bannerDuration}
            onChange={(e) => setBannerDuration(e.target.value)}
          >
            <option value="5">5 seconds</option>
            <option value="10">10 seconds</option>
            <option value="20">20 seconds</option>
            <option value="30">30 seconds</option>
          </select>
        </div>
        <div className="w-1/2">
          <label htmlFor="promotion" className="block text-gray-700 font-medium text-base mb-2">
            Promotions
          </label>
          <select
            id="promotion"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:ring-opacity-50 text-gray-700 font-semibold"
            value={selectedPromotion}
            onChange={(e) => setSelectedPromotion(e.target.value)}
          >
            <option value="">Select Promotion</option>
            <option value="deals">Deals</option>
            <option value="categories">Categories</option>
            <option value="manufacturers">Manufacturers</option>
          </select>
        </div>
      </div>

      {/* Add Product(s) Button */}
      <div className="mb-6">
      <button
            className="text-indigo-600 hover:text-indigo-700 font-semibold py-2 px-4 rounded-full focus:outline-none flex items-center hover:underline"
            onClick={() => {
            // Handle adding products
            }}
        >
            <FaPlusCircle className="text-indigo-600 mr-2" />
            Add Product(s)
      </button>
      </div>

      {/* Show Banner Toggle */}
      <div className="mb-6 flex items-center">
        <label className="text-gray-700 font-medium text-base mr-4">Status:</label>
        <Toggle
          checked={showBanner}
          onChange={() => setShowBanner(!showBanner)}
        />
       <label className="text-gray-700 font-medium text-base ml-2">Show</label>
      </div>

      {/* Cancel and Create Buttons */}
      <div className="flex justify-end space-x-2">
        <Link to={"/admin/banners"}>
        <button
          className="text-white bg-gradient-to-br from-gray-400 to-gray-600 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center"
          onClick={() => {
            // Handle cancel action
          }}
        >
          Cancel
        </button>
        </Link>
        <Link to={"/admin/banners"}>
        <button
          className="text-white bg-gradient-to-br from-indigo-600 to-indigo-800 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center"
          onClick={handleCreateBanner}
        >
          Create
        </button>
        </Link>
      </div>
    </div>
  );
}

export default AddBanner;
