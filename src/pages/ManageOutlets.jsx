import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaPlusCircle, FaEdit, FaTrash } from 'react-icons/fa'; // Import the FaEdit and FaTrash icons

function ManageOutlets() {
  // Dummy data for outlets (replace with your actual data)
  const initialOutlets = [
    { id: 1, name: 'Outlet 1', location: 'Location 1', isActive: true },
    { id: 2, name: 'Outlet 2', location: 'Location 2', isActive: true },
    { id: 3, name: 'Outlet 3', location: 'Location 3', isActive: true },
  ];

  const [outlets, setOutlets] = useState(initialOutlets);
  const [searchQuery, setSearchQuery] = useState('');
  

  // Function to deactivate an outlet
  const deactivateOutlet = (outletId) => {
    const updatedOutlets = outlets.map((outlet) =>
      outlet.id === outletId ? { ...outlet, isActive: false } : outlet
    );
    setOutlets(updatedOutlets);
  };

  // Function to activate an outlet
  const activateOutlet = (outletId) => {
    const updatedOutlets = outlets.map((outlet) =>
      outlet.id === outletId ? { ...outlet, isActive: true } : outlet
    );
    setOutlets(updatedOutlets);
  };

  // Function to remove an outlet
  const removeOutlet = (outletId) => {
    const updatedOutlets = outlets.filter((outlet) => outlet.id !== outletId);
    setOutlets(updatedOutlets);
  };

  // Function to filter outlets based on search query
  const filteredOutlets = outlets.filter(
    (outlet) =>
      outlet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      outlet.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Manage Outlets</h1>

        <div className="flex justify-between items-center mb-4">
          <div className="relative flex items-center"> {/* Wrap the search bar in a flex container */}
            <span className="absolute left-3 top-2 text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search outlets..."
              className="border rounded-md pl-10 pr-4 py-1 w-64 focus:outline-none focus:ring focus:border-indigo-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Link
            to="/admin/create-outlet"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-3 rounded-md flex items-center" // Add flex to the button
          >
            <FaPlusCircle className="mr-2" /> Add Outlet {/* Use the FaPlus icon and add margin-right */}
          </Link>
        </div>

        <table className="min-w-full divide-y divide-gray-200 mt-8">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 bg-gray-50 ">
                
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm">
            {filteredOutlets.map((outlet) => (
              <tr key={outlet.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{outlet.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{outlet.location}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {outlet.isActive ? (
                    <span className="text-green-600">Active</span>
                  ) : (
                    <span className="text-red-600">Inactive</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm  font-medium">
                  <button
                    className={`${
                      outlet.isActive ? 'text-red-600' : 'text-green-600'
                    } hover:text-red-900 focus:outline-none focus:underline`}
                    onClick={() => {
                      outlet.isActive ? deactivateOutlet(outlet.id) : activateOutlet(outlet.id);
                    }}
                  >
                    {outlet.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                  <Link to={`/admin/edit-outlet/${outlet.id}`}>
                  <button
                    className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline ml-4"
                    // Add onClick handler for editing outlet details
                  >
                    <FaEdit /> {/* Use the FaEdit icon */}
                  </button>
                  </Link>
                  <button
                    className="text-red-600 hover:text-red-900 focus:outline-none focus:underline ml-4"
                    onClick={() => removeOutlet(outlet.id)}
                  >
                    <FaTrash /> {/* Use the FaTrash icon */}
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

export default ManageOutlets;
