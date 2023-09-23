import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // Import the react-toggle styles

function AddCategoryForm() {
  const [formData, setFormData] = useState({
    selectedStore: "",
    selectedProduct: "",
    name: "",
    quantity: "",
    price: "",
    brand: "",
    category: "",
    showProduct: false,
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToggleChange = () => {
    setFormData({
      ...formData,
      showProduct: !formData.showProduct,
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: [...formData.images, ...files],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const stores = ["Store 1", "Store 2", "Store 3"];
  const products = ["Product A", "Product B", "Product C"];
  const brands = ["Brand X", "Brand Y", "Brand Z"];
  const categories = ["Category 1", "Category 2", "Category 3"];

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-[98%] max-w-3xl mt-2 mb-2">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Add Category
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Category Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <Toggle
              id="showProduct"
              name="showProduct"
              value={formData.showProduct}
              onChange={handleToggleChange}
              icons={false} // Use custom icons
              className="react-toggle"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700"
            >
              Add Image(s)
            </label>
            <input
              type="file"
              id="images"
              name="images"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-between">
            <Link to="/admin/categories">
              <button className="text-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="text-white bg-gradient-to-br from-indigo-600 to-indigo-800 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2"
              style={{ display: "flex", alignItems: "center" }}
            >
              Next <FaArrowRight className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCategoryForm;
