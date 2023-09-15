import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EditOutletForm() {
  const [formData, setFormData] = useState({
    outletName: '',
    ownerName: '',
    ownerEmail: '',
    adminName: '',
    adminEmail: '',
    adminPassword: '',
    branchName: '',
    location: '',
    membershipTime: '1-year', // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // For testing purposes
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Edit Outlet</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Outlet Name */}
          <div>
            <label htmlFor="outletName" className="block text-sm font-medium text-gray-700">
              Outlet Name
            </label>
            <input
              type="text"
              id="outletName"
              name="outletName"
              value={formData.outletName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter outlet name"
            />
          </div>

          {/* Owner Details */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Outlet Owner Details</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Owner Name */}
              <div>
                <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
                  Owner Name
                </label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter owner name"
                />
              </div>

              {/* Owner Email */}
              <div>
                <label htmlFor="ownerEmail" className="block text-sm font-medium text-gray-700">
                  Owner Email
                </label>
                <input
                  type="text"
                  id="ownerEmail"
                  name="ownerEmail"
                  value={formData.ownerEmail}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter owner email"
                />
              </div>
            </div>
          </div>

          {/* Admin Details */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Outlet Admin Details</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Admin Name */}
              <div>
                <label htmlFor="adminName" className="block text-sm font-medium text-gray-700">
                  Admin Name
                </label>
                <input
                  type="text"
                  id="adminName"
                  name="adminName"
                  value={formData.adminName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter admin name"
                />
              </div>

              {/* Admin Email */}
              <div>
                <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700">
                  Admin Email
                </label>
                <input
                  type="text"
                  id="adminEmail"
                  name="adminEmail"
                  value={formData.adminEmail}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter admin email"
                />
              </div>

              {/* Admin Password */}
              <div>
                <label htmlFor="adminPassword" className="block text-sm font-medium text-gray-700">
                  Admin Password
                </label>
                <input
                  type="password"
                  id="adminPassword"
                  name="adminPassword"
                  value={formData.adminPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter admin password"
                />
              </div>
            </div>
          </div>

          {/* Branch Name */}
          <div>
            <label htmlFor="branchName" className="block text-sm font-medium text-gray-700">
              Outlet Branch Name
            </label>
            <input
              type="text"
              id="branchName"
              name="branchName"
              value={formData.branchName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter branch name"
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter location"
            />
          </div>

          {/* Membership Time */}
          <div>
            <label htmlFor="membershipTime" className="block text-sm font-medium text-gray-700">
              Outlet Membership Time
            </label>
            <select
              id="membershipTime"
              name="membershipTime"
              value={formData.membershipTime}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="1-year">1 Year</option>
              <option value="2-year">2 Year</option>
              <option value="3-year">3 Year</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
          <Link to="/admin/outlets">  
          <button
          type="submit"
          className="text-white bg-gradient-to-br from-indigo-600 to-indigo-800 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center"
          >
          
          <span >Update</span>
          </button>
         </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditOutletForm;
