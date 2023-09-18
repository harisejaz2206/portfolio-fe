import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AddToInventoryForm() {
  const [formData, setFormData] = useState({
    selectedStore: '', // Store selection
  });

  const handleStoreChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Define a list of stores (replace with your data)
  const stores = ['Store 1', 'Store 2', 'Store 3'];

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-[98%]">
      <h1 className="text-base font-semibold text-indigo-600 mb-6 ">Add Product to Inventory</h1>
        <div className="mb-6">
          {/* Steps Bar */}
        <div className="mb-6 flex items-center justify-center">
          {/* Left Content */}
          <div className="flex-grow">
            {/* Step 1 */}
            <div className="text-sm text-indigo-600">Step 1</div>
            {/* Step Description */}
            <div className="text-md font-semibold text-gray-800">Select Product</div>
          </div>
          {/* Right Content */}
          <div className="flex-grow">
            {/* Step 2 */}
            <div className="text-sm text-gray-600">Step 2</div>
            {/* Step Description */}
            <div className="text-md font-semibold text-gray-800">Submit Billing & Inventory Details</div>
          </div>
        </div>
          {/* Select Store Dropdown */}
          <div className="mb-4">
            <label htmlFor="selectedStore" className="block text-sm font-medium text-gray-700">
              Select Store
            </label>
            <select
              id="selectedStore"
              name="selectedStore"
              value={formData.selectedStore}
              onChange={handleStoreChange}
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Select a Store
              </option>
              {stores.map((store) => (
                <option key={store} value={store}>
                  {store}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Display Selected Product Card */}
        <div className="mb-6">
          <div className="bg-gray-200 p-4 rounded-md">
            {/* You can customize the card layout here */}
            <div className="text-lg font-semibold mb-2">Product Name</div>
            <div className="mb-2">Product Description</div>
            <div className="mb-2">Brand: Brand Name</div>
            <div>Category: Category Name</div>
            {/* Add product image */}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <Link to="/admin/catalogue">
            <button className="text-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
              Cancel
            </button>
          </Link>
          <Link to="/admin/products">
            <button className="text-white bg-gradient-to-br from-indigo-600 to-indigo-800 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2" style={{ display: 'flex', alignItems: 'center' }}>
              Next <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddToInventoryForm;
