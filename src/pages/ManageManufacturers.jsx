import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaEdit, FaFilter, FaPlusCircle, FaDownload, FaUpload } from 'react-icons/fa';

function ManageManufacturers() {
  // Dummy data for manufacturers (replace with your actual data)
  const initialManufacturers = [
    {
      id: 1,
      name: 'Manufacturer 1',
      products: 20,
      store: 'Store A',
    },
    {
      id: 2,
      name: 'Manufacturer 2',
      products: 15,
      store: 'Store B',
    },
    // Add more manufacturers as needed
  ];

  const [manufacturers, setManufacturers] = useState(initialManufacturers);
  const [searchStoreQuery, setSearchStoreQuery] = useState('');
  const [searchProductQuery, setSearchProductQuery] = useState('');
  const [filterOptionsVisible, setFilterOptionsVisible] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const files = e.target.files;
    setSelectedFiles(files);
  };

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

  // Function to filter manufacturers based on search queries
  const filteredManufacturers = manufacturers.filter((manufacturer) =>
    manufacturer.store.toLowerCase().includes(searchStoreQuery.toLowerCase()) &&
    manufacturer.products.toString().includes(searchProductQuery)
  );

  const uploadSelectedFiles = () => {
    // Check if files were selected
    if (selectedFiles.length === 0) {
      alert('Please select one or more files.');
      return;
    }

    // Process the selected files here (e.g., upload to the server)

    // Clear the selected files
    setSelectedFiles([]);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Manage Manufacturers</h1>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-400">
                <FaSearch className='text-sm' />
              </span>
              <input
                type="text"
                placeholder="Select Store..."
                className="border text-sm rounded-md pl-10 pr-4 py-1 px-4 w-36 focus:outline-none focus:ring focus:border-indigo-300"
                value={searchStoreQuery}
                onChange={(e) => setSearchStoreQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-400">
                <FaSearch className='text-sm' />
              </span>
              <input
                type="text"
                placeholder="Select Product..."
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

          <div className="flex items-center space-x-2 text-sm">
          <Link
              to="/admin/create-product"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-3 rounded-md flex items-center"
            >
              <FaPlusCircle className="mr-2" /> Add Category
            </Link>

            <button
              className="bg-indigo-600 hover:bg-indigo-700  text-white font-semibold py-1 px-3 rounded-md flex items-center"
              onClick={() => {
                fileInputRef.current.click();
              }}
            >
              <FaPlusCircle className="mr-2" /> Add Multiple Categories
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept=".csv, .xlsx"
              multiple
              style={{ display: 'none' }}
              onChange={handleFileSelect}
            />
            {selectedFiles.length > 0 && (
              <button
                className="bg-indigo-600 hover:bg-indigo-700  text-white font-semibold py-1 px-3 rounded-md flex items-center"
                onClick={uploadSelectedFiles}
              >
                <FaUpload className='mr-2'/> Upload
              </button>
            )}
            <Link to={"/path-to-sample-sheet/sample-sheet.xlsx"}>
              <button
                className="bg-indigo-600 hover:bg-indigo-700  text-white font-semibold py-1 px-3 rounded-md flex items-center"
                download
              >
                <FaDownload className="mr-2" /> Download Sample Sheet
              </button>
            </Link>
          </div>
        </div>

        {/* Table and manufacturer listing */}
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
                Store
              </th>
              <th className="px-6 py-3 bg-gray-50 font-medium text-xs text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredManufacturers.map((manufacturer) => (
              <tr key={manufacturer.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{manufacturer.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{manufacturer.products}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{manufacturer.store}</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm font-medium">
                  <Link to={`/admin/edit-manufacturer/${manufacturer.id}`}>
                    <button
                      className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                    >
                      <FaEdit className='-ml-20' />
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

export default ManageManufacturers;
