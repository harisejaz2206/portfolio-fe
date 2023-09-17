import React, { useState } from 'react';
import { FaSearch, FaEye, FaStore } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ViewOrders() {
  // Dummy data for orders (replace with your actual data)
  const initialOrders = [
    {
      id: 1,
      customer: 'Customer 1',
      price: 50.0,
      purchasedOn: '2023-09-01',
      status: 'Delivered',
    },
    {
      id: 2,
      customer: 'Customer 2',
      price: 75.0,
      purchasedOn: '2023-09-02',
      status: 'Processing',
    },
    {
        id: 3,
        customer: 'Customer 2',
        price: 75.0,
        purchasedOn: '2023-09-02',
        status: 'Processing',
      },
      {
        id: 4,
        customer: 'Customer 2',
        price: 75.0,
        purchasedOn: '2023-09-02',
        status: 'Processing',
      },
      {
        id: 5,
        customer: 'Customer 2',
        price: 75.0,
        purchasedOn: '2023-09-02',
        status: 'Processing',
      },
      {
        id: 6,
        customer: 'Customer 2',
        price: 75.0,
        purchasedOn: '2023-09-02',
        status: 'Processing',
      },
      {
        id: 7,
        customer: 'Customer 2',
        price: 75.0,
        purchasedOn: '2023-09-02',
        status: 'Processing',
      },
      {
        id: 8,
        customer: 'Customer 2',
        price: 75.0,
        purchasedOn: '2023-09-02',
        status: 'Processing',
      },
      {
        id: 9,
        customer: 'Customer 2',
        price: 75.0,
        purchasedOn: '2023-09-02',
        status: 'Processing',
      },
      {
        id: 10,
        customer: 'Customer 2',
        price: 75.0,
        purchasedOn: '2023-09-02',
        status: 'Processing',
      },
      {
        id: 11,
        customer: 'Customer 11',
        price: 75.0,
        purchasedOn: '2023-09-02',
        status: 'Processing',
      },
      
    
  ];

  // Number of items to display per page
  const itemsPerPage = 10;

  const [orders, setOrders] = useState(initialOrders);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchStore, setSearchStore] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Function to filter orders based on search query
  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to calculate the total number of pages
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentItems = filteredOrders.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
       {currentItems.length > 0 ? (
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-base text-indigo-600 font-semibold mb-4">Orders</h1>

        <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-md pl-10 pr-4 py-1 w-64 focus:outline-none focus:ring focus:border-indigo-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute left-3 top-2 text-gray-400">
                <FaSearch />
              </span>
            </div>
          </div>
          <div className="ml-4 relative">
            <span className="absolute left-3 top-2 text-gray-400">
              <FaStore />
            </span>
            <input
              type="text"
              placeholder="Select Store"
              className="border rounded-md pl-10 pr-4 py-1 w-64 focus:outline-none focus:ring focus:border-indigo-300"
              value={searchStore}
              onChange={(e) => setSearchStore(e.target.value)}
            />
          </div>
        </div>

        <table className="min-w-full divide-y divide-gray-200 mt-8 text-sm">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Order Id
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Purchased On
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 bg-gray-50 font-medium text-xs text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{order.id}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{order.customer}</td>
                <td className="px-6 py-4 whitespace-no-wrap">${order.price}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{order.purchasedOn}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{order.status}</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm font-medium">
                <div className="flex items-center -ml-4 ">
                    <Link to={`/admin/view-orderdetails/${order.id}`}
                    className="ml-20 flex items-center justify-center px-2 py-1 rounded-md text-indigo-600 hover:underline focus:outline-none focus:underline text-sm"
                    > <FaEye className="mr-1 text-sm text-indigo-600" />
                    View Details
                    </Link>
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
                  className={`px-3 py-1 ${
                    i + 1 === currentPage
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-300 hover:bg-gray-400 text-gray-600'
                  } rounded-md`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
     ) : (
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          src="/Empty Wishlist.png" // Replace with your no user image path
          alt="No Users"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-600 text-lg font-semibold mb-4">
          Whoops! There are no current users present.
        </p>
        <Link to="/admin/" className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">
          Back to Dashboard
        </Link>
      </div>
    )}
  </div>
);
}

export default ViewOrders;
