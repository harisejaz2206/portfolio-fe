import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaPlusCircle, FaEdit } from "react-icons/fa"; // Import the FaEdit and FaTrash icons
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { selectOutletData, selectOutletLoading } from "../app/features/outlet/outlet.selector";
import { getOutlets } from "../app/features/outlet/outlet.thunk";
import { selectToken } from "../app/features/auth/auth.selector";
import { HttpService } from "../app/services/base.service";
import { PropagateLoader } from 'react-spinners'; // Import the loader
import { Toast } from "../utils/toast";


const ManageOutlets: React.FC = () => {
  const token = useSelector(selectToken);
  console.log(token);
  HttpService.setToken(token!);

  const dispatch = useDispatch<AppThunkDispatch>();
  // const navigate = useNavigate();
  const outletData = useSelector(selectOutletData);
  const loading = useSelector(selectOutletLoading);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getOutlets()).then((result: any) => {
          if ('message' in result.payload) {
            console.log(result.payload.message);
            Toast.fire({
              icon: "success",
              title: result.payload.message,
            });
          }
        })
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };

    fetchData();
  }, [dispatch]);

  // Function to filter outlets based on search query
  const filteredOutlets = outletData!.filter(
    (outlet) =>
      outlet.outletName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      outlet.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {loading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 9999,
          backgroundColor: 'rgba(255, 255, 255, 0.8)'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            <PropagateLoader color="#000000" />
          </div>
        </div>
      )}
      <div className={`bg-white rounded-lg shadow p-6 ${loading ? 'blur' : ''}`}>
        <div className="bg-gray-100 min-h-screen p-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">
              Manage Outlets
            </h1>

            <div className="flex justify-between items-center mb-4">
              <div className="relative flex items-center">
                {" "}
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
              </Link>
            </div>

            <table className="min-w-full divide-y divide-gray-200 mt-8">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Outlet Name
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Admin Name
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Admin Email
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Admin Number
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Longitude
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Latitude
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Tax Value
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 bg-gray-50 ">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-sm">
                {filteredOutlets!.map((outlet) => (
                  <tr key={outlet._id}>
                    <td className="px-6 py-4 whitespace-no-wrap">{outlet.outletName}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{outlet.adminName}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{outlet.adminEmail}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{outlet.adminNumber}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {outlet.latitude}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {outlet.longitude}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {outlet.taxValue}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {outlet.address}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {outlet.address}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm  font-medium">
                      <Link to={`/multi-admin/edit-outlet/${outlet._id}`}>
                        <button
                          className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline ml-4"
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
      </div>
    </div>

  );
}

export default ManageOutlets;
