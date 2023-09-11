import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AddProductForm() {
  const [formData, setFormData] = useState({
    selectedStore: '', // Store selection
    selectedProduct: '', // Product selection
  });

  const handleStoreChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Define a list of stores and products (replace with your data)
  const stores = ['Store 1', 'Store 2', 'Store 3'];
  const products = ['Product A', 'Product B', 'Product C'];

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-[98%]">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Add Product</h1>
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
            <div className="text-md font-semibold text-gray-800">Add Details</div>
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

          {/* Product Selection */}
          <div className="mb-4">
            <label htmlFor="selectedProduct" className="block text-sm font-medium text-gray-700">
              Search and Select Product
            </label>
            <select
              id="selectedProduct"
              name="selectedProduct"
              value={formData.selectedProduct}
              onChange={handleProductChange}
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Select a Product
              </option>
              {products.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Display Selected Product Card */}
        {formData.selectedProduct && (
          <div className="mb-6">
            <div className="bg-gray-200 p-4 rounded-md">
              {/* You can customize the card layout here */}
              <div className="text-lg font-semibold mb-2">{formData.selectedProduct}</div>
              {/* Add product image */}
              {/* Add additional product details */}
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between">
          <Link to="/admin/products">
            <button className="text-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
              Cancel
            </button>
          </Link>
          <Link to="/admin/billing-and-inventory">
  <button className="text-white bg-gradient-to-br from-indigo-600 to-indigo-800 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2" style={{ display: 'flex', alignItems: 'center' }}>
    Next <FaArrowRight className="ml-2" />
  </button>
</Link>

        </div>
      </div>
    </div>
  );
}

export default AddProductForm;
