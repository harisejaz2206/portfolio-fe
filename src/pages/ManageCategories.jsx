import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaEdit, FaFilter } from 'react-icons/fa';

function ManageCategories() {
  // Dummy data for categories (replace with your actual data)
  const initialCategories = [
    {
      id: 1,
      name: 'Category 1',
      products: 10,
      parentCategory: 'Parent Category A',
    },
    {
      id: 2,
      name: 'Category 2',
      products: 5,
      parentCategory: 'Parent Category B',
    },
    // Add more categories as needed
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [searchCategoryQuery, setSearchCategoryQuery] = useState('');
  const [searchProductQuery, setSearchProductQuery] = useState('');
  const [filterOptionsVisible, setFilterOptionsVisible] = useState(false); // For filter dropdown visibility

  // Function to toggle the filter dropdown
  const toggleFilterOptions = () => {
    setFilterOptionsVisible(!filterOptionsVisible);
  };

  // Function to handle filter option selection
  const handleFilterOptionSelect = (option) => {
    // Implement filtering logic based on the selected option
    console.log('Selected filter option:', option);
    // Close the filter dropdown after selecting an option
    setFilterOptionsVisible(false);
  };

  // Function to filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchCategoryQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Manage Categories</h1>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-400">
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="Search categories..."
                className="border rounded-md pl-10 pr-4 py-1 w-64 focus:outline-none focus:ring focus:border-indigo-300"
                value={searchCategoryQuery}
                onChange={(e) => setSearchCategoryQuery(e.target.value)}
              />
            </div>
            <div className="ml-4 relative">
              <span className="absolute left-3 top-2 text-gray-400">
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="Search products..."
                className="border rounded-md pl-10 pr-4 py-1 w-64 focus:outline-none focus:ring focus:border-indigo-300"
                value={searchProductQuery}
                onChange={(e) => setSearchProductQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="relative">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-2 rounded-md ml-4 focus:outline-none"
              onClick={toggleFilterOptions}
            >
              <FaFilter className="mr-2" />
              Filter
            </button>
            {filterOptionsVisible && (
              <div className="absolute mt-2 p-2 border rounded-lg bg-white">
                <div
                  className="cursor-pointer hover:bg-indigo-100 p-2"
                  onClick={() => handleFilterOptionSelect('Category')}
                >
                  Category
                </div>
                <div
                  className="cursor-pointer hover:bg-indigo-100 p-2"
                  onClick={() => handleFilterOptionSelect('Manufacturer')}
                >
                  Manufacturer
                </div>
                <div
                  className="cursor-pointer hover:bg-indigo-100 p-2"
                  onClick={() => handleFilterOptionSelect('PriceLowToHigh')}
                >
                  Price: Low to High
                </div>
                <div
                  className="cursor-pointer hover:bg-indigo-100 p-2"
                  onClick={() => handleFilterOptionSelect('PriceHighToLow')}
                >
                  Price: High to Low
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Table and category listing */}
        <table className="min-w-full divide-y divide-gray-200 mt-8 text-sm">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Products
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Parent Category
              </th>
              <th className="px-6 py-3 bg-gray-50 font-medium text-xs text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCategories.map((category) => (
              <tr key={category.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{category.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{category.products}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{category.parentCategory}</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm font-medium">
                  <Link to={`/admin/edit-category/${category.id}`}>
                    <button
                      className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                    >
                      <FaEdit />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageCategories;
