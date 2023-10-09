import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaPlusCircle, FaEdit, FaTrash } from "react-icons/fa"; // Import the FaEdit and FaTrash icons
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { selectOutletData } from "../app/features/outlet/outlet.selector";
import { getOutlets } from "../app/features/outlet/outlet.thunk";

type IOutlet = {
  id: number;
  name: string;
  location: string;
  isActive: boolean;
};

const ManageOutlets: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const outletData = useSelector(selectOutletData);
  console.log(outletData)

  const [outlets, setOutlets] = useState(outletData);
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await dispatch(getOutlets()); // Using await with dispatch here
  //     } catch (error) {
  //       console.error("An error occurred while fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);

  // Function to filter outlets based on search query
  const filteredOutlets = outletData!.filter(
    (outlet) =>
      outlet.outletName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      outlet.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Manage Outlets
        </h1>

        <div className="flex justify-between items-center mb-4">
          <div className="relative flex items-center">
            {" "}
            {/* Wrap the search bar in a flex container */}
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
            to="/multi-admin/create-outlet"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-3 rounded-md flex items-center" // Add flex to the button
          >
            <FaPlusCircle className="mr-2" /> Add Outlet{" "}
            {/* Use the FaPlus icon and add margin-right */}
          </Link>
        </div>

        <table className="min-w-full divide-y divide-gray-200 mt-8">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Longitude
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Latitude
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 bg-gray-50 "></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm">
            {filteredOutlets!.map((outlet) => (
              <tr key={outlet._id}>
                <td className="px-6 py-4 whitespace-no-wrap">{outlet.outletName}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {outlet.latitude}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {outlet.longitude}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {outlet.address}
                </td>
                {/* <td className="px-6 py-4 whitespace-no-wrap">
                  {outlet.isActive ? (
                    <span className="text-green-600">Active</span>
                  ) : (
                    <span className="text-red-600">Inactive</span>
                  )}
                </td> */}
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm  font-medium">
                  {/* <button
                    className={`${outlet.isActive ? "text-red-600" : "text-green-600"
                      } hover:text-red-900 focus:outline-none focus:underline`}
                    onClick={() => {
                      outlet.isActive
                        ? deactivateOutlet(outlet.id)
                        : activateOutlet(outlet.id);
                    }}
                  >
                    {outlet.isActive ? "Deactivate" : "Activate"}
                  </button> */}
                  <Link to={`/multi-admin/edit-outlet/${outlet._id}`}>
                    <button
                      className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline ml-4"
                    // Add onClick handler for editing outlet details
                    >
                      <FaEdit /> {/* Use the FaEdit icon */}
                    </button>
                  </Link>
                  {/* <button
                    className="text-red-600 hover:text-red-900 focus:outline-none focus:underline ml-4"
                    onClick={() => removeOutlet(outlet.id)}
                  >
                    <FaTrash /> {/* Use the FaTrash icon */}
                  {/* </button> */}
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
