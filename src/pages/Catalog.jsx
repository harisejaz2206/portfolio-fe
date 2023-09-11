import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaPlusCircle, FaShoppingCart, FaEye } from 'react-icons/fa'; // Import icons
import Toggle from 'react-toggle'; // Import the Toggle component
import 'react-toggle/style.css'; // Import the styles for the Toggle component

function Catalog() {
  // Dummy data for catalog (replace with your actual data)
  const initialCatalog = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      brand: 'Brand A',
      category: 'Category 1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      brand: 'Brand B',
      category: 'Category 2',
    },
    // Add more catalog items as needed
  ];

  const [catalog, setCatalog] = useState(initialCatalog);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(0);

  // Function to filter products based on search query
  const filteredCatalog = catalog.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle pagination
  const totalPages = Math.ceil(filteredCatalog.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = (currentPage + 1) * itemsPerPage;
  const currentItems = filteredCatalog.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Catalog</h1>

        <div className="flex items-center mb-4">
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
        </div>

        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead>
            <tr>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Brand
              </th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-4 py-3 bg-gray-50 font-medium text-xs text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>


          <tbody className="bg-white divide-y divide-gray-200">
  {currentItems.map((product) => (
    <tr key={product.id}>
      <td className="px-4 py-2 whitespace-no-wrap">{product.name}</td>
      <td className="px-4 py-2 whitespace-no-wrap">${product.price.toFixed(2)}</td>
      <td className="px-4 py-2 whitespace-no-wrap">{product.brand}</td>
      <td className="px-4 py-2 whitespace-no-wrap">{product.category}</td>
      <td className="px-4 py-2 whitespace-no-wrap text-right">
        <div className="flex items-center ml-[23%]">
        <Link
  to={`/admin/view-product/${product.id}`}
  className="flex items-center justify-center px-2 py-1 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:underline text-sm"
>
  <FaEye className="mr-1 text-sm" />
  View Product
</Link>

<button
  className="flex items-center justify-center px-2 py-1 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:underline ml-4 text-sm"
>
  <FaPlusCircle className="mr-1 text-sm" />
  Add to Inventory
</button>

        </div>
      </td>
    </tr>
  ))}
</tbody>



        </table>

        <div className="mt-4 flex justify-center">
          <ul className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i}>
                <button
                  className={`px-2 py-1 ${
                    i === currentPage
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-300 hover:bg-gray-400 text-gray-600'
                  } rounded-full`}
                  onClick={() => handlePageChange(i)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
