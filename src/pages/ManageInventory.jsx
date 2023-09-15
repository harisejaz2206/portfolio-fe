import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaEdit, FaTrash, FaPlusCircle } from 'react-icons/fa';
import Toggle from 'react-toggle'; // Import the Toggle component
import 'react-toggle/style.css'; // Import the styles for the Toggle component

function ManageInventory() {
  // Dummy data for inventory (replace with your actual data)
  const initialInventory = [
    {
      id: 1,
      name: 'Product 1',
      stock: 50,
      price: 19.99,
      brand: 'Brand A',
      category: 'Category 1',
      isFeatured: true,
      isPublished: true,
    },
    {
      id: 2,
      name: 'Product 2',
      stock: 25,
      price: 29.99,
      brand: 'Brand B',
      category: 'Category 2',
      isFeatured: false,
      isPublished: false,
    },
    // Add more inventory items as needed
  ];

  const [inventory, setInventory] = useState(initialInventory);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to toggle featured status
  const toggleFeatured = (productId) => {
    const updatedInventory = inventory.map((product) =>
      product.id === productId ? { ...product, isFeatured: !product.isFeatured } : product
    );
    setInventory(updatedInventory);
  };

  // Function to toggle publish status
  const togglePublishStatus = (productId) => {
    const updatedInventory = inventory.map((product) =>
      product.id === productId ? { ...product, isPublished: !product.isPublished } : product
    );
    setInventory(updatedInventory);
  };

  // Function to remove a product from inventory
  const removeProduct = (productId) => {
    const updatedInventory = inventory.filter((product) => product.id !== productId);
    setInventory(updatedInventory);
  };

  // Function to filter products based on search query
  const filteredInventory = inventory.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Manage Inventory</h1>

        <div className="flex justify-between items-center mb-4">
          <div className="relative flex items-center">
            <span className="absolute left-3 top-2 text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search products..."
              className="border rounded-md pl-10 pr-4 py-1 w-64 focus:outline-none focus:ring focus:border-indigo-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Link
            to="/admin/create-product"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-3 rounded-md flex items-center"
          >
            <FaPlusCircle className="mr-2" /> Add Product
          </Link>
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
              <th className="px-6 py-3 bg-gray-50 font-medium  text-xs text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredInventory.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{product.stock}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{product.price}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{product.brand}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{product.category}</td>
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
                  <Link to={`/admin/edit-product/${product.id}`}>
                    <button
                      className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline ml-4"
                    >
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
      </div>
    </div>
  );
}

export default ManageInventory;
