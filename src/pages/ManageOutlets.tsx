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
import Pagination from "../components/Pagination";


const ManageOutlets: React.FC = () => {
  const token = useSelector(selectToken);
  HttpService.setToken(token!);

  const dispatch = useDispatch<AppThunkDispatch>();
  // const navigate = useNavigate();
  const outletData = useSelector(selectOutletData);
  const loading = useSelector(selectOutletLoading);

  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getOutlets()).then((result: any) => {
          if ('message' in result.payload) {
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
  // const filteredOutlets = outletData!.filter(
  //   (outlet) =>
  //     outlet.outletName.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     outlet.address.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  const filteredOutlets = outletData ? outletData.filter(
    (outlet) =>
      outlet.outletName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      outlet.address.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  const start = currentPage * itemsPerPage;
  const end = (currentPage + 1) * itemsPerPage;
  const displayedOutlets = filteredOutlets.slice(start, end);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

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
      <div className={`bg-gray-100 min-h-screen p-4 ${loading ? 'blur' : ''}`}>
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
            <PropagateLoader color={"#123abc"} loading={true} size={15} />
          </div>
        )}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">
              Manage Outlets
            </h1>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4 text-sm">
                <div className="relative text-base">
                  <span className="absolute left-3 top-[30%] text-gray-600 ">
                    <FaSearch />
                  </span>
                  <input
                    type="text"
                    placeholder="Search outlets..."
                    className="border border-gray-600 rounded-md pl-10 pr-4 py-[5%] w-52 focus:outline-none focus:ring focus:border-indigo-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex space-x-4 text-sm">
                <Link
                  to="/multi-admin/create-outlet"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 text-base rounded-lg flex items-center"
                >
                  <FaPlusCircle className="mr-2" /> Add Outlet
                </Link>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200 mt-8 text-sm">
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
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {displayedOutlets!.map((outlet) => (
                  <tr key={outlet._id}>
                    <td className="px-6 py-3 whitespace-no-wrap ">
                      <div className="truncate max-w-xs">{outlet.outletName}</div>
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap w-[25%]">
                      <div className="truncate max-w-xs"> {outlet.adminName}</div>
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap w-1/6">
                      <div className="truncate max-w-xs"> {outlet.adminEmail}</div>
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap w-1/6">
                      <div className="truncate max-w-xs">{outlet.adminNumber}</div>
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap w-[20%]">
                      {outlet.latitude}
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap w-[20%]">
                      {outlet.longitude}
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap w-[10%]">
                      {outlet.taxValue}
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap w-1/6">
                      <div className="truncate max-w-xs">{outlet.address}</div>
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap [30%]">
                      <span className={` py-1 px-2 rounded ${outlet.isActive ? 'bg-green-500 text-white font-semibold px-3.5' : 'bg-red-500 text-white font-semibold py-1.5 '}`}>
                        {outlet.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap text-right text-sm font-medium w-1/6">
                      <div className="flex space-x-4">
                        <Link to={`/multi-admin/edit-outlet/${outlet._id}`}>
                          <button className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">
                            <FaEdit />
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Pagination component */}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredOutlets.length / itemsPerPage)}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default ManageOutlets;
