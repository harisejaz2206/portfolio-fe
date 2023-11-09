import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Toggle from "react-toggle"; // Import the Toggle component
import "react-toggle/style.css"; // Import the Toggle CSS

function InventoryBilling({ selectedProduct }) {
  const [formData, setFormData] = useState({
    trackInventory: false,
    quantityInStock: "",
    originalPrice: "",
    isVariant: false,
    variantWeight: "",
    variantPrice: "",
    variantUnit: "",
    showStatus: true,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? e.target.checked : value,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-[98%]">
        <h1 className="text-base font-semibold text-indigo-600 mb-6 ">
          Add Product to Inventory
        </h1>
        {/* Steps Bar */}
        <div className="mb-6 flex items-center justify-center">
          {/* Left Content */}
          <div className="flex-grow">
            {/* Step 1 */}
            <div className="text-sm text-indigo-600">Step 1</div>
            {/* Step Description */}
            <div className="text-md font-semibold text-gray-800">
              Select Product
            </div>
          </div>
          {/* Right Content */}
          <div className="flex-grow">
            {/* Step 2 */}
            <div className="text-sm text-indigo-600">Step 2</div>
            {/* Step Description */}
            <div className="text-md font-semibold text-gray-800">
              Submit Billing & Inventory Details
            </div>
          </div>
        </div>
        {/* Card showing selected product */}
        {selectedProduct && (
          <div className="mb-6">
            <div className="bg-gray-200 p-4 rounded-md">
              <div className="text-lg font-semibold mb-2">
                {selectedProduct}
              </div>
              {/* Add product image and description here */}
            </div>
          </div>
        )}

        {/* Inventory Details */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Inventory Details
          </h2>
          {/* Track Inventory Toggle */}
          <div className="mb-2 flex items-center">
            <label className="text-sm font-medium text-gray-700">
              Track Inventory
            </label>
            <Toggle
              className="ml-4"
              name="trackInventory"
              checked={formData.trackInventory}
              onChange={handleChange}
            />
          </div>
          {/* Quantity in Stock */}
          <div>
            <label
              htmlFor="quantityInStock"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity in Stock
            </label>
            <input
              type="number"
              id="quantityInStock"
              name="quantityInStock"
              value={formData.quantityInStock}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter quantity"
            />
          </div>
        </div>

        {/* Billing Details */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Billing Details
          </h2>
          {/* Original Price */}
          <div className="mb-2">
            <label
              htmlFor="originalPrice"
              className="block text-sm font-medium text-gray-700"
            >
              Original Price
            </label>
            <input
              type="text"
              id="originalPrice"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter original price"
            />
          </div>
          {/* Variant Toggle */}
          <div className="mb-2 flex items-center">
            <label className="block text-sm font-medium text-gray-700">
              Select Variant
            </label>
            <Toggle
              className="ml-4"
              name="isVariant"
              checked={formData.isVariant}
              onChange={handleChange}
            />
          </div>

          {/* Variant Fields */}
          {formData.isVariant && (
            <div className="flex">
              {/* Variant Weight */}
              <div className="mb-2 flex-grow mr-4">
                <label
                  htmlFor="variantWeight"
                  className="block text-sm font-medium text-gray-700"
                >
                  Variant Weight
                </label>
                <input
                  type="text"
                  id="variantWeight"
                  name="variantWeight"
                  value={formData.variantWeight}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter variant weight"
                />
              </div>

              {/* Variant Price */}
              <div className="mb-2 flex-grow mr-4">
                <label
                  htmlFor="variantPrice"
                  className="block text-sm font-medium text-gray-700"
                >
                  Variant Price
                </label>
                <input
                  type="text"
                  id="variantPrice"
                  name="variantPrice"
                  value={formData.variantPrice}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter variant price"
                />
              </div>

              {/* Variant Unit */}
              <div className="mb-2 flex-grow">
                <label
                  htmlFor="variantUnit"
                  className="block text-sm font-medium text-gray-700"
                >
                  Variant Unit
                </label>
                <input
                  type="text"
                  id="variantUnit"
                  name="variantUnit"
                  value={formData.variantUnit}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter variant unit"
                />
              </div>
            </div>
          )}
        </div>

        {/* Add Variant Button */}
        {formData.isVariant && (
          <div className="mb-6 -mt-4">
            <button className="text-indigo-600 hover:text-indigo-900 focus:outline-none flex items-center">
              <FaPlusCircle className="text-lg" />
              <span className="ml-2">Add Variant</span>
            </button>
          </div>
        )}

        {/* Show/Hide Status Toggle */}
        <div className="mb-6 flex items-center">
          <label className="text-sm font-medium text-gray-700">
            Show Product
          </label>
          <Toggle
            className="ml-4"
            name="showStatus"
            checked={formData.showStatus}
            onChange={handleChange}
          />
        </div>

        {/* Publish Button */}
        <div className="flex justify-between">
          <Link to="/multi-admin/add-to-inventory-1">
            <button className="text-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
              Back
            </button>
          </Link>
          <Link to="/multi-admin/catalogue">
            <button
              className="text-white bg-gradient-to-br from-indigo-600 to-indigo-800 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2"
              style={{ display: "flex", alignItems: "center" }}
            >
              Publish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InventoryBilling;
