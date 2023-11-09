import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaPlusCircle,
  FaDownload,
  FaUpload,
  FaFilter,
} from "react-icons/fa";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import Pagination from "../components/Pagination";

function ManageInventory() {
  // Dummy data for inventory (replace with your actual data)
  const initialInventory = [
    {
      id: 1,
      name: "Product 1",
      stock: 50,
      price: 19.99,
      brand: "Brand A",
      category: "Category 1",
      isFeatured: true,
      isPublished: true,
    },
    {
      id: 2,
      name: "Product 2",
      stock: 25,
      price: 29.99,
      brand: "Brand B",
      category: "Category 2",
      isFeatured: false,
      isPublished: false,
    },
    {
      id: 3,
      name: "Product 3",
      stock: 42,
      price: 15.49,
      brand: "Brand C",
      category: "Category 3",
      isFeatured: true,
      isPublished: true,
    },
    {
      id: 4,
      name: "Product 4",
      stock: 18,
      price: 49.99,
      brand: "Brand A",
      category: "Category 1",
      isFeatured: true,
      isPublished: true,
    },
    {
      id: 5,
      name: "Product 5",
      stock: 63,
      price: 22.99,
      brand: "Brand B",
      category: "Category 2",
      isFeatured: false,
      isPublished: true,
    },
    {
      id: 6,
      name: "Product 6",
      stock: 33,
      price: 12.99,
      brand: "Brand C",
      category: "Category 3",
      isFeatured: false,
      isPublished: false,
    },
    {
      id: 7,
      name: "Product 7",
      stock: 75,
      price: 18.99,
      brand: "Brand A",
      category: "Category 1",
      isFeatured: true,
      isPublished: true,
    },
    {
      id: 8,
      name: "Product 8",
      stock: 10,
      price: 35.99,
      brand: "Brand B",
      category: "Category 2",
      isFeatured: false,
      isPublished: true,
    },
    {
      id: 9,
      name: "Product 9",
      stock: 27,
      price: 9.99,
      brand: "Brand C",
      category: "Category 3",
      isFeatured: true,
      isPublished: false,
    },
    {
      id: 10,
      name: "Product 10",
      stock: 38,
      price: 14.99,
      brand: "Brand A",
      category: "Category 1",
      isFeatured: false,
      isPublished: true,
    },
    {
      id: 11,
      name: "Product 11",
      stock: 20,
      price: 32.99,
      brand: "Brand B",
      category: "Category 2",
      isFeatured: true,
      isPublished: true,
    },
    // Add more inventory items as needed
  ];

  const [inventory, setInventory] = useState(initialInventory);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchProductQuery, setSearchProductQuery] = useState("");
  const [filterOptionsVisible, setFilterOptionsVisible] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const itemsPerPage = 10; // Set the number of products to display per page
  const [currentPage, setCurrentPage] = useState(0);

  const handleFileSelect = (e) => {
    const files = e.target.files;
    setSelectedFiles(files);
  };

  const toggleFilterOptions = () => {
    setFilterOptionsVisible(!filterOptionsVisible);
  };

  // Function to handle filter option selection
  const handleFilterOptionSelect = (option) => {
    // Implement filtering logic based on the selected option
    // Close the filter dropdown after selecting an option
    setFilterOptionsVisible(false);
  };

  // Function to toggle featured status
  const toggleFeatured = (productId) => {
    const updatedInventory = inventory.map((product) =>
      product.id === productId
        ? { ...product, isFeatured: !product.isFeatured }
        : product
    );
    setInventory(updatedInventory);
  };

  // Function to toggle publish status
  const togglePublishStatus = (productId) => {
    const updatedInventory = inventory.map((product) =>
      product.id === productId
        ? { ...product, isPublished: !product.isPublished }
        : product
    );
    setInventory(updatedInventory);
  };

  // Function to remove a product from inventory
  const removeProduct = (productId) => {
    const updatedInventory = inventory.filter(
      (product) => product.id !== productId
    );
    setInventory(updatedInventory);
  };

  // Function to filter products based on search query
  const filteredInventory = inventory.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const uploadSelectedFiles = () => {
    // Check if files were selected
    if (selectedFiles.length === 0) {
      alert("Please select one or more files.");
      return;
    }

    // Process the selected files here (e.g., upload to the server)

    // Clear the selected files
    setSelectedFiles([]);
  };

  const totalPages = Math.ceil(filteredInventory.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInventory = filteredInventory.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Manage Inventory
        </h1>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4 text-sm">
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-400">
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="Search products..."
                className="border rounded-md pl-10 pr-4 py-1 w-36 focus:outline-none focus:ring focus:border-indigo-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-400">
                <FaSearch className="text-sm" />
              </span>
              <input
                type="text"
                placeholder="Select Store..."
                className="border text-sm rounded-md pl-10 pr-4 py-1 px-4 w-36 focus:outline-none focus:ring focus:border-indigo-300"
                value={searchProductQuery}
                onChange={(e) => setSearchProductQuery(e.target.value)}
              />
            </div>
            <div className="relative ml-4 text-sm">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-2 rounded-md focus:outline-none flex items-center"
                onClick={toggleFilterOptions}
              >
                <FaFilter className="mr-1" />
              </button>
              {filterOptionsVisible && (
                <div className="absolute mt-2 p-2 border rounded-lg bg-white text-sm">
                  {/* Your filter options here */}
                </div>
              )}
            </div>
          </div>

          <div className="flex space-x-4 text-sm">
            {" "}
            {/* Add this div for the new buttons */}
            <Link
              to="/multi-admin/create-product"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-3 rounded-md flex items-center"
            >
              <FaPlusCircle className="mr-2" /> Add Product
            </Link>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-3 rounded-md flex items-center"
              onClick={() => {
                fileInputRef.current.click();
              }}
            >
              <FaPlusCircle className="mr-2" /> Add Multiple Products
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept=".csv, .xlsx"
              multiple
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
            {selectedFiles.length > 0 && ( // Only render the "Upload" button when files are selected
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-3 rounded-md flex items-center"
                onClick={uploadSelectedFiles}
              >
                <FaUpload className="mr-2" /> Upload
              </button>
            )}
            <Link to={"/path-to-sample-sheet/sample-sheet.xlsx"}>
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-3 rounded-md flex items-center"
                download
              >
                <FaDownload className="mr-2" /> Download Sample Sheet
              </button>
            </Link>
          </div>
        </div>

        <table className="min-w-full divide-y divide-gray-200 mt-8 text-sm">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Brand
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Featured Product
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Publish Status
              </th>
              <th className="px-6 py-3 bg-gray-50 font-medium  text-xs text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentInventory.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {product.price}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {product.brand}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <Toggle
                    checked={product.isFeatured}
                    onChange={() => toggleFeatured(product.id)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <Toggle
                    checked={product.isPublished}
                    onChange={() => togglePublishStatus(product.id)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm font-medium">
                  <Link to={`/multi-admin/edit-product/${product.id}`}>
                    <button className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline ml-4">
                      <FaEdit />
                    </button>
                  </Link>
                  <button
                    className="text-red-600 hover:text-red-900 focus:outline-none focus:underline ml-4"
                    onClick={() => removeProduct(product.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default ManageInventory;
